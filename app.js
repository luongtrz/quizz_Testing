// Quiz App
class QuizApp {
    constructor() {
        this.currentTopic = null;
        this.questions = [];
        this.currentIndex = 0;
        this.answers = {};
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.init();
    }

    init() {
        this.initTheme();
        this.bindEvents();
        this.renderTopics();

        // Check for saved quiz state
        const saved = localStorage.getItem('quizState');
        if (saved) {
            if (confirm('Bạn có bài quiz đang làm dở. Tiếp tục?')) {
                this.restoreQuizState();
            }
            // If Cancel, keep state for next visit
        }
    }

    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const icon = document.getElementById('themeToggle').querySelector('.theme-icon');
        icon.textContent = theme === 'light' ? 'Chế độ: 🌙' : 'Chế độ: ☀️';
    }

    bindEvents() {
        document.getElementById('btnRandomQuiz').addEventListener('click', () => this.startRandomQuiz());
        document.getElementById('btnAllQuiz').addEventListener('click', () => this.startAllQuiz());
        document.getElementById('btnBack').addEventListener('click', () => this.goHome());
        document.getElementById('btnPrev').addEventListener('click', () => this.prevQuestion());
        document.getElementById('btnNext').addEventListener('click', () => this.nextQuestion());
        document.getElementById('btnReview').addEventListener('click', () => this.showReview());
        document.getElementById('btnHome').addEventListener('click', () => this.goHome());
        document.getElementById('btnRetry').addEventListener('click', () => this.retry());
        document.getElementById('btnBackReview').addEventListener('click', () => this.showScreen('resultScreen'));
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        // Add home navigation to logo click
        document.querySelector('.logo').addEventListener('click', () => {
            // Check if quiz is active and has progress
            const quizActive = document.getElementById('quizScreen').classList.contains('active');
            const hasProgress = this.questions && this.questions.length > 0 &&
                (this.currentIndex > 0 || Object.keys(this.answers).length > 0);

            if (quizActive && hasProgress) {
                if (confirm('Bạn có chắc muốn về trang chủ? Tiến độ bài làm sẽ bị mất.')) {
                    this.goHome();
                }
            } else {
                this.goHome();
            }
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterReview(e.target.dataset.filter));
        });

        // Keyboard shortcuts for quiz navigation
        document.addEventListener('keydown', (e) => {
            // Only work when quiz screen is active
            if (!document.getElementById('quizScreen').classList.contains('active')) return;

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevQuestion();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextQuestion();
            }
        });
    }

    renderTopics() {
        const grid = document.getElementById('topicGrid');
        grid.innerHTML = QUIZ_DATA.topics.map(topic => `
            <div class="topic-card" data-topic="${topic.id}">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-info">
                    <h3>${topic.name}</h3>
                    <div class="topic-count">${topic.questions.length} câu hỏi</div>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', () => this.startTopicQuiz(card.dataset.topic));
        });
    }

    startTopicQuiz(topicId) {
        const topic = QUIZ_DATA.topics.find(t => t.id === topicId);
        if (!topic) return;
        this.currentTopic = topic;
        this.questions = topic.questions.map((q, i) => ({ ...q, originalIndex: i, topic: topic }));
        this.startQuiz();
    }

    startRandomQuiz() {
        this.currentTopic = { name: 'Ngẫu Nhiên', icon: '🎲' };
        const allQuestions = [];
        QUIZ_DATA.topics.forEach(topic => {
            topic.questions.forEach((q, i) => {
                allQuestions.push({ ...q, originalIndex: i, topic: topic });
            });
        });
        this.questions = this.shuffle(allQuestions).slice(0, 20);
        this.startQuiz();
    }

    startAllQuiz() {
        this.currentTopic = { name: 'Tất Cả', icon: '📚' };
        const allQuestions = [];
        QUIZ_DATA.topics.forEach(topic => {
            topic.questions.forEach((q, i) => {
                allQuestions.push({ ...q, originalIndex: i, topic: topic });
            });
        });
        this.questions = this.shuffle(allQuestions);
        this.startQuiz();
    }

    startQuiz() {
        this.currentIndex = 0;
        this.answers = {};
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.updateStats();
        this.showScreen('quizScreen');
        this.renderQuestion();
    }

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        document.getElementById('currentQ').textContent = this.currentIndex + 1;
        document.getElementById('totalQ').textContent = this.questions.length;
        document.getElementById('progressFill').style.width = `${((this.currentIndex + 1) / this.questions.length) * 100}%`;
        document.getElementById('topicBadge').textContent = q.topic.name;
        document.getElementById('qNumber').textContent = `Câu ${q.originalIndex + 1}`;
        document.getElementById('questionText').textContent = q.q;

        const optsList = document.getElementById('optionsList');
        const letters = ['A', 'B', 'C', 'D'];
        const userAnswer = this.answers[this.currentIndex];
        const answered = userAnswer !== undefined;

        optsList.innerHTML = q.opts.map((opt, i) => {
            let cls = 'option-btn';
            if (answered) {
                cls += ' disabled';
                if (i === q.ans) cls += ' correct';
                else if (i === userAnswer && userAnswer !== q.ans) cls += ' incorrect';
            } else if (userAnswer === i) {
                cls += ' selected';
            }
            return `<button class="${cls}" data-index="${i}" ${answered ? 'disabled' : ''}>
                <strong>${letters[i]}.</strong>${opt}
            </button>`;
        }).join('');

        // Render Explanation if answered
        const expContainer = document.getElementById('explanationContent');
        if (answered) {
            expContainer.innerHTML = `
                <strong>💡 Giải thích chi tiết:</strong>
                ${q.exp || 'Chưa có giải thích cho câu hỏi này.'}
            `;
            expContainer.style.display = 'block';
        } else {
            expContainer.style.display = 'none';
        }

        if (!answered) {
            optsList.querySelectorAll('.option-btn').forEach(opt => {
                opt.addEventListener('click', (e) => this.selectAnswer(parseInt(opt.dataset.index)));
            });
        }

        document.getElementById('btnPrev').disabled = this.currentIndex === 0;
        const btnNext = document.getElementById('btnNext');
        btnNext.textContent = this.currentIndex === this.questions.length - 1 ? 'Xem kết quả' : 'Tiếp →';
    }

    selectAnswer(index) {
        if (this.answers[this.currentIndex] !== undefined) return;
        this.answers[this.currentIndex] = index;
        const q = this.questions[this.currentIndex];
        if (index === q.ans) {
            this.correctCount++;
        } else {
            this.incorrectCount++;
        }
        this.updateStats();
        this.renderQuestion();
        this.saveQuizState(); // Auto-save after each answer
    }

    updateStats() {
        document.getElementById('correctCount').textContent = this.correctCount;
        document.getElementById('incorrectCount').textContent = this.incorrectCount;
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.saveQuizState(); // Auto-save on navigation
        }
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.saveQuizState(); // Auto-save on navigation
        } else {
            this.showResults();
        }
    }

    showResults() {
        const total = this.questions.length;
        const skipped = total - Object.keys(this.answers).length;
        const percent = Math.round((this.correctCount / total) * 100);

        document.getElementById('scorePercent').textContent = percent;
        document.getElementById('finalCorrect').textContent = this.correctCount;
        document.getElementById('finalIncorrect').textContent = this.incorrectCount;
        document.getElementById('finalSkipped').textContent = skipped;

        const icon = document.getElementById('resultIcon');
        const title = document.getElementById('resultTitle');
        if (percent >= 80) {
            icon.textContent = '🎉';
            title.textContent = 'Xuất sắc!';
        } else if (percent >= 60) {
            icon.textContent = '👍';
            title.textContent = 'Tốt lắm!';
        } else if (percent >= 40) {
            icon.textContent = '💪';
            title.textContent = 'Cố gắng thêm!';
        } else {
            icon.textContent = '📚';
            title.textContent = 'Cần ôn tập thêm!';
        }

        // Save to history and clear active state
        this.saveQuizHistory();
        this.clearQuizState();

        this.showScreen('resultScreen');
    }

    showReview(filter = 'all') {
        const list = document.getElementById('reviewList');
        const letters = ['A', 'B', 'C', 'D'];

        let items = this.questions.map((q, i) => {
            const userAns = this.answers[i];
            let status = 'skipped';
            if (userAns !== undefined) {
                status = userAns === q.ans ? 'correct' : 'incorrect';
            }
            return { q, i, userAns, status };
        });

        if (filter === 'incorrect') items = items.filter(x => x.status === 'incorrect');
        if (filter === 'skipped') items = items.filter(x => x.status === 'skipped');

        list.innerHTML = items.map(({ q, i, userAns, status }) => {
            const statusText = status === 'correct' ? 'Đúng' : status === 'incorrect' ? 'Sai' : 'Bỏ qua';
            const statusColor = status === 'correct' ? 'text-success' : status === 'incorrect' ? 'text-error' : 'text-secondary';

            return `<div class="review-item">
                <div class="question-meta" style="margin-bottom:0.5rem">
                    <span>Câu ${i + 1}</span>
                    <span style="float:right; color: var(--${status === 'correct' ? 'success' : status === 'incorrect' ? 'error' : 'secondary'})">${statusText}</span>
                </div>
                <div class="review-q-text">${q.q}</div>
                
                ${status !== 'correct' ? `
                    ${userAns !== undefined ? `
                    <div class="review-opt user-wrong">
                        <strong>Bạn chọn:</strong> ${letters[userAns]}. ${q.opts[userAns]}
                    </div>` : ''}
                    <div class="review-opt correct-answer">
                        <strong>Đáp án đúng:</strong> ${letters[q.ans]}. ${q.opts[q.ans]}
                    </div>
                ` : `
                    <div class="review-opt correct-answer">
                        <strong>Bạn chọn:</strong> ${letters[q.ans]}. ${q.opts[q.ans]}
                    </div>
                `}
                
                <div class="review-explanation">
                    <strong>💡 Giải thích chi tiết:</strong>
                    ${q.exp || 'Chưa có giải thích cho câu hỏi này.'}
                </div>
            </div>`;
        }).join('');

        this.showScreen('reviewScreen');
    }

    filterReview(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.showReview(filter);
    }

    goHome() {
        this.clearQuizState(); // Clear saved progress
        this.showScreen('homeScreen');
    }

    retry() {
        this.startQuiz();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        if (screenId === 'quizScreen') {
            document.body.classList.add('quiz-mode');
        } else {
            document.body.classList.remove('quiz-mode');
        }

        window.scrollTo(0, 0);
    }

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ============ LocalStorage Persistence ============

    saveQuizState() {
        const state = {
            currentTopic: this.currentTopic,
            questions: this.questions,
            currentIndex: this.currentIndex,
            answers: this.answers,
            correctCount: this.correctCount,
            incorrectCount: this.incorrectCount,
            timestamp: Date.now()
        };
        localStorage.setItem('quizState', JSON.stringify(state));
    }

    restoreQuizState() {
        const saved = localStorage.getItem('quizState');
        if (!saved) return false;

        try {
            const state = JSON.parse(saved);
            // Check if state is less than 24 hours old
            if (Date.now() - state.timestamp > 24 * 60 * 60 * 1000) {
                this.clearQuizState();
                return false;
            }

            this.currentTopic = state.currentTopic;
            this.questions = state.questions;
            this.currentIndex = state.currentIndex;
            this.answers = state.answers;
            this.correctCount = state.correctCount;
            this.incorrectCount = state.incorrectCount;

            this.updateStats();
            this.showScreen('quizScreen');
            this.renderQuestion();
            return true;
        } catch (e) {
            this.clearQuizState();
            return false;
        }
    }

    clearQuizState() {
        localStorage.removeItem('quizState');
    }

    saveQuizHistory(result) {
        const history = this.getQuizHistory();
        history.unshift({
            topic: this.currentTopic?.name || 'Unknown',
            total: this.questions.length,
            correct: this.correctCount,
            incorrect: this.incorrectCount,
            percent: Math.round((this.correctCount / this.questions.length) * 100),
            date: new Date().toISOString()
        });
        // Keep only last 20 results
        localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 20)));
    }

    getQuizHistory() {
        try {
            return JSON.parse(localStorage.getItem('quizHistory')) || [];
        } catch {
            return [];
        }
    }
}

document.addEventListener('DOMContentLoaded', () => new QuizApp());
