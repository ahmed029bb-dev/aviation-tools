/* ============================================================
   SKYTUTOR APP LOGIC — the "machinery" ⚙️
   All content lives in data.js. This file just makes it work.
   ============================================================ */

/* ===== BUILD THE TOPIC LIST ===== */
function renderTopics() {
  const list = document.getElementById('topic-list');
  list.innerHTML = lessons.map(function (lesson) {
    return `
      <button class="topic-card" onclick="openLesson('${lesson.id}')">
        <span class="topic-emoji">${lesson.emoji}</span>
        <span class="topic-text">
          <span class="topic-cat">${lesson.category}</span>
          <span class="topic-title">${lesson.title}</span>
        </span>
        <span class="topic-time">${lesson.minutes} min read</span>
      </button>
    `;
  }).join('');
}

/* ===== OPEN ONE LESSON ===== */
function openLesson(id) {
  const lesson = lessons.find(function (l) { return l.id === id; });

  // Log this lesson as read (only once)
  if (!readLessons.includes(id)) {
    readLessons.push(id);
    saveReadLessons();
  }

  document.getElementById('lesson-content').innerHTML = `
    <button class="back-btn" onclick="showTopics()">← All topics</button>
    <span class="tag">${lesson.category}</span>
    <h2>${lesson.title}</h2>
    ${lesson.body}
  `;
  document.getElementById('topics-view').style.display = 'none';
  document.getElementById('lesson-view').style.display = 'block';
  window.scrollTo(0, 0);
}

/* ===== BACK TO THE TOPIC LIST ===== */
function showTopics() {
  document.getElementById('lesson-view').style.display = 'none';
  document.getElementById('topics-view').style.display = 'block';
}

/* ===== SWITCH TABS ===== */
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(function (s) { s.classList.remove('active'); });
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
  document.getElementById('tab-' + name).classList.add('active');
  if (name === 'progress') renderProgress(); // redraw the flight log
}

/* ============================================================
   QUIZ STATE
   ============================================================ */
const ROUND_LENGTH = 5;
let stats = loadStats();              // saved scoreboard (or fresh)
let readLessons = loadReadLessons();  // which lessons you've opened
let round = null;

/* Accuracy per topic, 0 to 1. Untried topics count as 0.5. */
function topicAccuracy(topicId) {
  const s = stats[topicId];
  if (!s || s.right + s.wrong === 0) return 0.5;
  return s.right / (s.right + s.wrong);
}

/* Lesson title from a topicId */
function topicName(topicId) {
  const lesson = lessons.find(function (l) { return l.id === topicId; });
  return lesson ? lesson.title : topicId;
}

/* ===== THE PERSONALIZATION ENGINE 🎯 =====
   Always pick the next question from your WEAKEST topic. */
function pickNextQuestion() {
  let pool = questionBank.filter(function (q) { return !round.askedIds.includes(q.id); });
  if (pool.length === 0) pool = questionBank;

  let weakest = 1;
  pool.forEach(function (q) {
    const acc = topicAccuracy(q.topicId);
    if (acc < weakest) weakest = acc;
  });

  const weakPool = pool.filter(function (q) { return topicAccuracy(q.topicId) === weakest; });
  return weakPool[Math.floor(Math.random() * weakPool.length)];
}

/* ===== START A ROUND ===== */
function startQuiz() {
  round = { askedIds: [], correctCount: 0, current: null };
  showQuestion();
}

/* ===== SHOW ONE QUESTION ===== */
function showQuestion() {
  const q = pickNextQuestion();
  round.current = q;
  round.askedIds.push(q.id);

  // The round progress bar fills a bit more with each question
  const progressPct = (round.askedIds.length / ROUND_LENGTH) * 100;

  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-meta">Question ${round.askedIds.length} of ${ROUND_LENGTH} · ${topicName(q.topicId)}</div>
    <div class="round-bar"><div class="round-fill" style="width:${progressPct}%"></div></div>
    <h2 class="quiz-question">${q.question}</h2>
    <div class="quiz-options">
      ${q.options.map(function (opt, i) {
        return `<button class="quiz-option" id="opt-${i}" onclick="answerQuestion(${i})">${opt}</button>`;
      }).join('')}
    </div>
    <div id="quiz-feedback"></div>
  `;
  window.scrollTo(0, 0);
}

/* ===== HANDLE AN ANSWER ===== */
function answerQuestion(chosenIndex) {
  const q = round.current;
  const isRight = chosenIndex === q.correctIndex;

  if (!stats[q.topicId]) stats[q.topicId] = { right: 0, wrong: 0 };
  if (isRight) { stats[q.topicId].right += 1; round.correctCount += 1; }
  else         { stats[q.topicId].wrong += 1; }
  saveStats();

  q.options.forEach(function (opt, i) {
    const btn = document.getElementById('opt-' + i);
    btn.disabled = true;
    if (i === q.correctIndex) btn.classList.add('right');
    else if (i === chosenIndex) btn.classList.add('wrong');
  });

  const done = round.askedIds.length >= ROUND_LENGTH;
  document.getElementById('quiz-feedback').innerHTML = `
    <div class="callout">
      <strong>${isRight ? '✅ Correct!' : '❌ Not quite.'}</strong> ${q.explain}
    </div>
    <button class="primary-btn" onclick="${done ? 'showResults()' : 'showQuestion()'}">
      ${done ? 'See my results' : 'Next question →'}
    </button>
  `;
}

/* ===== END-OF-ROUND RESULTS ===== */
function showResults() {
  const rows = Object.keys(stats).map(function (topicId) {
    const pct = Math.round(topicAccuracy(topicId) * 100);
    return `
      <div class="score-row">
        <span class="score-topic">${topicName(topicId)}</span>
        <div class="score-bar"><div class="score-fill" style="width:${pct}%"></div></div>
        <span class="score-pct">${pct}%</span>
      </div>`;
  }).join('');

  let weakestId = null, weakestAcc = 1.1;
  Object.keys(stats).forEach(function (topicId) {
    const acc = topicAccuracy(topicId);
    if (acc < weakestAcc) { weakestAcc = acc; weakestId = topicId; }
  });
  const suggestion = (weakestId && weakestAcc < 1)
    ? `<div class="callout"><strong>📌 Focus area:</strong> ${topicName(weakestId)} —
         <button class="link-btn" onclick="goStudy('${weakestId}')">review this lesson →</button></div>`
    : `<div class="callout"><strong>🏆 Perfect record!</strong> Nothing to fix — keep flying.</div>`;

  document.getElementById('quiz-area').innerHTML = `
    <div class="fly-by">✈️</div>
    <h2 class="quiz-question">Round complete: ${round.correctCount} / ${ROUND_LENGTH} ${round.correctCount === ROUND_LENGTH ? '🎉' : ''}</h2>
    <p class="placeholder" style="margin-bottom:18px;">Your accuracy by topic (all rounds so far):</p>
    ${rows}
    ${suggestion}
    <button class="primary-btn" onclick="startQuiz()">Fly another round 🔁</button>
  `;
}

/* Jump from anywhere straight to a lesson */
function goStudy(topicId) {
  showScreen('learn');
  openLesson(topicId);
}

/* ============================================================
   SAVING & LOADING — localStorage stores text, so:
   JSON.stringify = object ➜ text   JSON.parse = text ➜ object
   ============================================================ */
function saveStats() {
  localStorage.setItem('skytutor-stats', JSON.stringify(stats));
}
function loadStats() {
  const saved = localStorage.getItem('skytutor-stats');
  return saved ? JSON.parse(saved) : {};
}
function saveReadLessons() {
  localStorage.setItem('skytutor-read', JSON.stringify(readLessons));
}
function loadReadLessons() {
  const saved = localStorage.getItem('skytutor-read');
  return saved ? JSON.parse(saved) : [];
}

/* ============================================================
   PROGRESS DASHBOARD 📈
   ============================================================ */
function renderProgress() {
  let totalRight = 0, totalWrong = 0;
  Object.keys(stats).forEach(function (topicId) {
    totalRight += stats[topicId].right;
    totalWrong += stats[topicId].wrong;
  });
  const totalAnswered = totalRight + totalWrong;
  const overallPct = totalAnswered === 0 ? 0 : Math.round(totalRight / totalAnswered * 100);

  const rows = lessons.map(function (lesson) {
    const s = stats[lesson.id];
    const attempts = s ? s.right + s.wrong : 0;
    const pct = attempts === 0 ? 0 : Math.round(s.right / attempts * 100);

    let status, cls;
    if (attempts === 0)  { status = "Not tested";    cls = "badge-gray"; }
    else if (pct >= 80)  { status = "Mastered";      cls = "badge-green"; }
    else if (pct >= 60)  { status = "Getting there"; cls = "badge-blue"; }
    else                 { status = "Needs work";    cls = "badge-red"; }

    const readMark = readLessons.includes(lesson.id) ? "📖 lesson read" : "lesson not read yet";
    return `
      <div class="progress-card">
        <div class="progress-top">
          <span class="topic-title">${lesson.emoji} ${lesson.title}</span>
          <span class="badge ${cls}">${status}</span>
        </div>
        <div class="score-bar"><div class="score-fill" style="width:${pct}%"></div></div>
        <div class="progress-sub">
          ${attempts} question${attempts === 1 ? '' : 's'} answered ·
          ${attempts ? pct + '% correct' : 'no data yet'} · ${readMark}
        </div>
      </div>`;
  }).join('');

  document.getElementById('progress-area').innerHTML = `
    <div class="hero">
      <h2>Your flight log 📈</h2>
      <p>Saved on this computer — close the app and it'll still remember.</p>
    </div>
    <div class="stat-tiles">
      <div class="stat-tile"><div class="stat-num">${totalAnswered}</div><div class="stat-label">questions answered</div></div>
      <div class="stat-tile"><div class="stat-num">${overallPct}%</div><div class="stat-label">overall accuracy</div></div>
      <div class="stat-tile"><div class="stat-num">${readLessons.length}/${lessons.length}</div><div class="stat-label">lessons read</div></div>
    </div>
    ${rows}
    <button class="danger-btn" onclick="resetProgress()">Reset all progress</button>
  `;
}

/* Wipe the save file (asks first!) */
function resetProgress() {
  if (!confirm("Wipe all your saved progress? This can't be undone.")) return;
  stats = {};
  readLessons = [];
  localStorage.removeItem('skytutor-stats');
  localStorage.removeItem('skytutor-read');
  renderProgress();
}

/* ============================================================
   ASK THE TUTOR 🧑‍✈️ — keyword scoring against tutorBrain
   ============================================================ */
function tutorReply(text) {
  const q = text.toLowerCase();
  let best = null, bestScore = 0;

  tutorBrain.forEach(function (entry) {
    let score = 0;
    entry.keywords.forEach(function (kw) {
      if (q.includes(kw)) score += 1;
    });
    if (score > bestScore) { bestScore = score; best = entry; }
  });

  if (!best) {
    return { answer: `Hmm, I don't know that one yet! 🤔 Try asking about:
      <em>stalls, the four forces, the six-pack, right of way, fronts and clouds,
      or the 1-in-60 rule</em>. (Psst — you can teach me new answers by adding an
      entry to <strong>tutorBrain</strong> in data.js!)` };
  }
  return best;
}

function addBubble(html, who, topicId) {
  const log = document.getElementById('chat-log');
  const readMore = topicId
    ? `<br><button class="link-btn" onclick="goStudy('${topicId}')">📖 Open the full lesson →</button>`
    : '';
  log.innerHTML += `<div class="bubble ${who}">${html}${readMore}</div>`;
  log.scrollTop = log.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  addBubble(text, 'user');

  // Show "tutor is typing…" dots while it "thinks"
  const log = document.getElementById('chat-log');
  log.innerHTML += `<div class="bubble tutor typing" id="typing">
    <span></span><span></span><span></span></div>`;
  log.scrollTop = log.scrollHeight;

  const reply = tutorReply(text);
  setTimeout(function () {
    document.getElementById('typing').remove(); // dots out, answer in
    addBubble(reply.answer, 'tutor', reply.topicId);
  }, 900);
}

function askSuggested(question) {
  document.getElementById('chat-input').value = question;
  sendChat();
}

/* ===== DRAW THE TOPICS WHEN THE APP LOADS ===== */
renderTopics();