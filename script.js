/* =========================================================
   10 Strangers — script.js
   - 첫 페이지: Figma 디자인 그대로
   - 후속: 좌우 반전 → 다시 원본 → 반전 ... 번갈아
   - 데이터 중복 없음
   - Aku[8], Chunem[10], Soakie[10] 제거
   - 영상 상시 재생
   ========================================================= */

const pagesEl        = document.getElementById('pages');
const loadingEl      = document.getElementById('loading');
const interview      = document.getElementById('interview');
const interviewInner = document.getElementById('interview-inner');
const interviewClose = document.getElementById('interview-close');

function mediaPath(item) {
  if (!item.file) return null;
  return 'media/' + item.person + '/' + encodeURIComponent(item.file).replace(/\*/g, '%2A');
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function mediaKey(m) { return m.person + ':' + m.q + (m.variant ? ':' + m.variant : ''); }

/* =========================================================
   제외 미디어 — 잡지에 안 깔림
   ========================================================= */
const EXCLUDED = new Set([
  'Aku:8',       // 오디오 (영상 표시였지만 실제 오디오)
]);

const VISIBLE_MEDIA = MEDIA.filter(m =>
  (m.type === 'photo' || m.type === 'video') &&
  !EXCLUDED.has(mediaKey(m))
);

/* =========================================================
   비율 자동 감지
   ========================================================= */
function ratioToOrient(ratio) {
  if (ratio > 1.15) return 'landscape';
  if (ratio < 0.85) return 'portrait';
  return 'square';
}
function detectOrient(item) {
  return new Promise((resolve) => {
    if (item.type === 'photo') {
      const img = new Image();
      img.onload = () => resolve(ratioToOrient(img.naturalWidth / img.naturalHeight));
      img.onerror = () => resolve('square');
      img.src = mediaPath(item);
    } else if (item.type === 'video') {
      const v = document.createElement('video');
      v.preload = 'metadata';
      v.muted = true;
      v.onloadedmetadata = () => resolve(ratioToOrient(v.videoWidth / v.videoHeight));
      v.onerror = () => resolve('landscape');
      v.src = mediaPath(item);
    } else {
      resolve('square');
    }
  });
}

/* =========================================================
   첫 페이지 — Figma 디자인 그대로
   ========================================================= */
const FIRST_PAGE = [
  // 명시 미디어
  { col: '4 / span 1',  row: '1 / span 1', kind: 'media',   ref: { person: 'Aku',    q: 5 } },
  { col: '4 / span 1',  row: '2 / span 1', kind: 'media',   ref: { person: 'Chunem', q: 2 } },
  { col: '11 / span 2', row: '1 / span 2', kind: 'media',   ref: { person: 'Toha',   q: 3 } },
  { col: '13 / span 2', row: '2 / span 1', kind: 'media',   ref: { person: 'Soakie', q: 1 } },
  { col: '5 / span 4',  row: '3 / span 2', kind: 'media',   ref: { person: 'Yuyu',   q: 2 } },
  { col: '9 / span 2',  row: '3 / span 2', kind: 'media',   ref: { person: 'Andrea', q: 6 } },
  { col: '11 / span 2', row: '3 / span 2', kind: 'media',   ref: { person: 'Chunem', q: 5 } },
  { col: '1 / span 3',  row: '5 / span 3', kind: 'media',   ref: { person: 'Soakie', q: 2 } },
  { col: '11 / span 4', row: '5 / span 4', kind: 'media',   ref: { person: 'Toha',   q: 5 } },
  // 발췌
  { col: '5 / span 3',  row: '2 / span 1', kind: 'excerpt' },
  { col: '13 / span 2', row: '3 / span 1', kind: 'excerpt' },
  { col: '4 / span 3',  row: '5 / span 1', kind: 'excerpt' },
  { col: '4 / span 3',  row: '6 / span 1', kind: 'excerpt' },
  { col: '9 / span 2',  row: '5 / span 1', kind: 'excerpt' },
];

/* =========================================================
   첫 페이지 레이아웃 2 — Figma node 48:99
   ========================================================= */
const FIRST_PAGE_2 = [
  // 명시 미디어
  { col: '4 / span 1',  row: '1 / span 1', kind: 'media', ref: { person: 'Soakie', q: 2, variant: 2 } },
  { col: '4 / span 1',  row: '2 / span 1', kind: 'media', ref: { person: 'Toha',   q: 6 } },
  { col: '11 / span 2', row: '1 / span 2', kind: 'media', ref: { person: 'Aku',    q: 9 } },
  { col: '13 / span 2', row: '2 / span 1', kind: 'media', ref: { person: 'Chunem', q: 2, variant: 2 } },
  { col: '5 / span 4',  row: '3 / span 2', kind: 'media', ref: { person: 'Soakie', q: 1 } },
  { col: '9 / span 2',  row: '3 / span 2', kind: 'media', ref: { person: 'Toha',   q: 3 } },
  { col: '11 / span 2', row: '3 / span 2', kind: 'media', ref: { person: 'Yuyu',   q: 2, variant: 2 } },
  { col: '1 / span 3',  row: '5 / span 3', kind: 'media', ref: { person: 'Yuyu',   q: 1, variant: 2 } },
  { col: '11 / span 4', row: '5 / span 4', kind: 'media', ref: { person: 'Andrea', q: 6 } },
  // 발췌
  { col: '5 / span 3',  row: '2 / span 1', kind: 'excerpt' },
  { col: '13 / span 2', row: '3 / span 1', kind: 'excerpt' },
  { col: '4 / span 3',  row: '5 / span 1', kind: 'excerpt' },
  { col: '4 / span 3',  row: '6 / span 1', kind: 'excerpt' },
  { col: '9 / span 2',  row: '5 / span 1', kind: 'excerpt' },
];

/* 새로고침마다 레이아웃 1 ↔ 2 번갈아 표시 */
const _lastLayout = localStorage.getItem('firstPageLayout') || '1';
const ACTIVE_FIRST_PAGE = _lastLayout === '1' ? FIRST_PAGE_2 : FIRST_PAGE;
localStorage.setItem('firstPageLayout', _lastLayout === '1' ? '2' : '1');

/* =========================================================
   좌우 반전 — 14열 기준
   col N, span S → 새 col = 15 - N - S + 1 = 16 - N - S
   ========================================================= */
function mirrorPattern(pattern) {
  const TOTAL_COLS = 14;
  return pattern.map(slot => {
    const colStart = +slot.col.split(' / span ')[0];
    const colSpan  = +slot.col.split(' / span ')[1];
    const newStart = TOTAL_COLS - colStart - colSpan + 2;  // 14-N-S+2 = 16-N-S
    // ref는 그대로 가지만, 후속 페이지에선 ref 안 씀
    const { ref, ...rest } = slot;
    return {
      ...rest,
      col: newStart + ' / span ' + colSpan,
    };
  });
}

const MIRRORED_PAGE = mirrorPattern(FIRST_PAGE);
// 후속 페이지에는 ref 빼고 패턴만 (랜덤 콘텐츠로 채움)
const FOLLOW_NORMAL = FIRST_PAGE.map(s => {
  const { ref, ...rest } = s;
  return rest;
});

/* =========================================================
   슬롯 → DOM
   ========================================================= */
function buildMediaSlot(slot, item) {
  const el = document.createElement('div');
  el.className = 'slot slot-media';
  el.dataset.person = item.person;
  el.style.gridColumn = slot.col;
  el.style.gridRow = slot.row;

  const q = QUESTIONS[item.q - 1];

  if (item.type === 'photo') {
    const img = document.createElement('img');
    img.src = mediaPath(item);
    img.alt = q.name;
    img.loading = 'lazy';
    el.appendChild(img);
  } else if (item.type === 'video') {
    const video = document.createElement('video');
    video.src = mediaPath(item);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;            // 상시 재생
    video.preload = 'auto';
    el.appendChild(video);
    // 추가 보장: DOM에 들어간 후에도 명시적으로 play 호출
    video.addEventListener('loadeddata', () => video.play().catch(()=>{}));
  }

  const label = document.createElement('div');
  label.className = 'slot-label';
  label.textContent = '[' + item.q + '] ' + q.name + ' · ' + item.person;
  el.appendChild(label);

  el.addEventListener('click', () => openInterview(item));
  return el;
}

/* =========================================================
   푸터 슬롯 — Figma node 48:66
   col 4 / span 3, row 6 / span 1
   ========================================================= */
function buildFooterSlot() {
  const el = document.createElement('div');
  el.className = 'slot slot-footer';
  el.style.gridColumn = '4 / span 3';
  el.style.gridRow = '7 / span 8';
  el.style.paddingTop = '987px';

  const lines = [
    { text: 'Sihyun Kim' },
    { text: 'Seoul, South Korea' },
    { text: 'siihyunkim@gmail.com', href: 'mailto:siihyunkim@gmail.com' },
    { text: '@sihyunnkim', href: 'https://instagram.com/sihyunnkim/', target: '_blank' },
    { empty: true },
    { text: 'Hongik Univ. Visual Communication Design' },
    { text: 'Research Design Studio(3)' },
    { text: 'Prof.Jaewon Seok' },
    { empty: true },
    { text: 'Thank you to all the strangers who shared their stories' },
  ];

  for (const line of lines) {
    const d = document.createElement('div');
    if (line.empty) {
      d.className = 'footer-line-empty';
      d.innerHTML = '&nbsp;';
    } else if (line.href) {
      d.className = 'footer-line';
      const a = document.createElement('a');
      a.href = line.href;
      a.textContent = line.text;
      if (line.target) {
        a.target = line.target;
        a.rel = 'noopener noreferrer';
      }
      d.appendChild(a);
    } else {
      d.className = 'footer-line';
      d.textContent = line.text;
    }
    el.appendChild(d);
  }

  return el;
}

function buildExcerptSlot(slot, item) {
  const el = document.createElement('div');
  el.className = 'slot slot-excerpt';
  el.dataset.person = item.person;
  el.style.gridColumn = slot.col;
  el.style.gridRow = slot.row;

  const text = document.createElement('div');
  text.className = 'excerpt-text';
  text.textContent = item.text;
  if (containsKorean(item.text)) {
    text.classList.add('has-korean');
  }
  el.appendChild(text);

  el.addEventListener('click', () => {
    const media = MEDIA.find(m => m.person === item.person && m.q === item.q && (m.type === 'photo' || m.type === 'video'));
    if (media) openInterview(media);
    else {
      const fb = MEDIA.find(m => m.person === item.person && (m.type === 'photo' || m.type === 'video'));
      if (fb) openInterview(fb);
    }
  });
  return el;
}

/* =========================================================
   풀 관리 — 중복 없이 한 번씩
   ========================================================= */
let mediaPool = [];
let excerptPool = [];

function initPools() {
  const firstPageMedia = ACTIVE_FIRST_PAGE.filter(s => s.kind === 'media' && s.ref).map(s => s.ref);
  const usedKeys = new Set(firstPageMedia.map(r => r.person + ':' + r.q));

  mediaPool = shuffle(VISIBLE_MEDIA.filter(m => !usedKeys.has(mediaKey(m))));
  excerptPool = shuffle(EXCERPTS);
}

function nextMedia() {
  // 풀이 비면 null. 재셔플 안 함 = 중복 없음
  return mediaPool.length > 0 ? mediaPool.shift() : null;
}
function nextExcerpt() {
  // 발췌는 부족하면 다시 셔플해서 사용 (10개뿐이니 반복 허용)
  if (excerptPool.length === 0) excerptPool = shuffle(EXCERPTS);
  return excerptPool.shift();
}

function findMedia(ref) {
  return MEDIA.find(m =>
    m.person === ref.person &&
    m.q === ref.q &&
    (ref.variant !== undefined ? m.variant === ref.variant : !m.variant)
  );
}

/* =========================================================
   페이지 만들기
   ========================================================= */
function buildPage(pattern, isFirst) {
  const page = document.createElement('section');
  page.className = 'page';
  const grid = document.createElement('div');
  grid.className = 'page-grid';

  // 좌상단 라벨은 floating-label로 대체됨 (body에 fixed) — 여기선 생성 안 함

  for (const slot of pattern) {
    if (slot.kind === 'media') {
      const item = slot.ref ? findMedia(slot.ref) : nextMedia();
      if (item) grid.appendChild(buildMediaSlot(slot, item));
      // null이면 슬롯 비움
    } else if (slot.kind === 'excerpt') {
      grid.appendChild(buildExcerptSlot(slot, nextExcerpt()));
    }
  }

  page.appendChild(grid);
  return page;
}

function renderPages() {
  pagesEl.innerHTML = '';
  initPools();

  // 첫 페이지
  pagesEl.appendChild(buildPage(ACTIVE_FIRST_PAGE, true));

  // 후속: 좌우 반전 → 원본 → 반전 → ... 미디어 풀 빌 때까지
  let i = 0;
  while (mediaPool.length > 0) {
    // i가 짝수 → 좌우 반전 / 홀수 → 원본 결
    const pattern = (i % 2 === 0) ? MIRRORED_PAGE : FOLLOW_NORMAL;
    pagesEl.appendChild(buildPage(pattern, false));
    i++;
    if (i > 10) break;  // 안전망
  }

  // 마지막 페이지의 발췌 슬롯 모두 제거 → 그 자리에 푸터
  const allPages = pagesEl.querySelectorAll('.page');
  if (allPages.length > 0) {
    const lastGrid = allPages[allPages.length - 1].querySelector('.page-grid');
    if (lastGrid) {
      lastGrid.querySelectorAll('.slot-excerpt').forEach(e => e.remove());
      const footerEl = buildFooterSlot();
      lastGrid.appendChild(footerEl);

      // 푸터 진입 시 floating-label 페이드아웃
      if (window._footerObserver) window._footerObserver.disconnect();
      window._footerObserver = new IntersectionObserver((entries) => {
        document.body.classList.toggle('footer-in-view', entries[0].isIntersecting);
      }, { rootMargin: '0px 0px -50% 0px', threshold: 0 });
      window._footerObserver.observe(footerEl);
    }
  }
}

/* =========================================================
   인터뷰 뷰 — 블로그형
   - 한 사람의 1~10 미디어를 세로로 나열
   - 우측 텍스트는 sticky, 현재 미디어에 따라 페이드 전환
   - 좌측 인디케이터는 sticky, 현재 미디어 번호 강조
   - 클릭한 미디어 위치로 자동 스크롤
   ========================================================= */

let currentInterview = null;   // { person, observer, mediaElements }

function getInterviewText(person, q) {
  if (INTERVIEWS && INTERVIEWS[person] && typeof INTERVIEWS[person] === 'object') {
    return INTERVIEWS[person][q] || '';
  }
  return '';
}

/* 한글 포함 여부 검사 — 한 글자라도 한글이면 true */
function containsKorean(s) {
  return /[\u3131-\uD79D\uAC00-\uD7A3]/.test(s || '');
}

/* 텍스트 → 마크업 변환
   [Q] 접두사가 붙은 줄은 질문 (회색 + 들여쓰기)
   나머지는 답변 단락 */
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function renderInterviewText(text) {
  if (!text) return '';
  return text.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '<div class="interview-text-empty"></div>';
    if (trimmed.startsWith('[Q]')) {
      return '<div class="interview-text-q">' + escapeHtml(trimmed.slice(3).trim()) + '</div>';
    }
    return '<div class="interview-text-p">' + escapeHtml(trimmed) + '</div>';
  }).join('');
}

function buildInterviewMediaItem(item) {
  const wrap = document.createElement('div');
  wrap.className = 'interview-media-item';
  wrap.dataset.q = item.q;
  wrap.id = 'interview-q-' + item.q;

  if (item.type === 'photo') {
    const img = document.createElement('img');
    img.src = mediaPath(item);
    img.alt = QUESTIONS[item.q - 1].name;
    img.loading = 'lazy';
    wrap.appendChild(img);
  } else if (item.type === 'video') {
    const v = document.createElement('video');
    v.src = mediaPath(item);
    v.controls = true;
    v.muted = false;
    v.loop = false;
    v.playsInline = true;
    wrap.appendChild(v);
  } else if (item.type === 'audio') {
    const a = document.createElement('audio');
    a.src = mediaPath(item);
    a.controls = true;
    wrap.appendChild(a);
  } else if (item.type === 'map') {
    // iframe 임베드된 구글맵 + "Google Maps에서 열기" 버튼
    if (item.embedUrl) {
      const iframe = document.createElement('iframe');
      iframe.src = item.embedUrl;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      iframe.className = 'interview-map-iframe';
      wrap.appendChild(iframe);
    } else {
      const ph = document.createElement('div');
      ph.className = 'interview-map-placeholder';
      ph.textContent = 'Map preview unavailable';
      wrap.appendChild(ph);
    }
    if (item.openUrl) {
      const link = document.createElement('a');
      link.href = item.openUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'interview-map-open';
      link.textContent = 'Open in Google Maps ↗';
      wrap.appendChild(link);
    }
  }

  return wrap;
}

function openInterview(clickedItem) {
  const person = clickedItem.person;
  // 해당 인물의 모든 미디어 (q 순서대로)
  const personMedia = MEDIA
    .filter(m => m.person === person)
    .sort((a, b) => a.q - b.q);

  // 인터뷰 페이지 빌드
  const inner = document.getElementById('interview-inner');
  inner.innerHTML = '';
  inner.className = '';

  const grid = document.createElement('div');
  grid.className = 'interview-grid';

  // 중앙 미디어 컬럼
  const mediaCol = document.createElement('div');
  mediaCol.className = 'interview-media-column';
  const mediaElements = [];
  for (const m of personMedia) {
    const el = buildInterviewMediaItem(m);
    mediaCol.appendChild(el);
    mediaElements.push({ el, item: m });
  }
  grid.appendChild(mediaCol);

  // 우측 텍스트 컬럼 (sticky)
  const textCol = document.createElement('div');
  textCol.className = 'interview-text-column';
  const caption = document.createElement('div');
  caption.className = 'interview-text-caption';
  const body = document.createElement('div');
  body.className = 'interview-text-body';
  textCol.appendChild(caption);
  textCol.appendChild(body);
  grid.appendChild(textCol);

  inner.appendChild(grid);

  // body에 interview-open 클래스 추가 → Strangers ↔ Stories 전환 시작
  document.body.classList.add('interview-open');

  // floating-label 인디케이터에 클릭 핸들러 연결
  const flNums = document.getElementById('floating-label-nums');
  const personQs = new Set(personMedia.map(m => m.q));
  flNums.querySelectorAll('div').forEach(d => {
    const q = +d.dataset.q;
    d.style.cursor = personQs.has(q) ? 'pointer' : 'default';
    d.onclick = personQs.has(q) ? () => {
      const target = document.getElementById('interview-q-' + q);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } : null;
  });

  // 인터뷰 페이지 표시
  interview.hidden = false;

  // 클릭한 미디어 위치로 스크롤
  requestAnimationFrame(() => {
    const target = document.getElementById('interview-q-' + clickedItem.q);
    if (target) {
      interview.scrollTop = target.offsetTop - 20;
    } else {
      interview.scrollTop = 0;
    }
  });

  // 현재 보이는 미디어 추적 — IntersectionObserver
  let currentActiveQ = null;
  function setActive(q) {
    if (currentActiveQ === q) return;
    currentActiveQ = q;

    // floating-label 인디케이터 강조
    flNums.querySelectorAll('div').forEach(d => {
      d.classList.toggle('active', +d.dataset.q === q);
    });

    // 텍스트 페이드 전환
    const text = getInterviewText(person, q);
    const newCaption = '[' + q + '] ' + QUESTIONS[q - 1].name;
    caption.classList.add('fading');
    body.classList.add('fading');
    setTimeout(() => {
      caption.textContent = newCaption;
      body.innerHTML = renderInterviewText(text) || '<div class="interview-text-p" style="color:var(--muted)">(인터뷰 텍스트가 곧 들어갑니다.)</div>';
      body.classList.toggle('has-korean', containsKorean(text));
      caption.classList.remove('fading');
      body.classList.remove('fading');
    }, 200);
  }

  const observer = new IntersectionObserver((entries) => {
    let bestEntry = null;
    let bestRatio = 0;
    for (const e of entries) {
      if (e.isIntersecting && e.intersectionRatio > bestRatio) {
        bestRatio = e.intersectionRatio;
        bestEntry = e;
      }
    }
    if (bestEntry) {
      setActive(+bestEntry.target.dataset.q);
    }
  }, {
    root: interview,
    rootMargin: '-30% 0px -50% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  mediaElements.forEach(({ el }) => observer.observe(el));

  setTimeout(() => setActive(clickedItem.q), 50);

  // 페이지 끝 도달 → 더 스크롤 → 닫기 (잡지 복귀)
  // 끝 도달 후 추가 휠 누적이 임계점 넘으면 닫음
  let nearEnd = false;
  let overscrollAccum = 0;
  const OVERSCROLL_THRESHOLD = 270;   // 끝에서 270px 더 스크롤해야 닫힘
  let lastWheelTime = 0;

  function onScroll() {
    const scrollBottom = interview.scrollTop + interview.clientHeight;
    nearEnd = (scrollBottom >= interview.scrollHeight - 5);
    if (!nearEnd) overscrollAccum = 0;  // 끝에서 떨어지면 누적 리셋
  }
  function onWheel(e) {
    if (interview.hidden) return;
    if (!nearEnd) return;
    if (e.deltaY <= 0) {                // 위로 스크롤 → 누적 리셋
      overscrollAccum = 0;
      return;
    }
    // 휠 사이 시간 너무 길면 리셋 (한 동작으로 묶기)
    const now = performance.now();
    if (now - lastWheelTime > 500) overscrollAccum = 0;
    lastWheelTime = now;

    overscrollAccum += e.deltaY;
    if (overscrollAccum >= OVERSCROLL_THRESHOLD) {
      overscrollAccum = 0;
      closeInterview();
    }
  }
  interview.addEventListener('scroll', onScroll);
  interview.addEventListener('wheel', onWheel, { passive: true });

  currentInterview = {
    person, observer, mediaElements,
    cleanup: () => {
      interview.removeEventListener('scroll', onScroll);
      interview.removeEventListener('wheel', onWheel);
    },
  };
}

function closeInterview() {
  // 이미 닫는 중이면 중복 실행 방지
  if (interview.classList.contains('closing')) return;

  // 페이드아웃 시작
  interview.classList.add('closing');
  document.body.classList.remove('interview-open');
  document.body.classList.add('returning-to-magazine');

  // 미디어 정지 (즉시)
  document.querySelectorAll('.interview-media-item video, .interview-media-item audio').forEach(el => el.pause());

  // 트랜지션 끝나면 실제로 hidden
  setTimeout(() => {
    interview.hidden = true;
    interview.classList.remove('closing');
    document.body.classList.remove('returning-to-magazine');

    if (currentInterview) {
      if (currentInterview.observer) currentInterview.observer.disconnect();
      if (currentInterview.cleanup) currentInterview.cleanup();
    }

    // floating-label 인디케이터 초기화 + 잡지 모드 핸들러 복원
    const flNums = document.getElementById('floating-label-nums');
    if (flNums) {
      flNums.querySelectorAll('div').forEach(d => {
        d.classList.remove('active');
        d.onclick = null;
        d.style.cursor = '';
      });
    }
    setupMagazineLabelHandlers();   // 잡지 모드 핸들러 재설치

    currentInterview = null;
  }, 600);
}
interviewClose.addEventListener('click', closeInterview);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !interview.hidden) closeInterview();
});

/* =========================================================
   잡지 모드 — 필터링 by 인물
   1-6 클릭 → 그 사람 미디어만 보이고 나머지 페이드아웃
   같은 번호 다시 클릭 또는 빈 공간 클릭 → 복귀
   ========================================================= */

const PERSON_BY_NUMBER = {
  1: 'Yuyu',
  2: 'Aku',
  3: 'Soakie',
  4: 'Chunem',
  5: 'Andrea',
  6: 'Toha',
};

let currentFilter = null;

function filterByPerson(person) {
  currentFilter = person;
  document.body.classList.add('filter-active');
  document.querySelectorAll('.slot-media, .slot-excerpt').forEach(el => {
    if (el.dataset.person === person) {
      el.classList.remove('filter-hidden');
    } else {
      el.classList.add('filter-hidden');
    }
  });
  // 활성 인디케이터 표시
  const flNums = document.getElementById('floating-label-nums');
  flNums.querySelectorAll('div').forEach(d => {
    d.classList.toggle('filter-active', d.dataset.person === person);
  });
}

function clearFilter() {
  if (!currentFilter) return;
  currentFilter = null;
  document.body.classList.remove('filter-active');
  document.querySelectorAll('.slot-media.filter-hidden, .slot-excerpt.filter-hidden').forEach(el => {
    el.classList.remove('filter-hidden');
  });
  const flNums = document.getElementById('floating-label-nums');
  flNums.querySelectorAll('div').forEach(d => d.classList.remove('filter-active'));
}

function setupMagazineLabelHandlers() {
  const flNums = document.getElementById('floating-label-nums');
  if (!flNums) return;
  flNums.querySelectorAll('div').forEach(d => {
    const q = +d.dataset.q;
    const person = PERSON_BY_NUMBER[q];
    if (person) {
      d.dataset.person = person;
      d.classList.add('has-person');
      d.classList.remove('no-person');
      d.onclick = (e) => {
        // 인터뷰 모드면 무시 (인터뷰 모드 핸들러가 따로 처리)
        if (document.body.classList.contains('interview-open')) return;
        e.stopPropagation();
        if (currentFilter === person) {
          clearFilter();
        } else {
          filterByPerson(person);
        }
      };
    } else {
      d.dataset.person = 'Looking for…';
      d.classList.add('no-person');
      d.classList.remove('has-person');
      d.onclick = null;
    }
  });
}

// 잡지 빈 공간 클릭 → 필터 해제
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('interview-open')) return;
  if (!currentFilter) return;
  // 미디어/발췌/라벨이 아닌 곳 클릭이면 해제
  if (e.target.closest('.slot-media') ||
      e.target.closest('.slot-excerpt') ||
      e.target.closest('.floating-label')) {
    return;
  }
  clearFilter();
});

/* =========================================================
   반응형 자동 축소
   가로/세로 둘 다 viewport 안에 들어가도록 비례 축소.
   비율 유지 (zoom 사용).
   ========================================================= */
function applyResponsiveScale() {
  const targetW = 1525;   // 잡지 캔버스 1505 + 여유
  const targetH = 1100;   // 잡지 한 페이지 대략 높이
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;
  const sw = vw / targetW;
  const sh = vh / targetH;
  let scale = Math.min(sw, sh);
  scale = Math.min(scale, 1);      // 1 초과 안 함 (큰 모니터는 원본)
  scale = Math.max(scale, 0.97);   // 0.92 미만 안 함 (가로 여백 유지)
  if (scale < 1) {
    document.documentElement.style.zoom = scale.toFixed(4);
  } else {
    document.documentElement.style.zoom = '';
  }
}
window.addEventListener('resize', applyResponsiveScale);

/* =========================================================
   시작
   ========================================================= */
(async function init() {
  applyResponsiveScale();   // 즉시 적용 (렌더 전에 zoom 설정)
  try {
    await Promise.all(VISIBLE_MEDIA.map(async (item) => {
      item.orient = await detectOrient(item);
    }));
    renderPages();
    setupMagazineLabelHandlers();   // 잡지 모드 라벨 클릭/호버 활성화
  } catch (err) {
    console.error('init failed:', err);
    renderPages();
    setupMagazineLabelHandlers();
  } finally {
    loadingEl.hidden = true;
    applyResponsiveScale();   // 렌더 후 다시 한 번 (확실히)
  }
})();