class QuizApp {
    constructor() {
        this.currentSubjectKey = 'testing';
        this.runtimeQuizData = {};
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
        this.renderSubjectTabs();

        const savedSubject = localStorage.getItem('activeSubject') || this.currentSubjectKey;
        this.setSubject(savedSubject, { promptRestore: false });
        this.promptRestoreForCurrentSubject();
    }

    getSubjectRegistry() {
        return window.QUIZ_SETS || {};
    }

    getSubjectKeys() {
        return Object.keys(this.getSubjectRegistry());
    }

    getSubjectConfig(subjectKey = this.currentSubjectKey) {
        return this.getSubjectRegistry()[subjectKey] || null;
    }

    getQuizData(subjectKey = this.currentSubjectKey) {
        if (!this.runtimeQuizData[subjectKey]) {
            this.runtimeQuizData[subjectKey] = this.buildRuntimeQuizData(subjectKey);
        }

        return this.runtimeQuizData[subjectKey];
    }

    getStateStorageKey(subjectKey = this.currentSubjectKey) {
        return `quizState:${subjectKey}`;
    }

    getHistoryStorageKey(subjectKey = this.currentSubjectKey) {
        return `quizHistory:${subjectKey}`;
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

        document.getElementById('subjectTabs').addEventListener('click', (e) => {
            const tab = e.target.closest('.subject-tab');
            if (!tab) return;
            this.setSubject(tab.dataset.subject);
        });

        document.querySelector('.logo').addEventListener('click', () => {
            const quizActive = document.getElementById('quizScreen').classList.contains('active');
            const hasProgress = this.questions.length > 0 &&
                (this.currentIndex > 0 || Object.keys(this.answers).length > 0);

            if (quizActive && hasProgress) {
                if (confirm('Bạn có chắc muốn về trang chủ? Tiến độ bài làm sẽ bị mất.')) {
                    this.goHome();
                }
            } else {
                this.goHome();
            }
        });

        document.querySelectorAll('.filter-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => this.filterReview(e.target.dataset.filter));
        });

        document.addEventListener('keydown', (e) => {
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

    renderSubjectTabs() {
        const tabs = document.getElementById('subjectTabs');
        const subjectKeys = this.getSubjectKeys();

        tabs.innerHTML = subjectKeys.map((subjectKey) => {
            const subject = this.getSubjectConfig(subjectKey);
            const activeClass = subjectKey === this.currentSubjectKey ? ' active' : '';
            return `
                <button class="subject-tab${activeClass}" data-subject="${subjectKey}" role="tab" aria-selected="${subjectKey === this.currentSubjectKey}">
                    ${subject?.label || subjectKey}
                </button>
            `;
        }).join('');
    }

    updateSubjectUI() {
        const subject = this.getSubjectConfig();
        if (!subject) return;

        document.querySelector('.logo').textContent = subject.title || 'Quiz App';
        document.getElementById('subjectTitle').textContent = subject.title || subject.label || 'Quiz App';
        document.getElementById('subjectDescription').textContent = subject.description || 'Chọn bộ câu hỏi bạn muốn ôn tập.';
        document.title = subject.title || 'Quiz App';
    }

    buildRuntimeQuizData(subjectKey) {
        const sourceData = this.getSubjectConfig(subjectKey)?.data || { topics: [] };

        return {
            ...sourceData,
            topics: sourceData.topics.map((topic) => ({
                ...topic,
                questions: this.randomizeTopicQuestions(topic.questions || [])
            }))
        };
    }

    randomizeTopicQuestions(questions) {
        const targetAnswers = this.buildBalancedAnswerTargets(questions.length);
        const randomizedQuestions = questions.map((question, index) => this.randomizeQuestion(question, targetAnswers[index]));
        return this.shuffle(randomizedQuestions);
    }

    buildBalancedAnswerTargets(total) {
        const base = Math.floor(total / 4);
        const remainder = total % 4;
        const counts = [base, base, base, base];

        this.shuffle([0, 1, 2, 3]).slice(0, remainder).forEach((index) => {
            counts[index]++;
        });

        const targets = [];
        counts.forEach((count, answerIndex) => {
            for (let i = 0; i < count; i++) {
                targets.push(answerIndex);
            }
        });

        return this.shuffle(targets);
    }

    randomizeQuestion(question, forcedAnswerIndex = null) {
        const questionClone = {
            ...question,
            opts: [...(question.opts || [])]
        };

        if (questionClone.opts.length !== 4 || !Number.isInteger(questionClone.ans)) {
            return questionClone;
        }

        const optionIndexes = this.buildOptionOrder(questionClone.ans, forcedAnswerIndex);
        const remappedOptions = optionIndexes.map((index) => questionClone.opts[index]);
        const newAnswerIndex = optionIndexes.indexOf(questionClone.ans);

        return {
            ...questionClone,
            opts: remappedOptions,
            ans: newAnswerIndex,
            exp: this.remapExplanation(questionClone.exp, optionIndexes, newAnswerIndex)
        };
    }

    buildOptionOrder(correctAnswerIndex, forcedAnswerIndex) {
        if (!Number.isInteger(forcedAnswerIndex) || forcedAnswerIndex < 0 || forcedAnswerIndex > 3) {
            return this.shuffle([0, 1, 2, 3]);
        }

        const distractors = this.shuffle([0, 1, 2, 3].filter((index) => index !== correctAnswerIndex));
        const optionIndexes = [];
        let distractorCursor = 0;

        for (let index = 0; index < 4; index++) {
            if (index === forcedAnswerIndex) {
                optionIndexes.push(correctAnswerIndex);
            } else {
                optionIndexes.push(distractors[distractorCursor++]);
            }
        }

        return optionIndexes;
    }

    remapExplanation(explanation, optionIndexes, newAnswerIndex) {
        if (!explanation) return explanation;

        const letters = ['A', 'B', 'C', 'D'];
        const oldToNew = new Array(4);
        optionIndexes.forEach((oldIndex, newIndex) => {
            oldToNew[oldIndex] = newIndex;
        });

        const letterMap = Object.fromEntries(
            letters.map((letter, oldIndex) => [letter, letters[oldToNew[oldIndex]]])
        );

        return explanation
            .split('<br>')
            .map((line, lineIndex) => {
                if (lineIndex === 0) {
                    return line.replace(/([ABCD])(?=[:.])/, letters[newAnswerIndex]);
                }

                return line.replace(
                    /^([^ABCD]*)([ABCD](?:\s*,\s*[ABCD])*)(?=[:.\s<])/,
                    (_, prefix, cluster) => prefix + cluster.replace(/[ABCD]/g, (letter) => letterMap[letter])
                );
            })
            .join('<br>');
    }

    resetRuntimeState() {
        this.currentTopic = null;
        this.questions = [];
        this.currentIndex = 0;
        this.answers = {};
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.updateStats();
    }

    setSubject(subjectKey, { promptRestore = true } = {}) {
        const subjectKeys = this.getSubjectKeys();
        if (!subjectKeys.length) return;

        const nextSubjectKey = this.getSubjectConfig(subjectKey) ? subjectKey : subjectKeys[0];
        const switchingSubject = this.currentSubjectKey !== nextSubjectKey;

        if (switchingSubject && this.questions.length > 0) {
            this.saveQuizState();
        }

        this.currentSubjectKey = nextSubjectKey;
        localStorage.setItem('activeSubject', this.currentSubjectKey);

        this.resetRuntimeState();
        this.renderSubjectTabs();
        this.updateSubjectUI();
        this.renderTopics();
        this.showScreen('homeScreen');

        if (promptRestore) {
            this.promptRestoreForCurrentSubject();
        }
    }

    promptRestoreForCurrentSubject() {
        const saved = localStorage.getItem(this.getStateStorageKey());
        if (!saved) return;

        if (confirm('Bạn có bài quiz đang làm dở ở môn này. Tiếp tục?')) {
            this.restoreQuizState();
        }
    }

    renderTopics() {
        const quizData = this.getQuizData();
        const grid = document.getElementById('topicGrid');

        if (!quizData.topics.length) {
            grid.innerHTML = '<div class="topic-empty">Chưa có chủ đề nào cho môn này.</div>';
            return;
        }

        grid.innerHTML = quizData.topics.map((topic) => `
            <div class="topic-card" data-topic="${topic.id}">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-info">
                    <h3>${topic.name}</h3>
                    <div class="topic-count">${topic.questions.length} câu hỏi</div>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.topic-card').forEach((card) => {
            card.addEventListener('click', () => this.startTopicQuiz(card.dataset.topic));
        });
    }

    startTopicQuiz(topicId) {
        const topic = this.getQuizData().topics.find((item) => item.id === topicId);
        if (!topic) return;

        this.currentTopic = topic;
        this.questions = topic.questions.map((q, i) => ({ ...q, originalIndex: i, topic }));
        this.startQuiz();
    }

    startRandomQuiz() {
        this.currentTopic = { name: 'Ngẫu nhiên', icon: '🎲' };
        const allQuestions = [];

        this.getQuizData().topics.forEach((topic) => {
            topic.questions.forEach((q, i) => {
                allQuestions.push({ ...q, originalIndex: i, topic });
            });
        });

        this.questions = this.shuffle(allQuestions).slice(0, 20);
        this.startQuiz();
    }

    startAllQuiz() {
        this.currentTopic = { name: 'Tất cả', icon: '📚' };
        const allQuestions = [];

        this.getQuizData().topics.forEach((topic) => {
            topic.questions.forEach((q, i) => {
                allQuestions.push({ ...q, originalIndex: i, topic });
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
        if (!q) return;

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
            optsList.querySelectorAll('.option-btn').forEach((opt) => {
                opt.addEventListener('click', () => this.selectAnswer(parseInt(opt.dataset.index, 10)));
            });
        }

        document.getElementById('btnPrev').disabled = this.currentIndex === 0;
        document.getElementById('btnNext').textContent = this.currentIndex === this.questions.length - 1 ? 'Xem kết quả' : 'Tiếp →';
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
        this.saveQuizState();
    }

    updateStats() {
        document.getElementById('correctCount').textContent = this.correctCount;
        document.getElementById('incorrectCount').textContent = this.incorrectCount;
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.saveQuizState();
        }
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.saveQuizState();
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

        if (filter === 'incorrect') items = items.filter((item) => item.status === 'incorrect');
        if (filter === 'skipped') items = items.filter((item) => item.status === 'skipped');

        list.innerHTML = items.map(({ q, i, userAns, status }) => {
            const statusText = status === 'correct' ? 'Đúng' : status === 'incorrect' ? 'Sai' : 'Bỏ qua';
            const statusColor = status === 'correct' ? 'success' : status === 'incorrect' ? 'error' : 'secondary';

            return `<div class="review-item">
                <div class="question-meta" style="margin-bottom:0.5rem">
                    <span>Câu ${i + 1}</span>
                    <span style="float:right; color: var(--${statusColor})">${statusText}</span>
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
        document.querySelectorAll('.filter-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.showReview(filter);
    }

    goHome() {
        this.clearQuizState();
        this.resetRuntimeState();
        this.renderTopics();
        this.showScreen('homeScreen');
    }

    retry() {
        this.startQuiz();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach((screen) => screen.classList.remove('active'));
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

    saveQuizState() {
        if (!this.questions.length) return;

        const state = {
            currentTopic: this.currentTopic,
            questions: this.questions,
            currentIndex: this.currentIndex,
            answers: this.answers,
            correctCount: this.correctCount,
            incorrectCount: this.incorrectCount,
            timestamp: Date.now()
        };

        localStorage.setItem(this.getStateStorageKey(), JSON.stringify(state));
    }

    restoreQuizState() {
        const saved = localStorage.getItem(this.getStateStorageKey());
        if (!saved) return false;

        try {
            const state = JSON.parse(saved);
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
        } catch (error) {
            this.clearQuizState();
            return false;
        }
    }

    clearQuizState() {
        localStorage.removeItem(this.getStateStorageKey());
    }

    saveQuizHistory() {
        const history = this.getQuizHistory();
        history.unshift({
            subject: this.getSubjectConfig()?.label || this.currentSubjectKey,
            topic: this.currentTopic?.name || 'Unknown',
            total: this.questions.length,
            correct: this.correctCount,
            incorrect: this.incorrectCount,
            percent: Math.round((this.correctCount / this.questions.length) * 100),
            date: new Date().toISOString()
        });

        localStorage.setItem(this.getHistoryStorageKey(), JSON.stringify(history.slice(0, 20)));
    }

    getQuizHistory() {
        try {
            return JSON.parse(localStorage.getItem(this.getHistoryStorageKey())) || [];
        } catch {
            return [];
        }
    }
}

document.addEventListener('DOMContentLoaded', () => new QuizApp());
