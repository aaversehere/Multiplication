/* ===================================================
    script.js — VERSI FINAL & LENGKAP 
    (DENGAN RED FLASH SCREEN & SUARA 'TET')
=================================================== */

/* ---------------------------
   1. BANK SOAL CAMPURAN (Mixed Question Bank)
----------------------------*/
const questionBank = {
    easy: [
        { type: 'text', q: "2 x 3 = ...", a: 6, opt: [5, 6, 8, 9] },
        { type: 'text', q: "4 x 1 = ...", a: 4, opt: [1, 4, 5, 0] },
        { type: 'story', q: "Ibu membeli 3 keranjang apel. Setiap keranjang berisi 2 apel. Berapa jumlah semua apel?", a: 6, opt: [5, 6, 7, 9] },
        { type: 'image', q: "Hitung jumlah roda mobil di bawah ini! (2 mobil x 4 roda)", img: "game matematika.png", a: 8, opt: [6, 8, 10, 4] },
        { type: 'text', q: "5 x 2 = ...", a: 10, opt: [10, 7, 12, 15] },
        { type: 'story', q: "Ada 2 ekor kucing. Setiap kucing punya 4 kaki. Berapa total kaki kucing?", a: 8, opt: [6, 8, 4, 10] },
        { type: 'text', q: "3 x 3 = ...", a: 9, opt: [6, 9, 12, 3] },
        { type: 'image', q: "Jika satu tangan ada 5 jari. Berapa jari di 2 tangan?", img: "latihan soal.png", a: 10, opt: [5, 10, 15, 20] },
        { type: 'text', q: "1 x 9 = ...", a: 9, opt: [1, 9, 10, 0] },
        { type: 'story', q: "Ayah membawa 4 kantong plastik. Tiap kantong ada 2 roti. Berapa roti ayah?", a: 8, opt: [6, 8, 10, 4] },
        { type: 'text', q: "2 x 5 = ...", a: 10, opt: [10, 15, 5, 20] },
        { type: 'text', q: "3 x 4 = ...", a: 12, opt: [12, 10, 15, 7] },
        { type: 'image', q: "Ada 3 pot bunga. Tiap pot tumbuh 1 bunga. Berapa total bunga?", img: "cover semua.jpeg", a: 3, opt: [1, 2, 3, 4] },
        { type: 'text', q: "4 x 4 = ...", a: 16, opt: [12, 16, 20, 8] },
        { type: 'story', q: "Budi punya 5 kotak pensil. Isinya masing-masing 1 pensil. Berapa pensil Budi?", a: 5, opt: [1, 5, 10, 6] },
        { type: 'text', q: "2 x 2 = ...", a: 4, opt: [2, 4, 6, 8] },
        { type: 'text', q: "5 x 3 = ...", a: 15, opt: [10, 15, 20, 12] }
    ],
    medium: [
        { type: 'text', q: "6 x 3 = ...", a: 18, opt: [12, 18, 24, 15] },
        { type: 'story', q: "Di kelas ada 4 baris meja. Setiap baris ada 5 meja. Berapa total meja di kelas?", a: 20, opt: [16, 20, 24, 18] },
        { type: 'text', q: "7 x 2 = ...", a: 14, opt: [14, 12, 16, 18] },
        { type: 'image', q: "Satu laba-laba punya 8 kaki. Berapa kaki jika ada 2 laba-laba?", img: "new modul interaktif kartun.png", a: 16, opt: [12, 14, 16, 18] },
        { type: 'text', q: "8 x 4 = ...", a: 32, opt: [30, 32, 36, 28] },
        { type: 'text', q: "5 x 6 = ...", a: 30, opt: [25, 30, 35, 40] },
        { type: 'story', q: "Pak tani menanam 6 baris jagung. Satu baris ada 4 pohon. Berapa pohon jagung semuanya?", a: 24, opt: [20, 22, 24, 28] },
        { type: 'text', q: "3 x 8 = ...", a: 24, opt: [21, 24, 27, 30] },
        { type: 'image', q: "Berapa hasil dari 5 kelopak bunga dikali 5 bunga?", img: "cover semua.jpeg", a: 25, opt: [20, 25, 30, 15] },
        { type: 'text', q: "9 x 2 = ...", a: 18, opt: [18, 16, 20, 19] },
        { type: 'story', q: "Satu minggu ada 7 hari. Berapa hari dalam 3 minggu?", a: 21, opt: [14, 21, 28, 30] },
        { type: 'text', q: "4 x 7 = ...", a: 28, opt: [24, 28, 32, 21] },
        { type: 'text', q: "6 x 6 = ...", a: 36, opt: [30, 36, 42, 24] },
        { type: 'image', q: "3 dadu dilempar. Jika semua muncul angka 6, berapa totalnya? (3 x 6)", img: "game matematika.png", a: 18, opt: [12, 15, 18, 21] },
        { type: 'text', q: "7 x 5 = ...", a: 35, opt: [30, 35, 40, 45] },
        { type: 'story', q: "Ibu membeli 8 ikat bayam. Satu ikat harganya 2 ribu. Berapa harga total?", a: 16, opt: [14, 16, 18, 20] }
    ],
    hard: [
        { type: 'text', q: "9 x 9 = ...", a: 81, opt: [72, 81, 90, 64] },
        { type: 'story', q: "Ayah membeli 12 kotak donat. Satu kotak isi 6. Berapa total donat?", a: 72, opt: [60, 66, 72, 78] },
        { type: 'text', q: "8 x 7 = ...", a: 56, opt: [54, 56, 64, 48] },
        { type: 'image', q: "Jam dinding ada 12 angka. Jika ada 3 jam dinding, berapa total angkanya?", img: "latihan soal.png", a: 36, opt: [24, 30, 36, 40] },
        { type: 'text', q: "11 x 5 = ...", a: 55, opt: [50, 55, 60, 65] },
        { type: 'story', q: "Di perpustakaan ada 9 rak. Tiap rak berisi 8 buku baru. Berapa buku baru tersebut?", a: 72, opt: [70, 72, 74, 80] },
        { type: 'text', q: "12 x 3 = ...", a: 36, opt: [30, 33, 36, 39] },
        { type: 'text', q: "6 x 9 = ...", a: 54, opt: [52, 54, 56, 58] },
        { type: 'story', q: "Satu lusin piring berisi 12 piring. Berapa piring dalam 4 lusin?", a: 48, opt: [36, 40, 48, 50] },
        { type: 'text', q: "7 x 9 = ...", a: 63, opt: [61, 63, 65, 70] },
        { type: 'image', q: "Berapa kaki 5 ekor gurita? (1 gurita = 8 kaki)", img: "new modul interaktif kartun.png", a: 40, opt: [35, 40, 45, 32] },
        { type: 'text', q: "8 x 8 = ...", a: 64, opt: [60, 62, 64, 68] },
        { type: 'story', q: "Siswa kelas 2 berbaris 10 saf. Tiap saf ada 5 orang. Berapa siswa seluruhnya?", a: 50, opt: [40, 45, 50, 55] },
        { type: 'text', q: "12 x 5 = ...", a: 60, opt: [55, 60, 65, 70] },
        { type: 'text', q: "11 x 7 = ...", a: 77, opt: [70, 77, 88, 66] }
    ]
};

/* ---------------------------
    Global State & Constants
----------------------------*/
let selectedGame = null;
let selectedLevel = null;
let player = null;
let playersDB = [];
let gameTimer = null;
let timeLeft = 0;
let currentCorrect = 0; 
let currentScore = 0;
let raceKeyListener = null;
let storyCounter = 0;
let carPositionSteps = 0;
let askedRapidQuestions = new Set();
let askedCarQuestions = new Set();
let askedRaceQuestions = new Set();

let currentQuizSession = [];
let quizIndex = 0;
const MAX_QUIZ_QUESTIONS = 15;

let currentMultiplicationTable = 1; 
let surveyAnswers = {}; 

let ropePosition = 50; 

document.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
});

/* ===================================================
   AUDIO & VISUAL EFFECTS SYSTEM (DIPERBARUI)
=================================================== */

// 1. Suara UI (Klik Tombol/Ikon) - Halus
const audioClick = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
audioClick.volume = 0.4; 

// 2. Suara BENAR - Nada Ting
const audioCorrect = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
audioCorrect.volume = 1.0; 

// 3. Suara SALAH - Nada "TET" (Short Error Tone)
const audioWrong = new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'); 
audioWrong.volume = 1.0; 

// --- FUNGSI RED FLASH (LAYAR MENYALA MERAH) ---
function triggerRedFlash() {
    // Membuat elemen overlay merah
    const flashOverlay = document.createElement('div');
    flashOverlay.style.position = 'fixed';
    flashOverlay.style.top = '0';
    flashOverlay.style.left = '0';
    flashOverlay.style.width = '100vw';
    flashOverlay.style.height = '100vh';
    flashOverlay.style.backgroundColor = 'rgba(255, 0, 0, 0.4)'; // Merah transparan
    flashOverlay.style.zIndex = '99999';
    flashOverlay.style.pointerEvents = 'none'; // Agar tidak mengganggu klik
    flashOverlay.style.transition = 'opacity 0.2s';
    
    document.body.appendChild(flashOverlay);

    // Hilangkan setelah 300ms
    setTimeout(() => {
        flashOverlay.style.opacity = '0';
        setTimeout(() => {
            if(document.body.contains(flashOverlay)) {
                document.body.removeChild(flashOverlay);
            }
        }, 200);
    }, 200);
}

// --- FUNGSI GLOBAL CLICK LISTENER ---
// Kode ini akan mendeteksi klik di MANA SAJA pada halaman
document.addEventListener('click', function(e) {
    // Cek apakah yang diklik adalah tombol, link, atau kartu menu
    if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.menu-card') || e.target.closest('.game-btn')) {
        const clickClone = audioClick.cloneNode();
        clickClone.volume = 0.3;
        clickClone.play().catch(() => {});
    }
});

// --- FUNGSI PLAY SOUND (GAME) & VISUAL TRIGGER ---
function playSound(type) {
    if (type === 'correct') {
        audioCorrect.currentTime = 0;
        audioCorrect.play().catch(e => console.error("Audio Play Error:", e));
    } else if (type === 'wrong') {
        // Mainkan Suara 'TET'
        audioWrong.currentTime = 0;
        audioWrong.play().catch(e => console.error("Audio Play Error:", e));
        
        // Picu Layar Merah
        triggerRedFlash();
    }
}

/* ---------------------------
    Utility
----------------------------*/
function getAssetPath(type, level) {
    return 'game matematika.png';
}

function getColorByFactor(factor) {
    if (factor <= 3) return '#81C784'; 
    if (factor <= 6) return '#FFB74D'; 
    return '#64B5F6'; 
}

function maxFactorByLevel(){
    if(selectedLevel === "easy") return 5;
    if(selectedLevel === "medium") return 8;
    return 12; // hard
}
function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function shuffle(arr){
    return arr.slice().sort(()=>Math.random()-0.5);
}
function updateScoreDisplay(){
    const s = document.getElementById("score");
    if(s) s.textContent = currentScore;
}

/* ---------------------------
    Page & Initialization
----------------------------*/
window.addEventListener("load", async () => {
    loadPlayersFromStorage();
    renderPlayerHistory();
    await ensureSupabaseAvailability();
    if (typeof updateQuizVoiceUI === 'function') updateQuizVoiceUI();
});

const AUTH_REQUEST_TIMEOUT = 7000;

async function safeDbRequest(promise) {
    return await Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('Koneksi Supabase timeout.')), AUTH_REQUEST_TIMEOUT))
    ]);
}

async function ensureSupabaseAvailability() {
    if (!window.db) {
        window.supabaseError = 'SUPABASE_ANON_KEY belum diisi di config.js';
        return;
    }
    try {
        const { error } = await safeDbRequest(window.db.from('skripsi_users').select('username').limit(1).maybeSingle());
        if (error) throw error;
        window.supabaseError = null;
        console.log('[MathWorld] Koneksi ke Supabase tabel skripsi_users BERHASIL!');
    } catch (e) {
        window.supabaseError = e.message;
        console.warn('[MathWorld] Supabase tidak tersedia:', e.message);
        window.db = null;
    }
}

function clearGameArea(){
    if(gameTimer) clearInterval(gameTimer);
    gameTimer = null;
    if (raceKeyListener) {
        window.removeEventListener('keydown', raceKeyListener);
        raceKeyListener = null;
    }
    // Clear elements
    ['questionBox', 'answerBox', 'storyBox', 'carArea', 'timerBox'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = "";
            el.classList.remove('tug-active-box');
        }
    });
    const img = document.getElementById("gameImage");
    if(img) { img.src = ""; img.style.display = 'none'; }
    
    currentCorrect = 0;
    storyCounter = 0;
    askedRapidQuestions.clear();
    askedCarQuestions.clear();
    askedRaceQuestions.clear();
}

function showPage(id){
    clearGameArea(); 
    if (typeof stopQuizSpeech === 'function') stopQuizSpeech();
    
    // Hentikan pemutaran video dan sinkronkan audio saat berpindah halaman
    if (id !== 'video' && typeof window.handleLeavingVideoPage === 'function') {
        window.handleLeavingVideoPage();
    } else {
        document.querySelectorAll("video").forEach(v => {
            if (!v.paused) v.pause();
        });
    }

    document.querySelectorAll(".page").forEach(p => p.style.display = 'none');
    
    if (id === 'levelMenu' && selectedGame) {
        const map = {
            game1: "Tebak Perkalian (30s)", game2: "Cerita Bergambar",
            game3: "Mobil Maju", game4: "Tarik Tambang (2 Player)", quizOnly: "Latihan Soal"
        };
        document.getElementById("levelTitle").innerText = "Pilih Level — " + (map[selectedGame] || selectedGame);
    }
    
    const el = document.getElementById(id);
    if(el) el.style.display = 'block';
    
    const scoreBox = document.getElementById('scoreBox');
    if (id === 'gameContainer' && selectedGame !== 'game4') {
         scoreBox.style.display = 'block';
    } else {
         scoreBox.style.display = 'none';
    }

    if (id === 'media') {
        initializeMultiplicationPocket();
    } else if (id === 'module') {
        showModuleMenu();
    } else if (id === 'about') {
        renderPlayerHistory();
    } else if (id === 'teach') {
        initPdfViewer();
    }
    
    // Highlight active nav item and scroll into view smoothly
    document.querySelectorAll('#mainHeader nav a').forEach(a => {
        const fnStr = a.getAttribute('onclick') || '';
        if (fnStr.includes("'" + id + "'") || fnStr.includes('"' + id + '"')) {
            a.classList.add('active');
            a.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            a.classList.remove('active');
        }
    });

    window.scrollTo({top:0,behavior:"smooth"});
}
window.showPage = showPage;

/* ---------------------------
    Player management
----------------------------*/
function findOrCreatePlayer(name){
    let p = playersDB.find(x => x.name.toLowerCase() === name.toLowerCase());
    if(!p){
        p = { name: name, createdAt: new Date().toISOString(), scores: [] };
        playersDB.push(p);
    } else {
        p.lastSeen = new Date().toISOString();
    }
    return p;
}
function loadPlayersFromStorage(){
    try{
        const raw = localStorage.getItem("mathplay_players_v1");
        playersDB = raw ? JSON.parse(raw) : [];
    } catch(e){ playersDB = []; }
}
function savePlayersToStorage(){
    localStorage.setItem("mathplay_players_v1", JSON.stringify(playersDB));
}
function renderPlayerHistory(){
    const ul = document.getElementById("playerHistory");
    if(!ul) return;
    ul.innerHTML = playersDB.slice().sort((a,b) => (new Date(b.lastSeen || b.createdAt)) - (new Date(a.lastSeen || a.createdAt))).map(p => {
        const lastScore = p.scores.length ? `(Skor Akhir: ${p.scores[p.scores.length - 1].score})` : '';
        return `<li>${p.name} - ${lastScore}</li>`;
    }).join("");
}
function saveScoreToPlayer(playerObj, gameLabel, levelLabel, scoreValue){
    if(!playerObj) return;
    const dbPlayer = playersDB.find(p => p.name === playerObj.name);
    if (dbPlayer) {
        dbPlayer.scores.push({ game: gameLabel, level: levelLabel, score: scoreValue, at: new Date().toISOString() });
        savePlayersToStorage();
        renderPlayerHistory();
    }

    // Simpan ke Supabase jika terhubung & user login
    const db = window.db;
    const u = JSON.parse(sessionStorage.getItem('skripsi_user') || '{}');
    if (db && u && u.username) {
        db.from('skripsi_scores').insert([{
            username: u.username,
            game_type: gameLabel,
            level: levelLabel,
            score: scoreValue
        }]).then(({ error }) => {
            if (error) console.warn('[Supabase] Gagal simpan ke skripsi_scores:', error.message);
        });
    }
}
function promptPlayerName(callback){
    let name = prompt("Masukkan nama pemain (Contoh: 'Andi'):");
    if(!name) return;
    player = findOrCreatePlayer(name.trim());
    savePlayersToStorage();
    if(typeof callback === "function") callback(player);
}
function deletePlayerHistory(){
    if(confirm("Hapus semua data pemain?")){
        playersDB = [];
        localStorage.removeItem("mathplay_players_v1");
        renderPlayerHistory();
    }
}
window.deletePlayerHistory = deletePlayerHistory;

/* ---------------------------
    Game Launchers
----------------------------*/
function openLevelMenu(gameId){
    selectedGame = gameId;
    showPage("levelMenu");
}
window.openLevelMenu = openLevelMenu;

window.startLevelInJS = function(level){
    // Langsung main tanpa prompt nama — gunakan nama dari akun yang login
    const u = JSON.parse(sessionStorage.getItem('skripsi_user') || '{}');
    const playerName = u.fullname || u.username || 'Pemain';
    player = findOrCreatePlayer(playerName);
    savePlayersToStorage();

    selectedLevel = level;
    currentScore = 0;
    updateScoreDisplay();

    if (selectedGame === 'quizOnly') {
        startQuizMixed(level);
    } else {
        showPage("gameContainer");
        const titleMap = { game1: "🎮 Tebak Perkalian (30s)", game2: "📖 Cerita Bergambar", game3: "🚗 Mobil Maju", game4: "🏁 Tarik Tambang" };
        document.getElementById("gameTitle").textContent = titleMap[selectedGame] || "Game";
        const scoreBox = document.getElementById('scoreBox');
        if (scoreBox) {
            scoreBox.style.display = (selectedGame === 'game4') ? 'none' : 'block';
        }
        startSelectedGame();
    }
};
window.startLevel = window.startLevelInJS;

function startSelectedGame(){
    clearGameArea();
    if(selectedGame === "game1") startGameRapid();
    else if(selectedGame === "game2") startGameStory();
    else if(selectedGame === "game3") startGameCar();
    else if(selectedGame === "game4") startGameRace(); 
}


/* ---------------------------
    GAME 1 — Rapid 30s
----------------------------*/
function startGameRapid(){
    timeLeft = 30;
    currentScore = 0;
    askedRapidQuestions.clear(); 
    updateScoreDisplay();
    document.getElementById("timerBox").textContent = `Waktu: ${timeLeft}s`;

    nextRapidQuestion();

    gameTimer = setInterval(()=>{
        timeLeft--;
        document.getElementById("timerBox").textContent = `Waktu: ${timeLeft}s`;
        if(timeLeft <= 0){
            clearInterval(gameTimer);
            setTimeout(() => {
                alert(`Waktu habis! Skor: ${currentScore}`);
                saveScoreToPlayer(player, "Tebak Cepat", selectedLevel, currentScore);
                showPage("gameMenu"); 
            }, 300);
        }
    }, 1000);
}
function nextRapidQuestion(){
    if(timeLeft <= 0) return;
    const maxF = maxFactorByLevel();
    let a, b, correct;
    do {
        a = randInt(1, maxF); b = randInt(1, maxF);
    } while (askedRapidQuestions.has(`${a}x${b}`));
    askedRapidQuestions.add(`${a}x${b}`);
    correct = a * b; currentCorrect = correct;

    document.getElementById("questionBox").textContent = `${a} × ${b} = ?`;
    generateOptions(correct, document.getElementById("answerBox"), (isCorrect) => {
        if(isCorrect) currentScore++;
        updateScoreDisplay();
        if(timeLeft > 0) setTimeout(nextRapidQuestion, 300);
    });
}

/* ---------------------------
    GAME 2 — Story (Simple)
----------------------------*/
function startGameStory(){
    currentScore = 0; storyCounter = 0;
    showStoryQuestion();
}
function showStoryQuestion(){
    if (storyCounter >= 5) {
        alert(`Sesi Selesai! Skor: ${currentScore}`);
        saveScoreToPlayer(player, "Cerita Bergambar", selectedLevel, currentScore);
        showPage("gameMenu"); return;
    }
    storyCounter++;
    const maxF = maxFactorByLevel();
    const a = randInt(1, maxF), b = randInt(1, maxF);
    const correct = a * b; currentCorrect = correct;
    
    document.getElementById("storyBox").innerHTML = `Soal ${storyCounter}/5<br>Ibu membeli ${a} kantong, tiap kantong isi ${b} apel. Total apel?`;
    document.getElementById("questionBox").textContent = `${a} × ${b} = ?`;
    
    generateOptions(correct, document.getElementById("answerBox"), (isCorrect) => {
        if(isCorrect) currentScore++;
        updateScoreDisplay();
        setTimeout(showStoryQuestion, 500);
    });
}

/* ---------------------------
    GAME 3 — MOBIL MAJU (Fixed Visuals) 🚗
----------------------------*/
function startGameCar(){
    currentScore = 0; carPositionSteps = 0; askedCarQuestions.clear();
    
    // Setup Visual Jalan & Mobil (mobil dibalik horizontal scaleX(-1) agar moncong menghadap maju ke kanan)
    const carArea = document.getElementById("carArea");
    carArea.innerHTML = `
        <div style="width:100%; height:120px; background:#4a4a4a; position:relative; border-radius:14px; overflow:hidden; margin-bottom:20px; border: 4px solid #333; box-shadow: inset 0 4px 10px rgba(0,0,0,0.3);">
            <!-- Garis pembatas jalan atas dan bawah -->
            <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:repeating-linear-gradient(90deg, #d32f2f, #d32f2f 20px, #fff 20px, #fff 40px);"></div>
            <div style="position:absolute; bottom:0; left:0; width:100%; height:8px; background:repeating-linear-gradient(90deg, #d32f2f, #d32f2f 20px, #fff 20px, #fff 40px);"></div>

            <!-- Garis marka putih putus-putus tengah jalan -->
            <div style="position:absolute; top:50%; left:0; width:100%; height:4px; transform:translateY(-50%); background:repeating-linear-gradient(90deg, #fff, #fff 25px, transparent 25px, transparent 45px);"></div>
            
            <!-- Mobil Balap Pemain (transform: scaleX(-1) agar moncong mobil menghadap MAJU ke kanan) -->
            <div id="playerCar" style="position:absolute; left:2%; top:26px; font-size:52px; transform: scaleX(-1); display:inline-block; transition: left 0.65s cubic-bezier(0.25, 1, 0.5, 1), transform 0.25s ease; z-index:10; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4)); user-select:none;">🏎️</div>
            
            <!-- Garis Finish Motif Papan Catur -->
            <div style="position:absolute; right:16px; top:8px; bottom:8px; width:22px; background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 11px 11px; border-left:2px solid #222; border-right:2px solid #222; z-index:5;"></div>
            <div style="position:absolute; right:12px; top:38px; font-size:32px; z-index:6; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">🏁</div>
        </div>
        <p style="text-align:center; font-style:italic; font-weight:bold; color:var(--hijau-tua); margin-bottom:12px;">🏎️ Jawab benar agar mobil melaju kencang ke depan!</p>
    `;

    nextCarQuestion();
}

function nextCarQuestion(){
    const TOTAL_STEPS = 5; 
    if(carPositionSteps >= TOTAL_STEPS) {
        const carEl = document.getElementById("playerCar");
        if(carEl) {
            carEl.style.left = "82%";
            carEl.style.transform = "scaleX(-1) scale(1.2) rotate(-5deg)";
        }
        
        setTimeout(() => {
            playSound('correct');
            alert("🏁 FINISH! Hebat, mobilmu melaju kencang sampai garis finish! 🏆\nSkor kamu: " + currentScore); 
            saveScoreToPlayer(player, "Mobil Maju", selectedLevel, currentScore);
            showPage("gameMenu");
        }, 800);
        return;
    }

    const carEl = document.getElementById("playerCar");
    const currentPos = Math.min(82, 2 + (carPositionSteps * (80 / TOTAL_STEPS)));
    if(carEl) {
        carEl.style.left = `${currentPos}%`;
        carEl.style.transform = "scaleX(-1) scale(1)";
    }

    const maxF = maxFactorByLevel();
    const a = randInt(1, maxF), b = randInt(1, maxF);
    currentCorrect = a * b;
    
    document.getElementById("questionBox").textContent = `${a} × ${b} = ?`;
    
    generateOptions(currentCorrect, document.getElementById("answerBox"), (isCorrect) => {
        if(isCorrect) { 
            currentScore += 10; 
            carPositionSteps++; 
            // Langsung majukan mobil seketika saat user memilih jawaban yang benar!
            if(carEl) {
                const nextPos = Math.min(82, 2 + (carPositionSteps * (80 / TOTAL_STEPS)));
                carEl.style.left = `${nextPos}%`;
                // Efek animasi akselerasi mobil melesat maju
                carEl.style.transform = "scaleX(-1) scale(1.18) rotate(-4deg)";
                setTimeout(() => {
                    if(carEl) carEl.style.transform = "scaleX(-1) scale(1)";
                }, 450);
            }
        } else {
            // Jika salah, mobil sedikit bergetar di tempat (tidak mundur)
            if(carEl) {
                carEl.style.transform = "scaleX(-1) translateX(-6px)";
                setTimeout(() => {
                    if(carEl) carEl.style.transform = "scaleX(-1) translateX(6px)";
                    setTimeout(() => {
                        if(carEl) carEl.style.transform = "scaleX(-1) scale(1)";
                    }, 120);
                }, 120);
            }
        }
        updateScoreDisplay();
        // Beri jeda 650ms agar animasi mobil melaju maju terlihat jelas sebelum soal berganti
        setTimeout(nextCarQuestion, 650);
    });
}

/* ---------------------------
    GAME 4 — TARIK TAMBANG (2 Player Logic) 🪢
----------------------------*/
function startGameRace(){
    alert("Mode 2 Pemain: Player 1 (Kiri) vs Player 2 (Kanan). Jawab cepat untuk menarik tali!");
    ropePosition = 50; 
    
    // Pastikan scoreBox tidak muncul di mode 2 Player
    const scoreBox = document.getElementById("scoreBox");
    if (scoreBox) scoreBox.style.display = "none";

    const container = document.getElementById("questionBox"); 
    if (container) container.classList.add("tug-active-box");

    container.innerHTML = `
        <div id="tugOfWarContainer">
            <!-- Lintasan Tarik Tambang -->
            <div class="tug-rope-track">
                <div class="tug-track-left">🚩 MERAH</div>
                <div class="tug-track-right">BIRU 🚩</div>
                <div id="ropeMarker" class="tug-rope-marker" style="left:50%;">
                    <div class="tug-rope-line"></div>
                </div>
            </div>

            <!-- Panel 2 Pemain -->
            <div class="tug-panels-wrap">
                <!-- Pemain 1 (Merah) -->
                <div id="p1Panel" class="tug-panel tug-panel-p1">
                    <div class="tug-player-badge p1-badge">🔴 Player 1 (Merah)</div>
                    <div id="p1Question" class="tug-question-text p1-question-color">...</div>
                    <div id="p1Options" class="tug-options-grid"></div>
                </div>

                <!-- Pemain 2 (Biru) -->
                <div id="p2Panel" class="tug-panel tug-panel-p2">
                    <div class="tug-player-badge p2-badge">🔵 Player 2 (Biru)</div>
                    <div id="p2Question" class="tug-question-text p2-question-color">...</div>
                    <div id="p2Options" class="tug-options-grid"></div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById("answerBox").innerHTML = "";

    nextRaceQuestion('p1');
    nextRaceQuestion('p2');
}

function updateRopeVisual() {
    const marker = document.getElementById("ropeMarker");
    if(marker) marker.style.left = `${ropePosition}%`;

    if(ropePosition <= 10) {
        setTimeout(() => { alert("🏆 PLAYER 1 (MERAH) MENANG!"); showPage("gameMenu"); }, 300);
    } else if(ropePosition >= 90) {
        setTimeout(() => { alert("🏆 PLAYER 2 (BIRU) MENANG!"); showPage("gameMenu"); }, 300);
    }
}

function nextRaceQuestion(playerSide) {
    if(ropePosition <= 10 || ropePosition >= 90) return; 

    const maxF = maxFactorByLevel();
    const a = randInt(1, maxF), b = randInt(1, maxF);
    const correct = a * b;

    const qEl = document.getElementById(playerSide === 'p1' ? "p1Question" : "p2Question");
    const optEl = document.getElementById(playerSide === 'p1' ? "p1Options" : "p2Options");

    if(qEl) qEl.textContent = `${a} × ${b}`;

    optEl.innerHTML = "";
    let opts = [correct];
    while(opts.length < 4){
        let r = correct + randInt(-5, 5);
        if(r >= 0 && !opts.includes(r)) opts.push(r);
    }
    opts = shuffle(opts);

    opts.forEach(o => {
        const btn = document.createElement("button");
        btn.textContent = o;
        btn.className = `tug-btn ${playerSide === 'p1' ? 'tug-btn-p1' : 'tug-btn-p2'}`;
        btn.onclick = () => {
            if(o === correct) {
                playSound('correct');
                if(playerSide === 'p1') ropePosition -= 10; 
                else ropePosition += 10; 
                updateRopeVisual();
                nextRaceQuestion(playerSide); 
            } else {
                playSound('wrong');
                btn.style.opacity = "0.35";
                btn.style.cursor = "not-allowed";
                btn.disabled = true;
                if(playerSide === 'p1') ropePosition += 2; 
                else ropePosition -= 2; 
                updateRopeVisual();
            }
        };
        optEl.appendChild(btn);
    });
}


/* -----------------------------------------------------------
    LATIHAN SOAL (QUIZ) — CAMPURAN
------------------------------------------------------------*/
function startQuizMixed(level) {
    showPage('quiz');
    
    let rawQuestions = questionBank[level] || questionBank['easy'];
    
    rawQuestions.sort(() => Math.random() - 0.5);
    currentQuizSession = rawQuestions.slice(0, MAX_QUIZ_QUESTIONS);
    
    quizIndex = 0;
    currentScore = 0;
    renderMixedQuestion();
}

function renderMixedQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const scoreDisplay = document.getElementById('quizScore');

    if (quizIndex >= currentQuizSession.length) {
        finishQuiz();
        return;
    }

    const qData = currentQuizSession[quizIndex];
    scoreDisplay.innerHTML = `Soal: ${quizIndex + 1}/${MAX_QUIZ_QUESTIONS} | Skor: ${currentScore}`;

    let htmlContent = `<div style="animation: fadeIn 0.5s;">`;

    if (qData.type === 'image' && qData.img) {
        htmlContent += `<img src="${qData.img}" class="soal-img" alt="Soal Gambar">`;
        htmlContent += `<h3 class="soal-text">${qData.q}</h3>`;
    } 
    else if (qData.type === 'story') {
        htmlContent += `<div class="soal-story">${qData.q}</div>`;
    } 
    else {
        htmlContent += `<h3 class="soal-text" style="font-size:3rem;">${qData.q}</h3>`;
    }

    let options = [...qData.opt]; 
    options.sort(() => Math.random() - 0.5); 

    htmlContent += `<div id="quizOptions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top:20px;">`;
    options.forEach(opt => {
        htmlContent += `<button class="jawabanBtn" onclick="checkMixedAnswer(${opt}, ${qData.a}, this)">${opt}</button>`;
    });
    htmlContent += `</div></div>`;

    quizContainer.innerHTML = htmlContent;
}

function checkMixedAnswer(userAnswer, correctAnswer, btnElement) {
    const allBtns = document.querySelectorAll('#quizOptions button');
    allBtns.forEach(b => b.disabled = true);

    if (userAnswer === correctAnswer) {
        currentScore += 10;
        playSound('correct');
        btnElement.classList.add('feedback-correct');
    } else {
        playSound('wrong');
        btnElement.classList.add('feedback-wrong');
        allBtns.forEach(b => {
            if (parseInt(b.textContent) === correctAnswer) b.classList.add('feedback-correct');
        });
    }

    setTimeout(() => {
        quizIndex++;
        renderMixedQuestion();
    }, 1000);
}

function finishQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    let pesan = currentScore >= 100 ? "Luar Biasa!" : "Terus Berlatih!";
    
    quizContainer.innerHTML = `
        <div style="text-align:center; padding:30px;">
            <h2>🎉 Selesai!</h2>
            <p style="font-size:1.5rem;">Skor Akhir: <strong>${currentScore}</strong></p>
            <p>${pesan}</p>
            <button class="btn-back" onclick="showPage('quizMenu')">Main Lagi</button>
        </div>
    `;
    
    if(player) saveScoreToPlayer(player, "Latihan Soal Campur", selectedLevel, currentScore);
}
window.finishQuiz = finishQuiz;


/* ---------------------------
   Helper: Generate Options
----------------------------*/
function generateOptions(correct, container, callback){
    container.innerHTML = "";
    let opts = [correct];
    while(opts.length < 4){
        let r = correct + randInt(-5, 5);
        if(r >= 0 && !opts.includes(r)) opts.push(r);
    }
    opts = shuffle(opts);
    
    opts.forEach(o => {
        const btn = document.createElement("button");
        btn.textContent = o;
        btn.onclick = (e) => {
            const isCorrect = (o === correct);
            if(isCorrect) { 
                playSound('correct'); 
                e.target.classList.add('feedback-correct'); 
            } else { 
                playSound('wrong'); 
                e.target.classList.add('feedback-wrong'); 
            }
            
            const all = container.querySelectorAll("button");
            all.forEach(b => b.disabled = true);
            
            callback(isCorrect);
        };
        container.appendChild(btn);
    });
}

/* ==========================================================================
   BUKU PETUALANGAN DIGITAL INTERAKTIF (MODUL INTERAKTIF MATHWORLD)
   Engine 4 Misi Petualangan Perkalian Ramah Anak Kelas 2 SD
   ========================================================================== */

// Global State Buku Petualangan
const moduleBookState = {
    currentPage: 1,
    totalPages: 4,
    // Misi 1: Menata Makanan
    m1: {
        animal: null,
        food: null,
        basketsCount: 3,
        itemsPerBasket: 4,
        totalItems: 12,
        basketsData: [],       // array of arrays of item objects
        unassignedFoods: [],   // items still on the plate
        isCompleted: false,
        initialized: false
    },
    // Misi 2: Taman Bunga Array
    m2: {
        rows: 2,
        cols: 4,
        flower: '🌸',
        initialized: false
    },
    // Misi 3: Katak Ceria
    m3: {
        stepSize: 3,
        currentPos: 0,
        jumpCount: 0,
        isAutoJumping: false,
        landedPositions: [0],
        initialized: false
    },
    // Misi 4: Kuis Menjodohkan
    m4: {
        pairs: [],
        leftItems: [],
        rightItems: [],
        selectedLeftId: null,
        selectedRightId: null,
        matchedPairs: [], // array of { leftId, rightId, color }
        colors: ['#16a085', '#e67e22', '#2980b9', '#9b59b6', '#e74c3c'],
        initialized: false
    }
};

// Web Audio API Sound Synthesizer (Zero-latency offline sound effects)
let _webAudioCtx = null;
function getAudioContext() {
    if (!_webAudioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) _webAudioCtx = new AudioCtx();
    }
    if (_webAudioCtx && _webAudioCtx.state === 'suspended') {
        _webAudioCtx.resume();
    }
    return _webAudioCtx;
}

// Suara Arpeggio Kemenangan (Fanfare)
function playFanfareSound() {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.09);
            gain.gain.setValueAtTime(0.2, now + i * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.09);
            osc.stop(now + i * 0.09 + 0.4);
        });
    } catch (e) {
        console.warn("AudioContext fanfare error:", e);
    }
}

// Suara Lompatan Katak (Boing/Hop)
function playBoingSound() {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(620, now + 0.16);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.24);
    } catch (e) {
        console.warn("AudioContext boing error:", e);
    }
}

// Suara Pop Lembut Saat Memindahkan Makanan
function playPopSound() {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
    } catch (e) {}
}

/* --------------------------------------------------------------------------
   NAVIGASI HALAMAN BUKU PETUALANGAN
   -------------------------------------------------------------------------- */

function showModuleMenu() {
    // Dipanggil saat menu Modul Interaktif dibuka
    setModulePage(moduleBookState.currentPage || 1);
}
window.showModuleMenu = showModuleMenu;

function setModulePage(pageNumber) {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > moduleBookState.totalPages) pageNumber = moduleBookState.totalPages;
    moduleBookState.currentPage = pageNumber;

    // Sembunyikan semua halaman buku
    for (let i = 1; i <= moduleBookState.totalPages; i++) {
        const pageEl = document.getElementById(`modulePage${i}`);
        if (pageEl) {
            pageEl.style.display = (i === pageNumber) ? 'block' : 'none';
        }
        const tabBtn = document.getElementById(`tabBtn${i}`);
        if (tabBtn) {
            if (i === pageNumber) tabBtn.classList.add('active');
            else tabBtn.classList.remove('active');
        }
    }

    // Perbarui Indikator Halaman di Atas
    const titles = [
        "Misi 1: Menata Makanan",
        "Misi 2: Taman Bunga",
        "Misi 3: Katak Ceria",
        "Misi 4: Kuis Menjodohkan"
    ];
    const indicator = document.getElementById('bookPageIndicator');
    if (indicator) {
        indicator.innerText = `Halaman ${pageNumber} dari 4 — ${titles[pageNumber - 1] || ''}`;
    }

    // Perbarui Dots di Bawah
    const dotsContainer = document.getElementById('bookPageDots');
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.page-dot');
        dots.forEach((dot, idx) => {
            if (idx + 1 === pageNumber) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    // Perbarui status tombol Prev / Next
    const prevBtn = document.getElementById('btnBookPrev');
    const nextBtn = document.getElementById('btnBookNext');
    if (prevBtn) prevBtn.disabled = (pageNumber === 1);
    if (nextBtn) nextBtn.disabled = (pageNumber === moduleBookState.totalPages);

    // Inisialisasi konten halaman yang dibuka
    if (pageNumber === 1 && !moduleBookState.m1.initialized) {
        initMission1(false);
    } else if (pageNumber === 2 && !moduleBookState.m2.initialized) {
        initMission2();
    } else if (pageNumber === 3 && !moduleBookState.m3.initialized) {
        initMission3();
    } else if (pageNumber === 4 && !moduleBookState.m4.initialized) {
        initMission4(false);
    }

    // Jika masuk ke halaman 4, redraw garis SVG jika ada
    if (pageNumber === 4) {
        setTimeout(drawM4Lines, 80);
    }
}
window.setModulePage = setModulePage;

function navigateModulePage(direction) {
    setModulePage(moduleBookState.currentPage + direction);
}
window.navigateModulePage = navigateModulePage;


/* ==========================================================================
   HALAMAN 1: MISI MENATA MAKANAN (RANDOMIZED CONCEPT TEST & DRAG-DROP)
   ========================================================================== */

const M1_ANIMALS_DATA = [
    { name: "Kelinci Cerdik", avatar: "🐰", foodName: "wortel", foodIcon: "🥕" },
    { name: "Monyet Riang", avatar: "🐒", foodName: "pisang manis", foodIcon: "🍌" },
    { name: "Kucing Imut", avatar: "🐱", foodName: "ikan segar", foodIcon: "🐟" },
    { name: "Beruang Madu", avatar: "🐻", foodName: "stroberi", foodIcon: "🍓" },
    { name: "Panda Gemas", avatar: "🐼", foodName: "apel merah", foodIcon: "🍎" },
    { name: "Tupai Lincah", avatar: "🐿️", foodName: "kenari", foodIcon: "🌰" }
];

// Kombinasi angka perkalian ramah kelas 2 SD (Total <= 20)
const M1_FACTORS_POOL = [
    { x: 2, y: 3 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 2, y: 4 },
    { x: 4, y: 2 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 2, y: 5 },
    { x: 5, y: 2 },
    { x: 3, y: 5 }
];

function initMission1(isRandomNew) {
    moduleBookState.m1.initialized = true;
    moduleBookState.m1.isCompleted = false;

    // Sembunyikan feedback perayaan saat reset
    const feedbackCard = document.getElementById('m1FeedbackCard');
    if (feedbackCard) feedbackCard.style.display = 'none';

    // 1. Pilih Karakter Hewan & Makanan
    const animalObj = M1_ANIMALS_DATA[Math.floor(Math.random() * M1_ANIMALS_DATA.length)];
    moduleBookState.m1.animal = animalObj;
    moduleBookState.m1.food = animalObj.foodIcon;

    // 2. Pilih Kombinasi X (Jumlah Keranjang) & Y (Isi per Keranjang)
    let combo = M1_FACTORS_POOL[Math.floor(Math.random() * M1_FACTORS_POOL.length)];
    // Jika acak baru dan sama persis dengan sebelumnya, putar sekali lagi
    if (isRandomNew && combo.x === moduleBookState.m1.basketsCount && combo.y === moduleBookState.m1.itemsPerBasket) {
        combo = M1_FACTORS_POOL[(Math.floor(Math.random() * (M1_FACTORS_POOL.length - 1)) + 1) % M1_FACTORS_POOL.length];
    }

    const X = combo.x;
    const Y = combo.y;
    const total = X * Y;

    moduleBookState.m1.basketsCount = X;
    moduleBookState.m1.itemsPerBasket = Y;
    moduleBookState.m1.totalItems = total;

    // 3. Siapkan Array Data
    moduleBookState.m1.basketsData = Array.from({ length: X }, () => []);
    moduleBookState.m1.unassignedFoods = Array.from({ length: total }, (_, i) => ({
        id: `food-item-${i + 1}`,
        icon: animalObj.foodIcon
    }));

    // 4. Perbarui Tampilan Dialog Hewan
    const avatarEl = document.getElementById('m1AnimalAvatar');
    const nameEl = document.getElementById('m1AnimalName');
    const instructionEl = document.getElementById('m1MissionInstruction');

    if (avatarEl) avatarEl.innerText = animalObj.avatar;
    if (nameEl) nameEl.innerText = animalObj.name;
    if (instructionEl) {
        instructionEl.innerHTML = `Bantu aku mengisi <strong>${X} keranjang</strong>, di mana setiap keranjang berisi <strong>${Y} ${animalObj.foodName}</strong>!`;
    }

    // 5. Render Piring Makanan & Keranjang
    renderM1FoodPlate();
    renderM1Baskets();
}
window.initMission1 = initMission1;

function renderM1FoodPlate() {
    const plate = document.getElementById('m1FoodPlate');
    const badge = document.getElementById('m1FoodRemainingBadge');
    if (!plate) return;

    plate.innerHTML = '';
    const unassigned = moduleBookState.m1.unassignedFoods;

    if (badge) {
        badge.innerText = `${unassigned.length} / ${moduleBookState.m1.totalItems} Tersisa`;
    }

    if (unassigned.length === 0) {
        plate.innerHTML = `<span style="color:#7f8c8d;font-style:italic;font-size:0.9rem;">Piring kosong — semua makanan sudah masuk keranjang! 🧺</span>`;
        return;
    }

    unassigned.forEach((item) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'm1-food-item';
        itemEl.id = item.id;
        itemEl.draggable = true;
        itemEl.innerText = item.icon;
        itemEl.title = "Tarik (drag) atau klik untuk memasukkan ke keranjang";

        // Event Drag (Laptop / Desktop)
        itemEl.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', JSON.stringify({ itemId: item.id, fromBasketIdx: -1 }));
            itemEl.classList.add('dragging');
        });
        itemEl.addEventListener('dragend', () => {
            itemEl.classList.remove('dragging');
        });

        // Event Klik / Sentuh (Mobile & Tablet friendly)
        itemEl.addEventListener('click', () => {
            handleFoodClickMove(item.id, -1);
        });

        plate.appendChild(itemEl);
    });
}

function renderM1Baskets() {
    const container = document.getElementById('m1BasketsContainer');
    if (!container) return;

    container.innerHTML = '';
    const X = moduleBookState.m1.basketsCount;
    const Y = moduleBookState.m1.itemsPerBasket;

    for (let i = 0; i < X; i++) {
        const basketItems = moduleBookState.m1.basketsData[i];
        const isFull = basketItems.length >= Y;
        const isExact = basketItems.length === Y;

        const basketCard = document.createElement('div');
        basketCard.className = `m1-basket-card ${isFull ? 'full-basket' : ''}`;
        basketCard.id = `m1BasketCard-${i}`;

        basketCard.innerHTML = `
            <div class="basket-header">
                <span class="basket-title">Keranjang ${i + 1}</span>
                <span class="basket-count-badge ${isExact ? 'is-correct' : ''}">
                    ${basketItems.length} / ${Y}
                </span>
            </div>
            <div class="basket-icon-art">🧺</div>
            <div class="m1-basket-dropzone" id="m1Dropzone-${i}" data-basket-idx="${i}">
            </div>
        `;

        const dropzone = basketCard.querySelector('.m1-basket-dropzone');

        // Render isi keranjang
        basketItems.forEach((item) => {
            const foodInBasket = document.createElement('div');
            foodInBasket.className = 'm1-food-item';
            foodInBasket.draggable = true;
            foodInBasket.innerText = item.icon;
            foodInBasket.title = "Klik untuk mengembalikan makanan ke piring";

            // Drag dari keranjang
            foodInBasket.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify({ itemId: item.id, fromBasketIdx: i }));
                foodInBasket.classList.add('dragging');
            });
            foodInBasket.addEventListener('dragend', () => {
                foodInBasket.classList.remove('dragging');
            });

            // Klik untuk mengembalikan ke piring
            foodInBasket.addEventListener('click', (e) => {
                e.stopPropagation();
                handleReturnFoodToPlate(item.id, i);
            });

            dropzone.appendChild(foodInBasket);
        });

        // Event Drag Over & Drop pada Keranjang
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            basketCard.classList.add('drag-over');
        });

        dropzone.addEventListener('dragleave', () => {
            basketCard.classList.remove('drag-over');
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            basketCard.classList.remove('drag-over');
            try {
                const dataStr = e.dataTransfer.getData('text/plain');
                if (!dataStr) return;
                const data = JSON.parse(dataStr);
                handleDropFoodItem(data.itemId, data.fromBasketIdx, i);
            } catch (err) {
                console.error("Drop error:", err);
            }
        });

        // Klik pada area kosong keranjang: masukkan 1 makanan dari piring jika piring ada isinya
        dropzone.addEventListener('click', () => {
            if (moduleBookState.m1.unassignedFoods.length > 0 && basketItems.length < Y) {
                const firstFood = moduleBookState.m1.unassignedFoods[0];
                handleDropFoodItem(firstFood.id, -1, i);
            }
        });

        container.appendChild(basketCard);
    }
}

// Logika pemindahan makanan (Drag/Drop)
function handleDropFoodItem(itemId, fromBasketIdx, toBasketIdx) {
    const Y = moduleBookState.m1.itemsPerBasket;
    const targetBasket = moduleBookState.m1.basketsData[toBasketIdx];

    // Cek apakah keranjang tujuan sudah penuh
    if (targetBasket.length >= Y && fromBasketIdx !== toBasketIdx) {
        return; // Jangan masukkan lebih dari target
    }

    let movedItem = null;

    if (fromBasketIdx === -1) {
        // Ambil dari piring
        const idx = moduleBookState.m1.unassignedFoods.findIndex(f => f.id === itemId);
        if (idx !== -1) {
            movedItem = moduleBookState.m1.unassignedFoods.splice(idx, 1)[0];
        }
    } else {
        // Pindah dari keranjang lain
        const idx = moduleBookState.m1.basketsData[fromBasketIdx].findIndex(f => f.id === itemId);
        if (idx !== -1) {
            movedItem = moduleBookState.m1.basketsData[fromBasketIdx].splice(idx, 1)[0];
        }
    }

    if (movedItem) {
        targetBasket.push(movedItem);
        playPopSound();
        renderM1FoodPlate();
        renderM1Baskets();
        checkM1Completion();
    }
}

// Logika pemindahan saat diklik di piring (Cari keranjang yang belum penuh)
function handleFoodClickMove(itemId, fromBasketIdx) {
    const Y = moduleBookState.m1.itemsPerBasket;
    const baskets = moduleBookState.m1.basketsData;

    // Cari keranjang pertama yang belum mencapai Y
    let targetIdx = baskets.findIndex(b => b.length < Y);
    if (targetIdx === -1) {
        // Jika semua sudah pas Y, coba keranjang apa saja yang masih muat
        targetIdx = baskets.findIndex(b => b.length < Y + 1);
    }

    if (targetIdx !== -1) {
        handleDropFoodItem(itemId, fromBasketIdx, targetIdx);
    }
}

// Kembalikan makanan dari keranjang ke piring
function handleReturnFoodToPlate(itemId, basketIdx) {
    const basket = moduleBookState.m1.basketsData[basketIdx];
    const idx = basket.findIndex(f => f.id === itemId);
    if (idx !== -1) {
        const item = basket.splice(idx, 1)[0];
        moduleBookState.m1.unassignedFoods.push(item);
        playPopSound();
        renderM1FoodPlate();
        renderM1Baskets();
        checkM1Completion();
    }
}

// Periksa apakah seluruh keranjang sudah terisi tepat sesuai Y
function checkM1Completion() {
    const X = moduleBookState.m1.basketsCount;
    const Y = moduleBookState.m1.itemsPerBasket;
    const total = X * Y;
    const baskets = moduleBookState.m1.basketsData;

    const allCorrect = baskets.every(b => b.length === Y) && moduleBookState.m1.unassignedFoods.length === 0;

    const feedbackCard = document.getElementById('m1FeedbackCard');
    if (!feedbackCard) return;

    if (allCorrect && !moduleBookState.m1.isCompleted) {
        moduleBookState.m1.isCompleted = true;
        feedbackCard.style.display = 'block';

        // Susun string penjumlahan berulang: Y + Y + Y = Total
        const repeatedStr = Array(X).fill(Y).join(' + ') + ` = ${total}`;
        const multStr = `${X} × ${Y} = ${total}`;

        const repEl = document.getElementById('m1RepeatedAddition');
        const multEl = document.getElementById('m1MultiplicationFormula');
        if (repEl) repEl.innerText = repeatedStr;
        if (multEl) multEl.innerText = multStr;

        // Efek audio ceria dan perayaan
        if (typeof playSound === 'function') playSound('correct');
        playFanfareSound();

        // Scroll halus ke feedback
        feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (!allCorrect) {
        moduleBookState.m1.isCompleted = false;
        feedbackCard.style.display = 'none';
    }
}


/* ==========================================================================
   HALAMAN 2: SIMULASI SUSUNAN ARRAY (TAMAN BUNGA AJAIB)
   ========================================================================== */

function initMission2() {
    moduleBookState.m2.initialized = true;
    renderFlowerGarden();
}
window.initMission2 = initMission2;

function changeArrayDimension(type, delta) {
    if (type === 'rows') {
        let newRows = moduleBookState.m2.rows + delta;
        if (newRows < 1) newRows = 1;
        if (newRows > 6) newRows = 6;
        moduleBookState.m2.rows = newRows;
        const valEl = document.getElementById('m2RowsValue');
        if (valEl) valEl.innerText = newRows;
    } else if (type === 'cols') {
        let newCols = moduleBookState.m2.cols + delta;
        if (newCols < 1) newCols = 1;
        if (newCols > 6) newCols = 6;
        moduleBookState.m2.cols = newCols;
        const valEl = document.getElementById('m2ColsValue');
        if (valEl) valEl.innerText = newCols;
    }
    playPopSound();
    renderFlowerGarden();
}
window.changeArrayDimension = changeArrayDimension;

function setGardenFlower(flowerChar) {
    moduleBookState.m2.flower = flowerChar;
    const options = document.querySelectorAll('#m2FlowerOptions .btn-flower-chip');
    options.forEach(btn => {
        if (btn.innerText.trim() === flowerChar) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    playPopSound();
    renderFlowerGarden();
}
window.setGardenFlower = setGardenFlower;

function renderFlowerGarden() {
    const gardenBed = document.getElementById('m2GardenBed');
    if (!gardenBed) return;

    const rows = moduleBookState.m2.rows;
    const cols = moduleBookState.m2.cols;
    const total = rows * cols;
    const flower = moduleBookState.m2.flower;

    gardenBed.style.gridTemplateColumns = `repeat(${cols}, minmax(46px, 64px))`;
    gardenBed.innerHTML = '';

    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
            const cellIndex = (r - 1) * cols + c;
            const cell = document.createElement('div');
            cell.className = 'flower-pot-cell';
            cell.title = `Baris ${r}, Kolom ${c} (Bunga ke-${cellIndex})`;

            const bloom = document.createElement('span');
            bloom.className = 'flower-bloom';
            bloom.innerText = flower;
            // Delay bertahap agar bunga mekar seperti gelombang
            bloom.style.animationDelay = `${(cellIndex * 0.035)}s`;

            const badge = document.createElement('span');
            badge.className = 'flower-coord-badge';
            badge.innerText = cellIndex;

            cell.appendChild(bloom);
            cell.appendChild(badge);

            // Interaksi klik bunga: goyangan ceria
            cell.addEventListener('click', () => {
                bloom.style.animation = 'none';
                void bloom.offsetWidth; // trigger reflow
                bloom.style.animation = 'flowerBloom 0.4s ease-out forwards';
                playPopSound();
            });

            gardenBed.appendChild(cell);
        }
    }

    // Perbarui Rumus Teks Otomatis
    const formulaMain = document.getElementById('m2FormulaMain');
    const formulaSub = document.getElementById('m2FormulaSub');

    if (formulaMain) {
        formulaMain.innerText = `${rows} Baris × ${cols} Kolom = ${total} Bunga`;
    }

    if (formulaSub) {
        const repeatedAddition = Array(rows).fill(cols).join(' + ') + ` = ${total}`;
        formulaSub.innerHTML = `Penjumlahan Berulang: <strong>${repeatedAddition}</strong> (Ada ${rows} baris, setiap baris berisi ${cols} bunga)`;
    }
}

function waterGarden() {
    const gardenBed = document.getElementById('m2GardenBed');
    if (!gardenBed) return;

    playBoingSound();
    gardenBed.classList.add('watering');
    setTimeout(() => {
        gardenBed.classList.remove('watering');
    }, 1200);
}
window.waterGarden = waterGarden;


/* ==========================================================================
   HALAMAN 3: LOMPATAN GARIS BILANGAN (KATAK CERIA)
   ========================================================================== */

function initMission3() {
    moduleBookState.m3.initialized = true;
    renderNumberLineTicks();
    updateFrogDisplay(false);
}
window.initMission3 = initMission3;

function renderNumberLineTicks() {
    const ticksContainer = document.getElementById('m3NumberTicks');
    if (!ticksContainer) return;

    ticksContainer.innerHTML = '';
    for (let i = 0; i <= 20; i++) {
        const tickItem = document.createElement('div');
        tickItem.className = 'number-tick-item';
        tickItem.id = `numberTick-${i}`;
        tickItem.style.flex = '1';

        tickItem.innerHTML = `
            <div class="tick-mark"></div>
            <div class="tick-number">${i}</div>
        `;

        ticksContainer.appendChild(tickItem);
    }
}

function setFrogStep(step) {
    moduleBookState.m3.stepSize = step;

    // Perbarui chip aktif
    [2, 3, 4, 5].forEach(s => {
        const btn = document.getElementById(`frogStepBtn${s}`);
        if (btn) {
            if (s === step) btn.classList.add('active');
            else btn.classList.remove('active');
        }
    });

    // Perbarui teks tombol lompat
    const jumpBtn = document.getElementById('btnFrogJump');
    if (jumpBtn) {
        jumpBtn.innerText = `🐸 Lompat ${step} Langkah!`;
    }

    // Reset posisi katak ke 0 dengan langkah baru
    resetFrogMission();
}
window.setFrogStep = setFrogStep;

function frogJumpNext() {
    const step = moduleBookState.m3.stepSize;
    const nextPos = moduleBookState.m3.currentPos + step;

    if (nextPos > 20) {
        // Sudah mencapai batas garis bilangan 20
        if (typeof playSound === 'function') playSound('correct');
        playFanfareSound();
        return false;
    }

    const prevPos = moduleBookState.m3.currentPos;
    moduleBookState.m3.currentPos = nextPos;
    moduleBookState.m3.jumpCount += 1;
    moduleBookState.m3.landedPositions.push(nextPos);

    playBoingSound();
    animateFrogJump(prevPos, nextPos);
    drawFrogArc(prevPos, nextPos);
    updateFrogDisplay(true);

    // Jika mencapai akhir (atau kelipatan batas)
    if (nextPos + step > 20) {
        setTimeout(() => {
            if (typeof playSound === 'function') playSound('correct');
            playFanfareSound();
        }, 500);
    }

    return true;
}
window.frogJumpNext = frogJumpNext;

function frogJumpAuto() {
    if (moduleBookState.m3.isAutoJumping) return;
    moduleBookState.m3.isAutoJumping = true;

    // Jika sudah di ujung, mulai lagi dari 0
    if (moduleBookState.m3.currentPos + moduleBookState.m3.stepSize > 20) {
        resetFrogMission();
    }

    const autoInterval = setInterval(() => {
        const canJump = frogJumpNext();
        if (!canJump || moduleBookState.m3.currentPos + moduleBookState.m3.stepSize > 20) {
            clearInterval(autoInterval);
            moduleBookState.m3.isAutoJumping = false;
        }
    }, 600);
}
window.frogJumpAuto = frogJumpAuto;

function resetFrogMission() {
    moduleBookState.m3.currentPos = 0;
    moduleBookState.m3.jumpCount = 0;
    moduleBookState.m3.landedPositions = [0];
    moduleBookState.m3.isAutoJumping = false;

    // Bersihkan SVG Arcs
    const svgArcs = document.getElementById('m3SvgArcs');
    if (svgArcs) svgArcs.innerHTML = '';

    // Bersihkan highlight angka
    for (let i = 0; i <= 20; i++) {
        const tickItem = document.getElementById(`numberTick-${i}`);
        if (tickItem) {
            tickItem.classList.remove('landed', 'current-pos');
        }
    }

    playPopSound();
    updateFrogDisplay(false);
}
window.resetFrogMission = resetFrogMission;

function animateFrogJump(fromPos, toPos) {
    const frog = document.getElementById('m3FrogMascot');
    if (!frog) return;

    frog.classList.add('jumping');
    // Hitung posisi horizontal persentase (0% s/d 100%)
    const pct = (toPos / 20) * 100;
    frog.style.left = `${pct}%`;

    setTimeout(() => {
        frog.classList.remove('jumping');
    }, 450);
}

function drawFrogArc(fromPos, toPos) {
    const svgArcs = document.getElementById('m3SvgArcs');
    if (!svgArcs) return;

    // Koordinat SVG viewBox="0 0 1000 120"
    const x1 = (fromPos / 20) * 1000;
    const x2 = (toPos / 20) * 1000;
    const midX = (x1 + x2) / 2;
    const peakY = 20; // Puncak lompatan

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${x1} 90 Q ${midX} ${peakY} ${x2} 90`);
    path.setAttribute('stroke', '#16a085');
    path.setAttribute('stroke-width', '4');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-dasharray', '6,6');

    svgArcs.appendChild(path);
}

function updateFrogDisplay(highlightLanded) {
    const pos = moduleBookState.m3.currentPos;
    const count = moduleBookState.m3.jumpCount;
    const step = moduleBookState.m3.stepSize;

    // Perbarui posisi maskot
    const frog = document.getElementById('m3FrogMascot');
    const badge = document.getElementById('m3FrogCountBadge');
    if (frog) {
        const pct = (pos / 20) * 100;
        frog.style.left = `${pct}%`;
    }
    if (badge) {
        badge.innerText = `${count}x`;
    }

    // Sorot angka di garis bilangan
    moduleBookState.m3.landedPositions.forEach(p => {
        const tick = document.getElementById(`numberTick-${p}`);
        if (tick) tick.classList.add('landed');
    });

    const currentTick = document.getElementById(`numberTick-${pos}`);
    if (currentTick) currentTick.classList.add('current-pos');

    // Perbarui Teks Statistik & Rumus Matematika
    const countText = document.getElementById('m3JumpCountText');
    const stepText = document.getElementById('m3StepSizeText');
    const repeatedEl = document.getElementById('m3FormulaRepeated');
    const multEl = document.getElementById('m3FormulaMultiplication');

    if (countText) countText.innerText = count;
    if (stepText) stepText.innerText = step;

    if (repeatedEl && multEl) {
        if (count === 0) {
            repeatedEl.innerText = '0 = 0';
            multEl.innerText = `Bentuk Perkalian: 0 × ${step} = 0`;
        } else {
            const repStr = Array(count).fill(step).join(' + ') + ` = ${pos}`;
            repeatedEl.innerHTML = `Penjumlahan Berulang: <strong>${repStr}</strong>`;
            multEl.innerHTML = `Bentuk Perkalian: <strong>${count} × ${step} = ${pos}</strong>`;
        }
    }
}


/* ==========================================================================
   HALAMAN 4: MINI KUIS MENJODOHKAN (DIRECT FEEDBACK & SVG LINES)
   ========================================================================== */

const M4_QUESTION_POOL = [
    {
        id: 'p1',
        text: '3 piring, tiap piring isi 2 donat',
        icon: '🍩🍩  🍩🍩  🍩🍩',
        formula: '3 × 2 = 6',
        repeated: '(2 + 2 + 2 = 6)',
        ansVal: '3x2'
    },
    {
        id: 'p2',
        text: '2 toples, tiap toples isi 4 permen',
        icon: '🍬🍬🍬🍬   🍬🍬🍬🍬',
        formula: '2 × 4 = 8',
        repeated: '(4 + 4 = 8)',
        ansVal: '2x4'
    },
    {
        id: 'p3',
        text: '4 sarang, tiap sarang isi 3 telur',
        icon: '🥚🥚🥚   🥚🥚🥚   🥚🥚🥚   🥚🥚🥚',
        formula: '4 × 3 = 12',
        repeated: '(3 + 3 + 3 + 3 = 12)',
        ansVal: '4x3'
    },
    {
        id: 'p4',
        text: '5 kotak, tiap kotak isi 2 pensil',
        icon: '✏️✏️  ✏️✏️  ✏️✏️  ✏️✏️  ✏️✏️',
        formula: '5 × 2 = 10',
        repeated: '(2 + 2 + 2 + 2 + 2 = 10)',
        ansVal: '5x2'
    },
    {
        id: 'p5',
        text: '3 vas, tiap vas mekar 4 bunga',
        icon: '🌸🌸🌸🌸   🌸🌸🌸🌸   🌸🌸🌸🌸',
        formula: '3 × 4 = 12',
        repeated: '(4 + 4 + 4 = 12)',
        ansVal: '3x4'
    },
    {
        id: 'p6',
        text: '4 mobil, tiap mobil ada 2 lampu',
        icon: '💡💡   💡💡   💡💡   💡💡',
        formula: '4 × 2 = 8',
        repeated: '(2 + 2 + 2 + 2 = 8)',
        ansVal: '4x2'
    },
    {
        id: 'p7',
        text: '2 akuarium, tiap akuarium ada 5 ikan',
        icon: '🐟🐟🐟🐟🐟   🐟🐟🐟🐟🐟',
        formula: '2 × 5 = 10',
        repeated: '(5 + 5 = 10)',
        ansVal: '2x5'
    }
];

function initMission4(isRandomNew) {
    moduleBookState.m4.initialized = true;
    moduleBookState.m4.selectedLeftId = null;
    moduleBookState.m4.selectedRightId = null;
    moduleBookState.m4.matchedPairs = [];

    // Sembunyikan Banner Juara
    const banner = document.getElementById('m4SuccessBanner');
    if (banner) banner.style.display = 'none';

    // Bersihkan Garis SVG
    const svgLines = document.getElementById('m4SvgLines');
    if (svgLines) svgLines.innerHTML = '';

    // Ambil 4 soal acak dari pool
    const shuffledPool = [...M4_QUESTION_POOL].sort(() => Math.random() - 0.5);
    const chosenPairs = shuffledPool.slice(0, 4);

    // Kocok urutan kiri dan kanan secara terpisah
    const leftItems = [...chosenPairs].sort(() => Math.random() - 0.5);
    const rightItems = [...chosenPairs].sort(() => Math.random() - 0.5);

    moduleBookState.m4.pairs = chosenPairs;
    moduleBookState.m4.leftItems = leftItems;
    moduleBookState.m4.rightItems = rightItems;

    renderM4Cards();
    updateM4Progress();
}
window.initMission4 = initMission4;

function renderM4Cards() {
    const leftCol = document.getElementById('m4LeftCol');
    const rightCol = document.getElementById('m4RightCol');
    if (!leftCol || !rightCol) return;

    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    // Render Kolom Kiri: Gambar Kelompok Benda
    moduleBookState.m4.leftItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'm4-card m4-left-card';
        card.id = `m4LeftCard-${item.id}`;
        card.dataset.id = item.id;

        card.innerHTML = `
            <div class="m4-card-content">
                <div>
                    <div class="m4-item-icon" style="letter-spacing:2px;font-size:1.15rem;margin-bottom:4px;">${item.icon}</div>
                    <div class="m4-item-text">${item.text}</div>
                </div>
            </div>
            <div class="m4-connector-dot" id="m4DotLeft-${item.id}"></div>
        `;

        card.addEventListener('click', () => {
            handleM4CardClick('left', item.id);
        });

        leftCol.appendChild(card);
    });

    // Render Kolom Kanan: Rumus Perkalian
    moduleBookState.m4.rightItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'm4-card m4-right-card';
        card.id = `m4RightCard-${item.id}`;
        card.dataset.id = item.id;

        card.innerHTML = `
            <div class="m4-connector-dot" id="m4DotRight-${item.id}"></div>
            <div class="m4-card-content" style="justify-content:center;text-align:center;">
                <div>
                    <div class="m4-formula-text">${item.formula}</div>
                    <div style="font-size:0.8rem;color:#7f8c8d;font-weight:700;">${item.repeated}</div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            handleM4CardClick('right', item.id);
        });

        rightCol.appendChild(card);
    });
}

function handleM4CardClick(side, id) {
    // Abaikan jika kartu sudah matched
    const isAlreadyMatched = moduleBookState.m4.matchedPairs.some(p => p.leftId === id || p.rightId === id);
    if (isAlreadyMatched) return;

    playPopSound();

    if (side === 'left') {
        // Pilih kartu kiri
        moduleBookState.m4.selectedLeftId = id;
        document.querySelectorAll('.m4-left-card').forEach(c => {
            if (c.dataset.id === id) c.classList.add('selected');
            else c.classList.remove('selected');
        });
    } else if (side === 'right') {
        // Pilih kartu kanan
        moduleBookState.m4.selectedRightId = id;
        document.querySelectorAll('.m4-right-card').forEach(c => {
            if (c.dataset.id === id) c.classList.add('selected');
            else c.classList.remove('selected');
        });
    }

    // Jika kedua sisi sudah dipilih, verifikasi kecocokan
    if (moduleBookState.m4.selectedLeftId && moduleBookState.m4.selectedRightId) {
        verifyM4Match();
    }
}

function verifyM4Match() {
    const leftId = moduleBookState.m4.selectedLeftId;
    const rightId = moduleBookState.m4.selectedRightId;

    const leftCard = document.getElementById(`m4LeftCard-${leftId}`);
    const rightCard = document.getElementById(`m4RightCard-${rightId}`);

    if (leftId === rightId) {
        // JAWABAN BENAR!
        const pairIndex = moduleBookState.m4.matchedPairs.length;
        const color = moduleBookState.m4.colors[pairIndex % moduleBookState.m4.colors.length];

        moduleBookState.m4.matchedPairs.push({ leftId, rightId, color });

        if (leftCard) {
            leftCard.classList.remove('selected');
            leftCard.classList.add('matched');
        }
        if (rightCard) {
            rightCard.classList.remove('selected');
            rightCard.classList.add('matched');
        }

        if (typeof playSound === 'function') playSound('correct');

        moduleBookState.m4.selectedLeftId = null;
        moduleBookState.m4.selectedRightId = null;

        drawM4Lines();
        updateM4Progress();

        // Cek apakah semua 4 pasangan selesai
        if (moduleBookState.m4.matchedPairs.length === moduleBookState.m4.pairs.length) {
            setTimeout(() => {
                const banner = document.getElementById('m4SuccessBanner');
                if (banner) banner.style.display = 'block';
                playFanfareSound();
            }, 400);
        }
    } else {
        // JAWABAN KURANG TEPAT
        if (typeof playSound === 'function') playSound('wrong');

        // Shake animation effect
        if (leftCard) leftCard.style.animation = 'flowerWiggle 0.3s ease-in-out';
        if (rightCard) rightCard.style.animation = 'flowerWiggle 0.3s ease-in-out';

        setTimeout(() => {
            if (leftCard) {
                leftCard.style.animation = '';
                leftCard.classList.remove('selected');
            }
            if (rightCard) {
                rightCard.style.animation = '';
                rightCard.classList.remove('selected');
            }
            moduleBookState.m4.selectedLeftId = null;
            moduleBookState.m4.selectedRightId = null;
        }, 400);
    }
}

function drawM4Lines() {
    const svgLines = document.getElementById('m4SvgLines');
    const arena = document.getElementById('m4MatchingArena');
    if (!svgLines || !arena) return;

    svgLines.innerHTML = '';
    const arenaRect = arena.getBoundingClientRect();

    moduleBookState.m4.matchedPairs.forEach(pair => {
        const dotLeft = document.getElementById(`m4DotLeft-${pair.leftId}`);
        const dotRight = document.getElementById(`m4DotRight-${pair.rightId}`);
        if (!dotLeft || !dotRight) return;

        const r1 = dotLeft.getBoundingClientRect();
        const r2 = dotRight.getBoundingClientRect();

        const x1 = r1.left + r1.width / 2 - arenaRect.left;
        const y1 = r1.top + r1.height / 2 - arenaRect.top;
        const x2 = r2.left + r2.width / 2 - arenaRect.left;
        const y2 = r2.top + r2.height / 2 - arenaRect.top;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const midX = (x1 + x2) / 2;
        // Kurva Bezier kubik halus antara titik kiri dan kanan
        path.setAttribute('d', `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`);
        path.setAttribute('stroke', pair.color || '#2ecc71');
        path.setAttribute('stroke-width', '4');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');

        svgLines.appendChild(path);
    });
}

function updateM4Progress() {
    const pill = document.getElementById('m4ProgressPill');
    if (pill) {
        pill.innerText = `Terselesaikan: ${moduleBookState.m4.matchedPairs.length} / ${moduleBookState.m4.pairs.length} Pasang`;
    }
}

// Redraw garis SVG saat ukuran layar berubah (resize/rotate HP)
window.addEventListener('resize', () => {
    if (moduleBookState.currentPage === 4) {
        drawM4Lines();
    }
});


/* -------------------------------------------
    KANTONG PERKALIAN MEDIA ✂️
-------------------------------------------*/

function initializeMultiplicationPocket() {
    const container = document.getElementById("containerSimulation"); 
    if (!container) return;
    
    container.innerHTML = `
        <style>
            .pocket-control { margin-bottom: 20px; padding: 15px; border: 2px solid #A7D7C5; border-radius: 15px; background-color: #E8F5E9; display: flex; flex-direction:column; align-items: center; gap: 15px; }
            .pocket-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; min-height: 150px; padding: 15px; border: 2px dashed #5C8D89; border-radius: 12px; background-color: #fff; }
            .pocket-group { border: 2px solid #D4A373; padding: 10px; border-radius: 15px; display: flex; flex-direction: column; align-items: center; background-color: #FFF3E0; width: 100px; }
            .ball-container { display: flex; flex-wrap: wrap; justify-content: center; margin-top: 5px; gap: 5px;}
            .ball { width: 20px; height: 20px; border-radius: 50%; display: inline-block; box-shadow: 1px 1px 2px rgba(0,0,0,0.3); } 
            .input-box { padding: 8px; border-radius: 10px; border: 1px solid #ccc; width: 60px; text-align:center; font-size:1.2rem;}
        </style>
        
        <h3 style="color:#5C8D89; text-align:center;">Simulasi Konsep Perkalian</h3>
        <p style="text-align:center;">Masukkan angka untuk melihat bola dalam kantong!</p>
        
        <div class="pocket-control">
            <div style="display:flex; align-items:center; gap:10px;">
                <div style="text-align:center;">
                    <label style="display:block; font-size:0.8rem;">Kantong</label>
                    <input type="number" id="factorA" value="3" min="1" max="10" class="input-box">
                </div>
                <span style="font-size: 1.5em; font-weight: 700;">×</span>
                <div style="text-align:center;">
                    <label style="display:block; font-size:0.8rem;">Isi Bola</label>
                    <input type="number" id="factorB" value="4" min="1" max="10" class="input-box">
                </div>
            </div>
            <button class="jawabanBtn" onclick="renderMultiplicationPocket()" style="background-color:#5C8D89; color:white; width:auto; padding:10px 30px;">SIMULASIKAN</button>
            <p style="font-weight: 700;">Hasil: <span id="pocketResult" style="color:#D84315; font-size: 1.5em;">?</span></p>
        </div>
        
        <p id="sumConcept" style="text-align:center; margin-bottom:10px; font-weight:bold; color:#555;">...</p>
        
        <div class="pocket-container" id="pocketArea">
            </div>
    `;
    renderMultiplicationPocket(); 
}
window.initializeMultiplicationPocket = initializeMultiplicationPocket;

function renderMultiplicationPocket() {
    const factorAEl = document.getElementById("factorA");
    const factorBEl = document.getElementById("factorB");
    const pocketArea = document.getElementById("pocketArea");
    const pocketResult = document.getElementById("pocketResult");
    const sumConcept = document.getElementById("sumConcept");
    
    if(!factorAEl || !factorBEl) return;

    const factorA = parseInt(factorAEl.value);
    const factorB = parseInt(factorBEl.value);
    
    if (isNaN(factorA) || isNaN(factorB) || factorA < 1 || factorB < 1 || factorA > 10 || factorB > 10) {
        if(pocketArea) pocketArea.innerHTML = "<p>Masukkan angka 1-10 saja ya!</p>";
        return;
    }

    pocketArea.innerHTML = "";
    let total = 0;
    
    for (let i = 0; i < factorA; i++) {
        const group = document.createElement("div");
        group.className = "pocket-group";
        
        const ballColor = getColorByFactor(factorA); 
        
        let groupContent = `<div style="font-weight:700; font-size:0.8rem; color:#5C8D89;">Kantong ${i+1}</div>`;
        groupContent += `<div class="ball-container">`;
        
        for (let j = 0; j < factorB; j++) {
            groupContent += `<span class="ball" style="background:${ballColor};"></span>`;
            total++;
        }
        groupContent += `</div>`;
        
        group.innerHTML = groupContent;
        pocketArea.appendChild(group);
    }
    
    if(pocketResult) pocketResult.textContent = `${factorA} × ${factorB} = ${total}`;
    if(sumConcept) sumConcept.innerHTML = `Artinya: Ada <strong style="color:#5C8D89;">${factorA}</strong> kantong, masing-masing berisi <strong style="color:#5C8D89;">${factorB}</strong> bola.<br>(${Array(factorA).fill(factorB).join(' + ')} = ${total})`;
}
window.renderMultiplicationPocket = renderMultiplicationPocket;
window.handleRppUpload = function() {
    window.open("Modul_Ajar_Matematika_Kelas_2_Lengkap.pdf", "_blank", "noopener");
};

/* ============================================================
   PDF.JS VIEWER UNTUK MODUL AJAR GURU (NATIVE CANVAS DI HP & DESKTOP)
   ============================================================ */
let _pdfDoc = null;
let _pdfLoadingInProgress = false;

function initPdfViewer() {
    const container = document.getElementById('pdfContainer');
    if (!container) return;

    // Jika sudah pernah dirender, tidak perlu render ulang
    if (_pdfDoc && container.querySelector('.pdf-page-card')) return;
    if (_pdfLoadingInProgress) return;
    _pdfLoadingInProgress = true;

    const loadingEl = document.getElementById('pdfLoading');
    if (loadingEl) {
        loadingEl.style.display = 'block';
        loadingEl.innerHTML = '<div style="font-size: 2.2rem; margin-bottom: 10px;">⏳</div>Memuat lembaran modul ajar...';
    }

    if (typeof pdfjsLib === 'undefined') {
        _pdfLoadingInProgress = false;
        if (loadingEl) {
            loadingEl.innerHTML = `
                <div style="padding: 20px; color: #ffffff;">
                    <p style="margin-bottom: 12px; font-size: 1rem;">Modul Ajar PDF siap diakses:</p>
                    <a href="Modul_Ajar_Matematika_Kelas_2_Lengkap.pdf" target="_blank" rel="noopener" class="btn-pdf-download">📥 Buka Dokumen Modul Ajar</a>
                </div>`;
        }
        return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const pdfUrl = 'Modul_Ajar_Matematika_Kelas_2_Lengkap.pdf';

    pdfjsLib.getDocument(pdfUrl).promise.then(function(doc) {
        _pdfDoc = doc;
        _pdfLoadingInProgress = false;
        if (loadingEl) loadingEl.style.display = 'none';

        const totalPagesLabel = document.getElementById('pdfTotalPagesLabel');
        if (totalPagesLabel) {
            totalPagesLabel.textContent = `Modul Ajar Matematika (${doc.numPages} Halaman Lengkap)`;
        }

        // Render seluruh halaman berurutan ke dalam canvas tajam (High-DPI)
        for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
            const card = document.createElement('div');
            card.className = 'pdf-page-card';
            card.id = `pdfPageCard_${pageNum}`;

            const badge = document.createElement('div');
            badge.className = 'pdf-page-badge';
            badge.textContent = `Halaman ${pageNum} dari ${doc.numPages}`;
            card.appendChild(badge);

            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page-canvas';
            canvas.id = `pdfCanvas_${pageNum}`;
            card.appendChild(canvas);

            container.appendChild(card);

            doc.getPage(pageNum).then(function(page) {
                // Skala 2.0 untuk rendering teks tajam di layar smartphone (Retina/High-DPI)
                const scale = 2.0;
                const viewport = page.getViewport({ scale: scale });
                const ctx = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        }
    }).catch(function(err) {
        _pdfLoadingInProgress = false;
        console.error('Gagal render PDF via PDF.js:', err);
        if (loadingEl) {
            loadingEl.innerHTML = `
                <div style="padding: 20px; color: #ffffff;">
                    <p style="margin-bottom: 12px; font-size: 1rem;">Modul Ajar Matematika:</p>
                    <a href="Modul_Ajar_Matematika_Kelas_2_Lengkap.pdf" target="_blank" rel="noopener" class="btn-pdf-download">📥 Buka / Unduh Modul Ajar PDF</a>
                </div>`;
        }
    });
}
window.initPdfViewer = initPdfViewer;

/* ============================================================
   AUTH — SUPABASE + FALLBACK LOCALSTORAGE
   ============================================================ */

let _authResetUsername = null;

function switchAuth(formId) {
    ['loginForm','registerForm','forgotForm'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = id === formId ? 'block' : 'none';
    });
}
window.switchAuth = switchAuth;

function togglePw(id, btnEl) {
    const el = document.getElementById(id);
    if (!el) return;
    const isPw = el.type === 'password';
    el.type = isPw ? 'text' : 'password';
    const btn = btnEl || (typeof event !== 'undefined' && event && event.currentTarget);
    if (btn) {
        if (isPw) {
            btn.innerHTML = '<svg class="eye-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
            btn.title = 'Sembunyikan password';
            btn.setAttribute('aria-label', 'Sembunyikan password');
        } else {
            btn.innerHTML = '<svg class="eye-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
            btn.title = 'Lihat password';
            btn.setAttribute('aria-label', 'Lihat password');
        }
    }
}
window.togglePw = togglePw;

function showAuthAlert(elId, msg, type) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.style.display = 'block';
    el.textContent = (type === 'error' ? '❌ ' : '✅ ') + msg;
    if (type === 'error') setTimeout(() => el.style.display = 'none', 3500);
}

async function doRegister() {
    const db = window.db;
    const fn = document.getElementById('regName').value.trim();
    const un = document.getElementById('regUser').value.trim();
const pw = document.getElementById('regPass').value;
    const pw2 = document.getElementById('regPass2').value;
    const btn = document.getElementById('regBtn');
    if (!fn || !un || !pw) { showAuthAlert('regErr','Semua field harus diisi!','error'); return; }
    if (pw.length < 4) { showAuthAlert('regErr','Password minimal 4 karakter!','error'); return; }
    if (pw !== pw2) { showAuthAlert('regErr','Password dan konfirmasi tidak cocok!','error'); return; }

    if (!db) {
        // Fallback offline via localStorage
        const users = JSON.parse(localStorage.getItem('skripsi_users') || '[]');
        if (users.find(x => x.username.toLowerCase() === un.toLowerCase())) {
            showAuthAlert('regErr', 'Username sudah digunakan!', 'error');
            return;
        }
        users.push({ fullname: fn, username: un, password: pw, created_at: new Date().toISOString() });
        localStorage.setItem('skripsi_users', JSON.stringify(users));
        showAuthAlert('regSuc', 'Daftar berhasil (Mode Lokal)! Silakan login.', 'success');
        setTimeout(() => switchAuth('loginForm'), 1500);
        return;
    }
    btn.disabled = true; btn.textContent = '⏳ Mendaftar...';
    try {
        const { data: ex, error: errCheck } = await safeDbRequest(db.from('skripsi_users').select('username').eq('username', un).maybeSingle());
        if (errCheck) throw errCheck;
        if (ex) { showAuthAlert('regErr','Username sudah digunakan!','error'); btn.disabled=false; btn.textContent='🎉 Daftar Sekarang!'; return; }
        const { error } = await safeDbRequest(db.from('skripsi_users').insert([{ fullname: fn, username: un, password: pw }]));
        if (error) throw error;
        showAuthAlert('regSuc','Daftar berhasil tersimpan ke Supabase! Silakan login.','success');
        setTimeout(() => switchAuth('loginForm'), 2000);
    } catch(e) {
        if (e.message && e.message.toLowerCase().includes('timeout')) {
            showAuthAlert('regErr','Layanan tidak tersedia. Coba lagi setelah beberapa saat.','error');
        } else {
            showAuthAlert('regErr', e.message || 'Gagal mendaftar','error');
        }
    } finally { btn.disabled=false; btn.textContent='🎉 Daftar Sekarang!'; }
}
window.doRegister = doRegister;

async function doLogin() {
    const db = window.db;
    const un = document.getElementById('loginUser').value.trim();
    const pw = document.getElementById('loginPass').value;
    const btn = document.getElementById('loginBtn');
    if (!un || !pw) { showAuthAlert('loginErr','Username dan password harus diisi!','error'); return; }

    if (!db) {
        // Fallback offline via localStorage
        const users = JSON.parse(localStorage.getItem('skripsi_users') || '[]');
        const u = users.find(x => x.username.toLowerCase() === un.toLowerCase() && x.password === pw);
        if (!u) {
            showAuthAlert('loginErr', 'Username atau password salah!', 'error');
            return;
        }
        sessionStorage.setItem('skripsi_user', JSON.stringify({ username: u.username, fullname: u.fullname }));
        showMainApp();
        return;
    }
    btn.disabled=true; btn.textContent='⏳ Masuk...';
    try {
        const { data: u, error } = await safeDbRequest(db.from('skripsi_users').select('username,fullname').eq('username',un).eq('password',pw).maybeSingle());
        if (error) throw error;
        if (!u) { showAuthAlert('loginErr','Username atau password salah!','error'); btn.disabled=false; btn.textContent='🚀 Masuk Sekarang!'; return; }
        sessionStorage.setItem('skripsi_user', JSON.stringify(u));
        showMainApp();
    } catch(e) {
        if (e.message && e.message.toLowerCase().includes('timeout')) {
            showAuthAlert('loginErr','Layanan tidak tersedia. Coba lagi setelah beberapa saat.','error');
        } else {
            showAuthAlert('loginErr', e.message || 'Gagal login','error');
        }
        btn.disabled=false; btn.textContent='🚀 Masuk Sekarang!';
    }
}
window.doLogin = doLogin;

async function doVerify() {
    const db = window.db;
    const un = document.getElementById('forgotUser').value.trim();
    const fn = document.getElementById('forgotName').value.trim();
    const btn = document.getElementById('verifyBtn');
    if (!un || !fn) { showAuthAlert('forgotErr','Semua field harus diisi!','error'); return; }

    if (!db) {
        const users = JSON.parse(localStorage.getItem('skripsi_users') || '[]');
        const u = users.find(x => x.username === un && x.fullname === fn);
        if (!u) { showAuthAlert('forgotErr','Username atau nama tidak cocok!','error'); return; }
        _authResetUsername = un;
        document.getElementById('forgotStep1').style.display = 'none';
        document.getElementById('forgotStep2').style.display = 'block';
        showAuthAlert('forgotSuc','Identitas terverifikasi!','success');
        return;
    }
    btn.disabled=true; btn.textContent='⏳ Verifikasi...';
    try {
        const { data: u } = await db.from('skripsi_users').select('username').eq('username',un).eq('fullname',fn).maybeSingle();
        if (!u) { showAuthAlert('forgotErr','Username atau nama tidak cocok!','error'); btn.disabled=false; btn.textContent='🔍 Verifikasi'; return; }
        _authResetUsername = un;
        document.getElementById('forgotStep1').style.display = 'none';
        document.getElementById('forgotStep2').style.display = 'block';
        showAuthAlert('forgotSuc','Identitas terverifikasi!','success');
    } catch(e) { showAuthAlert('forgotErr', e.message,'error'); }
    finally { btn.disabled=false; btn.textContent='🔍 Verifikasi'; }
}
window.doVerify = doVerify;

async function doResetPw() {
    const db = window.db;
    const np = document.getElementById('newPass').value;
    const np2 = document.getElementById('newPass2').value;
    const btn = document.getElementById('resetBtn');
    if (!np || np.length < 4) { showAuthAlert('forgotErr','Password minimal 4 karakter!','error'); return; }
    if (np !== np2) { showAuthAlert('forgotErr','Password tidak cocok!','error'); return; }

    if (!db) {
        const users = JSON.parse(localStorage.getItem('skripsi_users') || '[]');
        const idx = users.findIndex(u => u.username === _authResetUsername);
        if (idx >= 0) { users[idx].password = np; localStorage.setItem('skripsi_users', JSON.stringify(users)); }
        showAuthAlert('forgotSuc','Password berhasil diubah! Silakan login.','success');
        setTimeout(() => switchAuth('loginForm'), 2000); return;
    }
    btn.disabled=true; btn.textContent='⏳ Menyimpan...';
    try {
        await db.from('skripsi_users').update({ password: np }).eq('username', _authResetUsername);
        showAuthAlert('forgotSuc','Password berhasil diubah! Silakan login.','success');
        setTimeout(() => switchAuth('loginForm'), 2000);
    } catch(e) { showAuthAlert('forgotErr', e.message,'error'); }
    finally { btn.disabled=false; btn.textContent='✅ Simpan Password'; }
}
window.doResetPw = doResetPw;

function doLogout() {
    sessionStorage.removeItem('skripsi_user');
    document.getElementById('mainHeader').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    showAuthPage();
}
window.doLogout = doLogout;

/* ============================================================
   GAME 2 — CERITA BERGAMBAR DENGAN EMOJI VISUAL
   (Override fungsi startGameStory yang lama)
   ============================================================ */

const STORY_SCENARIOS = [
    { template: 'Ibu membeli {a} kantong apel. Setiap kantong berisi {b} apel. Berapa total apel?', emoji: '🍎' },
    { template: 'Ada {a} pohon mangga. Setiap pohon berbuah {b} mangga. Berapa total mangga?', emoji: '🥭' },
    { template: 'Pak Guru punya {a} kotak pensil. Setiap kotak berisi {b} pensil. Berapa total pensil?', emoji: '✏️' },
    { template: 'Ada {a} kandang ayam. Setiap kandang berisi {b} ayam. Berapa total ayam?', emoji: '🐔' },
    { template: 'Siti membeli {a} bungkus permen. Setiap bungkus berisi {b} permen. Berapa total permen?', emoji: '🍬' },
    { template: 'Ada {a} meja di kelas. Setiap meja ada {b} kursi. Berapa total kursi?', emoji: '🪑' },
    { template: 'Pak Tani punya {a} keranjang ikan. Setiap keranjang berisi {b} ikan. Berapa total ikan?', emoji: '🐟' },
    { template: 'Ada {a} bis sekolah. Setiap bis membawa {b} murid. Berapa total murid?', emoji: '🧒' },
    { template: 'Toko bunga punya {a} pot. Setiap pot ada {b} kuntum bunga. Berapa total kuntum?', emoji: '🌸' },
    { template: 'Ada {a} kotak donat. Setiap kotak berisi {b} donat. Berapa total donat?', emoji: '🍩' },
];

let story2Questions = [];
let story2Index = 0;

// Override fungsi lama
function startGameStory() {
    currentScore = 0; story2Index = 0;
    const maxF = maxFactorByLevel();

    // Buat 6 soal cerita bergambar
    story2Questions = [];
    const scenarios = shuffle([...STORY_SCENARIOS]).slice(0, 6);
    scenarios.forEach(s => {
        const a = randInt(1, Math.min(maxF, 5)); // batasi agar emoji tidak terlalu banyak
        const b = randInt(1, Math.min(maxF, 5));
        story2Questions.push({
            text: s.template.replace('{a}', a).replace('{b}', b),
            emoji: s.emoji, a, b, correct: a * b
        });
    });

    showStory2Question();
}

function showStory2Question() {
    if (story2Index >= story2Questions.length) {
        alert(`🎉 Selesai! Skor: ${currentScore}`);
        saveScoreToPlayer(player, "Cerita Bergambar", selectedLevel, currentScore);
        showPage("gameMenu"); return;
    }

    const q = story2Questions[story2Index];
    story2Index++;

    // Buat grid emoji visual: a baris × b kolom
    let emojiGrid = '';
    for (let r = 0; r < q.a; r++) {
        emojiGrid += '<div class="story-emoji-row">';
        for (let c = 0; c < q.b; c++) {
            emojiGrid += `<span class="story-emoji-cell">${q.emoji}</span>`;
        }
        emojiGrid += '</div>';
    }

    document.getElementById('storyBox').innerHTML = `
        <div class="story-card-visual">
            <div class="story-text-box">${q.text}</div>
            <div class="story-emoji-grid">${emojiGrid}</div>
            <div class="story-count-label">
                ${q.a} baris × ${q.b} ${q.emoji} = ?
            </div>
        </div>`;

    document.getElementById('questionBox').textContent = `${q.a} × ${q.b} = ?`;
    document.getElementById('timerBox').textContent = `📖 Soal ${story2Index}/${story2Questions.length}`;

    generateOptions(q.correct, document.getElementById('answerBox'), (isCorrect) => {
        if (isCorrect) currentScore += 15;
        updateScoreDisplay();
        setTimeout(showStory2Question, 800);
    });
}

/* ============================================================
   QUIZ 30 SOAL — CAMPURAN (CERITA, GAMBAR, ANGKA)
   ============================================================ */

const QUIZ_EMOJI_ITEMS = [
    { emoji: '🍎', name: 'apel' }, { emoji: '🍊', name: 'jeruk' },
    { emoji: '🍌', name: 'pisang' }, { emoji: '⭐', name: 'bintang' },
    { emoji: '🌸', name: 'bunga' }, { emoji: '🐟', name: 'ikan' },
    { emoji: '🐣', name: 'anak ayam' }, { emoji: '✏️', name: 'pensil' },
    { emoji: '📚', name: 'buku' }, { emoji: '🍬', name: 'permen' },
    { emoji: '🥭', name: 'mangga' }, { emoji: '🍩', name: 'donat' },
];

const QUIZ_STORY_TEMPLATES = [
    'Ibu membeli {a} kantong {item}. Setiap kantong berisi {b} {item}. Berapa total {item}?',
    'Ada {a} kotak berisi {item}. Setiap kotak ada {b} {item}. Berapa jumlah {item} seluruhnya?',
    'Pak Guru membagikan {item} kepada {a} kelompok. Setiap kelompok mendapat {b} {item}. Berapa total {item}?',
    'Di kebun ada {a} pohon {item}. Setiap pohon menghasilkan {b} {item}. Berapa total {item}?',
    'Ada {a} rak. Setiap rak berisi {b} {item}. Berapa total {item} di semua rak?',
    'Seorang anak mengumpulkan {item} selama {a} hari. Setiap hari ia mengumpulkan {b} {item}. Berapa total {item}?',
    'Di sebuah desa ada {a} rumah. Setiap rumah memiliki {b} {item}. Berapa total {item}?',
    'Sebuah toko menjual {item} dalam {a} bungkus. Setiap bungkus berisi {b} {item}. Berapa total {item}?',
    'Ada {a} keranjang {item}. Tiap keranjang berisi {b} {item}. Berapa total {item}?',
    'Pak Tani punya {a} kandang. Setiap kandang berisi {b} {item}. Berapa total {item}?',
];

let quiz30Questions = [];
let quiz30Index = 0;
let quiz30Score = 0;
let quiz30Answers = [];
let quiz30Level = 'easy';

function getLevelRange30(level) {
    if (level === 'easy')   return { min: 1, max: 5 };
    if (level === 'medium') return { min: 1, max: 9 };
    return { min: 1, max: 12 };
}

function buildQuiz30(level) {
    const { min, max } = getLevelRange30(level);
    const questions = [];

    // 10 soal ANGKA — 5 pilih, 5 tulis
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, max), b = randInt(min, max);
        questions.push({ type: 'angka', a, b, correct: a * b, inputMode: i < 5 ? 'tulis' : 'pilih' });
    }

    // 10 soal CERITA — 5 pilih, 5 tulis
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, max), b = randInt(min, max);
        const item = QUIZ_EMOJI_ITEMS[randInt(0, QUIZ_EMOJI_ITEMS.length - 1)];
        const tmpl = QUIZ_STORY_TEMPLATES[randInt(0, QUIZ_STORY_TEMPLATES.length - 1)];
        const text = tmpl.replace(/{a}/g, a).replace(/{b}/g, b).replace(/{item}/g, item.name);
        questions.push({ type: 'cerita', a, b, correct: a * b, text, emoji: item.emoji, inputMode: i < 5 ? 'tulis' : 'pilih' });
    }

    // 10 soal GAMBAR (emoji visual grid) — 5 pilih, 5 tulis
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, Math.min(max, 5));
        const b = randInt(min, Math.min(max, 5));
        const item = QUIZ_EMOJI_ITEMS[randInt(0, QUIZ_EMOJI_ITEMS.length - 1)];
        questions.push({ type: 'gambar', a, b, correct: a * b, emoji: item.emoji, name: item.name, inputMode: i < 5 ? 'tulis' : 'pilih' });
    }

    return shuffle(questions);
}

/* ============================================================
   FITUR PEMBACAAN SUARA SOAL (TEXT-TO-SPEECH) RAMAH ANAK SD
   ============================================================ */
let quizAutoVoice = localStorage.getItem('quiz_auto_voice') !== 'false';
let quizVoiceType = localStorage.getItem('quiz_voice_type') || 'child'; // default suara anak kecil
let currentSpeechUtterance = null;
let indonesianVoice = null;
let isBgmDucked = false;
let preDuckVolume = 0.3;

function loadIndonesianVoice() {
    if (!('speechSynthesis' in window)) return;
    try {
        const voices = window.speechSynthesis.getVoices();
        // Prioritaskan suara perempuan / natural bahasa Indonesia agar menghasilkan karakter suara anak kecil yang jernih, imut, dan ekspresif saat pitch dinaikkan
        indonesianVoice = voices.find(v => {
            const l = (v.lang || '').toLowerCase();
            const n = (v.name || '').toLowerCase();
            const isIndo = l.startsWith('id') || l.startsWith('in') || n.includes('indonesia');
            return isIndo && (n.includes('gadis') || n.includes('natural') || n.includes('female') || n.includes('wanita') || n.includes('google'));
        }) || voices.find(v => {
            const l = (v.lang || '').toLowerCase();
            const n = (v.name || '').toLowerCase();
            return l.startsWith('id') || l.startsWith('in') || n.includes('indonesia');
        }) || null;
    } catch(e) {}
}

if ('speechSynthesis' in window) {
    loadIndonesianVoice();
    window.speechSynthesis.onvoiceschanged = loadIndonesianVoice;
}

function changeVoiceType(type) {
    quizVoiceType = type;
    localStorage.setItem('quiz_voice_type', type);
    const sel = document.getElementById('voiceTypeSelect');
    if (sel) sel.value = type;
}
window.changeVoiceType = changeVoiceType;

function testVoicePreview() {
    if (!('speechSynthesis' in window)) {
        alert('Fitur pembacaan suara tidak didukung di browser ini.');
        return;
    }
    stopQuizSpeech();
    if (!indonesianVoice) loadIndonesianVoice();

    const sampleText = quizVoiceType === 'child'
        ? "Halo teman-teman! Ayo kita belajar perkalian bersama. Seru banget lho!"
        : "Halo murid-murid! Mari kita belajar perkalian bersama.";

    const utterance = new SpeechSynthesisUtterance(sampleText);
    utterance.lang = 'id-ID';
    if (indonesianVoice) utterance.voice = indonesianVoice;

    if (quizVoiceType === 'child') {
        utterance.pitch = 1.38; // Nada tinggi imut khas anak-anak ceria
        utterance.rate = 0.94;  // Tempo pas dan lincah
    } else {
        utterance.pitch = 1.05; // Suara normal guru
        utterance.rate = 0.88;
    }

    duckBgmVolume();
    utterance.onend = () => restoreBgmVolume();
    utterance.onerror = () => restoreBgmVolume();

    try {
        window.speechSynthesis.speak(utterance);
    } catch(e) {
        restoreBgmVolume();
    }
}
window.testVoicePreview = testVoicePreview;

function updateQuizVoiceUI() {
    const icon = document.getElementById('quizVoiceIcon');
    const status = document.getElementById('quizVoiceStatus');
    const btn = document.getElementById('quizVoiceToggle');
    if (!icon || !status || !btn) return;
    if (quizAutoVoice) {
        icon.textContent = '🔊';
        status.textContent = 'Nyala';
        btn.classList.remove('voice-off');
    } else {
        icon.textContent = '🔇';
        status.textContent = 'Mati';
        btn.classList.add('voice-off');
    }

    const voiceSel = document.getElementById('voiceTypeSelect');
    if (voiceSel) voiceSel.value = quizVoiceType;
}

function toggleQuizAutoVoice() {
    quizAutoVoice = !quizAutoVoice;
    localStorage.setItem('quiz_auto_voice', quizAutoVoice ? 'true' : 'false');
    updateQuizVoiceUI();
    if (!quizAutoVoice) {
        stopQuizSpeech();
    } else {
        // Jika dinyalakan saat berada di soal yang belum dijawab, langsung bacakan
        speakCurrentQuizQuestion(true);
    }
}
window.toggleQuizAutoVoice = toggleQuizAutoVoice;

function duckBgmVolume() {
    const bgAudio = document.getElementById('backgroundAudio');
    if (bgAudio && !bgAudio.paused && !bgAudio.muted && !isBgmDucked) {
        preDuckVolume = bgAudio.volume;
        // Turunkan volume lagu latar sedikit agar narasi suara terdengar jelas
        bgAudio.volume = Math.max(0.06, preDuckVolume * 0.35);
        isBgmDucked = true;
    }
}

function restoreBgmVolume() {
    const bgAudio = document.getElementById('backgroundAudio');
    if (bgAudio && isBgmDucked) {
        bgAudio.volume = preDuckVolume;
        isBgmDucked = false;
    }
}

function stopQuizSpeech() {
    if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch(e) {}
    }
    currentSpeechUtterance = null;
    const btn = document.getElementById('btnSpeechQuiz');
    if (btn) {
        btn.classList.remove('speaking');
        btn.innerHTML = `<span class="speech-icon">🔊</span><span class="speech-label">Dengarkan Soal</span>`;
    }
    restoreBgmVolume();
}
window.stopQuizSpeech = stopQuizSpeech;

function getQuestionSpeechText(q) {
    if (!q) return '';
    if (q.type === 'angka') {
        return `Berapa ${q.a} dikali ${q.b}?`;
    }
    if (q.type === 'cerita') {
        return `${q.text}. Berapa ${q.a} dikali ${q.b}?`;
    }
    if (q.type === 'gambar') {
        return `Ada ${q.a} baris, setiap baris ada ${q.b} ${q.name}. Berapa total ${q.name}? Berapa ${q.a} dikali ${q.b}?`;
    }
    return '';
}

function speakCurrentQuizQuestion(isManualClick = false) {
    if (!('speechSynthesis' in window)) return;
    if (!isManualClick && !quizAutoVoice) return;
    if (!quiz30Questions || quiz30Index >= quiz30Questions.length) return;

    // Jika soal ini sudah dijawab dan bukan klik tombol manual, lewati
    if (!isManualClick && quiz30Answers[quiz30Index] !== null) return;

    stopQuizSpeech();

    const q = quiz30Questions[quiz30Index];
    const textToSpeak = getQuestionSpeechText(q);
    if (!textToSpeak) return;

    if (!indonesianVoice) loadIndonesianVoice();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'id-ID';
    if (indonesianVoice) {
        utterance.voice = indonesianVoice;
    }
    
    // Karakter Suara Anak Kecil vs Suara Normal
    if (quizVoiceType === 'child') {
        utterance.pitch = 1.38; // Nada tinggi khas anak-anak ceria
        utterance.rate = 0.94;  // Tempo pas dan lincah tapi artikulasi tetap jelas
    } else {
        utterance.pitch = 1.05; // Suara normal guru
        utterance.rate = 0.88;
    }

    utterance.onstart = () => {
        duckBgmVolume();
        const btn = document.getElementById('btnSpeechQuiz');
        if (btn) {
            btn.classList.add('speaking');
            btn.innerHTML = `<span class="speech-icon">📢</span><span class="speech-label">Membacakan Soal...</span>`;
        }
    };

    utterance.onend = () => {
        const btn = document.getElementById('btnSpeechQuiz');
        if (btn) {
            btn.classList.remove('speaking');
            btn.innerHTML = `<span class="speech-icon">🔊</span><span class="speech-label">Dengarkan Lagi</span>`;
        }
        restoreBgmVolume();
    };

    utterance.onerror = () => {
        const btn = document.getElementById('btnSpeechQuiz');
        if (btn) {
            btn.classList.remove('speaking');
            btn.innerHTML = `<span class="speech-icon">🔊</span><span class="speech-label">Dengarkan Soal</span>`;
        }
        restoreBgmVolume();
    };

    currentSpeechUtterance = utterance;

    // Jeda mikro 150ms untuk memastikan kestabilan browser
    setTimeout(() => {
        try {
            window.speechSynthesis.speak(utterance);
        } catch(e) {
            restoreBgmVolume();
        }
    }, 150);
}

function repeatQuizSpeech() {
    speakCurrentQuizQuestion(true);
}
window.repeatQuizSpeech = repeatQuizSpeech;

function startQuiz30(level) {
    stopQuizSpeech();
    quiz30Level = level;
    quiz30Questions = buildQuiz30(level);
    quiz30Index = 0;
    quiz30Score = 0;
    quiz30Answers = new Array(30).fill(null);
    showPage('quiz');
    document.getElementById('quizTitle').textContent = `📝 Latihan Soal — ${level.toUpperCase()}`;
    updateQuizVoiceUI();
    // Reset quizNav visibility (finishQuiz30 menyembunyikannya)
    document.getElementById('quizNav').style.display = 'flex';
    renderQuiz30Question();
}
window.startQuiz30 = startQuiz30;

function renderQuiz30Question() {
    const q = quiz30Questions[quiz30Index];
    const total = quiz30Questions.length;
    document.getElementById('quizProgress').textContent = `Soal ${quiz30Index + 1} / ${total}`;
    document.getElementById('quizScore').textContent = `Skor: ${quiz30Score}`;

    // Sembunyikan tombol navigasi (auto-advance sekarang)
    document.getElementById('prevBtn30').style.display = 'none';
    document.getElementById('nextBtn30').style.display = 'none';
    document.getElementById('finishQuizBtn30').style.display = quiz30Index === total - 1 && quiz30Answers[quiz30Index] !== null ? 'inline-block' : 'none';

    const { min, max } = getLevelRange30(quiz30Level);
    const opts = generateOpts30(q.correct, min * min, max * max);

    // Tentukan apakah soal ini TULIS atau PILIH
    const isTulis = q.inputMode === 'tulis';
    const alreadyAnswered = quiz30Answers[quiz30Index] !== null;

    // Label tipe soal
    const modeLabel = isTulis ? '✏️ Isian' : '🔘 Pilihan Ganda';

    let html = `<div class="quiz30-card">`;
    html += `
        <div class="quiz30-top-row">
            <div class="quiz30-num">
                Soal ${quiz30Index + 1} dari ${total} 
                <span class="quiz30-mode-badge ${isTulis ? 'badge-tulis' : 'badge-pilih'}">${modeLabel}</span>
            </div>
            <button type="button" class="btn-speech-quiz" id="btnSpeechQuiz" onclick="repeatQuizSpeech()" title="Dengarkan pembacaan soal oleh sistem">
                <span class="speech-icon">🔊</span>
                <span class="speech-label">Dengarkan Soal</span>
            </button>
        </div>`;

    if (q.type === 'angka') {
        html += `<div class="quiz30-soal-angka">${q.a} × ${q.b} = ?</div>`;
    } else if (q.type === 'cerita') {
        html += `
            <div class="quiz30-soal-cerita">
                <span style="font-size:2.5rem;">${q.emoji}</span>
                <p>${q.text}</p>
                <strong>${q.a} × ${q.b} = ?</strong>
            </div>`;
    } else if (q.type === 'gambar') {
        let grid = '';
        for (let r = 0; r < q.a; r++) {
            grid += '<div class="quiz30-emoji-row">';
            for (let c = 0; c < q.b; c++) grid += `<span class="quiz30-emoji-cell">${q.emoji}</span>`;
            grid += '</div>';
        }
        html += `
            <div class="quiz30-soal-cerita">
                <p>Ada <strong>${q.a} baris</strong>, setiap baris ada <strong>${q.b} ${q.name}</strong>.</p>
                <p>Berapa total ${q.name}?</p>
            </div>
            <div class="quiz30-emoji-grid">${grid}</div>
            <div class="quiz30-soal-angka" style="font-size:1.8rem;">${q.a} × ${q.b} = ?</div>`;
    }

    // ===== JAWABAN: TULIS atau PILIH =====
    if (isTulis) {
        // Mode ISIAN (tulis jawaban)
        if (alreadyAnswered) {
            const prev = quiz30Answers[quiz30Index];
            const isCorrect = prev === q.correct;
            html += `<div class="quiz30-input-area">`;
            html += `<div class="quiz30-input-result ${isCorrect ? 'input-result-correct' : 'input-result-wrong'}">`;
            html += `<span class="quiz30-input-answer">${prev}</span>`;
            html += isCorrect ? ' ✅ Benar!' : ` ❌ Salah! Jawaban: <strong>${q.correct}</strong>`;
            html += `</div></div>`;
        } else {
            html += `<div class="quiz30-input-area">`;
            html += `<div class="quiz30-input-wrapper">`;
            html += `<input type="number" id="quiz30Input" class="quiz30-text-input" placeholder="Tulis jawabanmu..." autocomplete="off" inputmode="numeric">`;
            html += `<button class="quiz30-submit-btn" onclick="answerQuiz30Input()">Jawab ✓</button>`;
            html += `</div>`;
            html += `</div>`;
        }
    } else {
        // Mode PILIHAN GANDA
        html += `<div class="quiz30-opts">`;
        opts.forEach(opt => {
            const prev = quiz30Answers[quiz30Index];
            let cls = 'quiz30-opt-btn';
            if (prev !== null) {
                if (opt === q.correct) cls += ' opt30-correct';
                else if (opt === prev && prev !== q.correct) cls += ' opt30-wrong';
            }
            html += `<button class="${cls}" onclick="answerQuiz30(${opt})">${opt}</button>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    document.getElementById('quizContainer').innerHTML = html;

    // Auto-focus input untuk soal isian
    if (isTulis && !alreadyAnswered) {
        const inp = document.getElementById('quiz30Input');
        if (inp) {
            inp.focus();
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    answerQuiz30Input();
                }
            });
        }
    }

    // Otomatis bacakan soal setelah render jika auto-voice aktif dan belum dijawab
    if (!alreadyAnswered) {
        setTimeout(() => {
            speakCurrentQuizQuestion(false);
        }, 300);
    }
}

function generateOpts30(correct, min, max) {
    const opts = new Set([correct]);
    let tries = 0;
    while (opts.size < 4 && tries < 60) {
        const fake = correct + randInt(-4, 4) * randInt(1, 3);
        if (fake > 0 && fake !== correct) opts.add(fake);
        tries++;
    }
    while (opts.size < 4) opts.add(correct + opts.size * 2);
    return shuffle([...opts]);
}

function answerQuiz30(selected) {
    stopQuizSpeech();
    const q = quiz30Questions[quiz30Index];
    if (quiz30Answers[quiz30Index] !== null) return;
    quiz30Answers[quiz30Index] = selected;
    if (selected === q.correct) {
        quiz30Score += 10;
        playSound('correct');
    } else {
        playSound('wrong');
    }
    document.getElementById('quizScore').textContent = `Skor: ${quiz30Score}`;
    renderQuiz30Question();

    // Auto-advance ke soal berikutnya setelah 1 detik
    setTimeout(() => {
        if (quiz30Index < quiz30Questions.length - 1) {
            quiz30Index++;
            renderQuiz30Question();
        } else {
            // Soal terakhir: tampilkan tombol Selesai
            document.getElementById('finishQuizBtn30').style.display = 'inline-block';
        }
    }, 1000);
}
window.answerQuiz30 = answerQuiz30;

function answerQuiz30Input() {
    stopQuizSpeech();
    const inp = document.getElementById('quiz30Input');
    if (!inp) return;
    const val = inp.value.trim();
    if (val === '') return;
    const numVal = parseInt(val, 10);
    if (isNaN(numVal)) return;
    // Disable input & tombol agar tidak bisa ditekan 2x
    inp.disabled = true;
    const btn = inp.parentElement.querySelector('.quiz30-submit-btn');
    if (btn) btn.disabled = true;
    answerQuiz30(numVal);
}
window.answerQuiz30Input = answerQuiz30Input;

function nextQuiz30() {
    stopQuizSpeech();
    if (quiz30Index < quiz30Questions.length - 1) { quiz30Index++; renderQuiz30Question(); }
}
window.nextQuiz30 = nextQuiz30;

function prevQuiz30() {
    stopQuizSpeech();
    if (quiz30Index > 0) { quiz30Index--; renderQuiz30Question(); }
}
window.prevQuiz30 = prevQuiz30;

async function finishQuiz30() {
    stopQuizSpeech();
    const total = quiz30Questions.length;
    const correct = quiz30Answers.filter((a, i) => a === quiz30Questions[i].correct).length;
    let grade = correct >= 27 ? '🏆 Luar Biasa!' : correct >= 21 ? '🥇 Hebat!' : correct >= 15 ? '🥈 Bagus!' : '🥉 Terus Berlatih!';

    document.getElementById('quizContainer').innerHTML = `
        <div style="text-align:center; padding:30px;">
            <div style="font-size:4rem;">${grade.split(' ')[0]}</div>
            <h2 style="margin:10px 0;">${grade}</h2>
            <div style="display:flex;justify-content:center;gap:20px;margin:20px 0;">
                <div style="background:#f5f5f5;border-radius:16px;padding:16px 24px;text-align:center;">
                    <div style="font-size:2rem;font-weight:bold;color:#55918c;">${correct}</div>
                    <small>Benar</small>
                </div>
                <div style="background:#f5f5f5;border-radius:16px;padding:16px 24px;text-align:center;">
                    <div style="font-size:2rem;font-weight:bold;color:#e94646;">${total - correct}</div>
                    <small>Salah</small>
                </div>
                <div style="background:#f5f5f5;border-radius:16px;padding:16px 24px;text-align:center;">
                    <div style="font-size:2rem;font-weight:bold;color:#FFB74D;">${quiz30Score}</div>
                    <small>Skor</small>
                </div>
            </div>
            <button class="btn-action" onclick="startQuiz30('${quiz30Level}')" style="margin-right:10px;">🔄 Coba Lagi</button>
            <button class="btn-back" onclick="showPage('quizMenu')" style="margin-top:0;">🏠 Menu</button>
        </div>`;
    document.getElementById('quizNav').style.display = 'none';

    // Simpan ke Supabase
    const db = window.db;
    const u = JSON.parse(sessionStorage.getItem('skripsi_user') || '{}');
    if (u.username) {
        if (db) {
            try { await db.from('skripsi_quiz_results').insert([{ username: u.username, score: quiz30Score, total, level: quiz30Level }]); }
            catch(e) { console.warn('Gagal simpan quiz:', e.message); }
        } else {
            const h = JSON.parse(localStorage.getItem('skripsi_history') || '[]');
            h.unshift({ username: u.username, type: 'quiz', level: quiz30Level, score: quiz30Score });
            localStorage.setItem('skripsi_history', JSON.stringify(h.slice(0, 50)));
        }
    }
    if (player) saveScoreToPlayer(player, "Latihan Soal 30", quiz30Level, quiz30Score);
}
window.finishQuiz30 = finishQuiz30;

// =========================================================================
// Horizontal Scroll Handler for #mainHeader (Mouse Drag, Touch & Wheel)
// =========================================================================
(function setupHeaderScroll() {
    function init() {
        const header = document.getElementById('mainHeader');
        if (!header) return;

        // Mouse wheel horizontal scroll over header
        header.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                header.scrollLeft += e.deltaY;
            }
        }, { passive: false });

        // Click & drag to scroll (convenient on desktop / devtools)
        let isDown = false;
        let startX = 0;
        let scrollLeftPos = 0;
        let hasDragged = false;

        header.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
            isDown = true;
            hasDragged = false;
            startX = e.pageX - header.offsetLeft;
            scrollLeftPos = header.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                setTimeout(() => { hasDragged = false; }, 50);
            }
        });

        header.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            const x = e.pageX - header.offsetLeft;
            const walk = (x - startX);
            if (Math.abs(walk) > 4) {
                hasDragged = true;
                e.preventDefault();
                header.scrollLeft = scrollLeftPos - walk;
            }
        });

        // Prevent link activation when dragging
        header.addEventListener('click', (e) => {
            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

