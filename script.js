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
        if (el) el.innerHTML = "";
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
    if (id === 'gameContainer') {
         scoreBox.style.display = 'block';
    } else {
         scoreBox.style.display = 'none';
    }

    if (id === 'media') {
        initializeMultiplicationPocket();
    } else if (id === 'module') {
        showModuleMenu();
    }
    
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
    
    const container = document.getElementById("questionBox"); 
    container.innerHTML = `
        <div id="tugOfWarContainer" style="display:flex; flex-direction:column; gap:20px; width:100%;">
            
            <div style="position:relative; width:100%; height:60px; background:#ddd; border-radius:30px; overflow:hidden; border: 3px solid #999;">
                <div style="position:absolute; left:0; top:0; bottom:0; width:50%; background:#FF8A80; opacity:0.3; z-index:1;"></div>
                <div style="position:absolute; right:0; top:0; bottom:0; width:50%; background:#80D8FF; opacity:0.3; z-index:1;"></div>
                
                <div id="ropeMarker" style="position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); width:40px; height:40px; background:#333; border-radius:50%; border:4px solid white; z-index:10; transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <div style="width:200px; height:6px; background:#8D6E63; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:-1;"></div>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; font-weight:bold;">
                <span style="color:#D32F2F;">PLAYER 1 (MERAH)</span>
                <span style="color:#0288D1;">PLAYER 2 (BIRU)</span>
            </div>

            <div style="display:flex; gap:10px;">
                <div id="p1Panel" style="flex:1; background:#FFEBEE; padding:10px; border-radius:10px; border:2px solid #FFCDD2; text-align:center;">
                    <div id="p1Question" style="font-size:1.5rem; font-weight:bold; margin-bottom:10px; color:#D32F2F;">...</div>
                    <div id="p1Options" style="display:grid; grid-template-columns:1fr 1fr; gap:5px;"></div>
                </div>

                <div id="p2Panel" style="flex:1; background:#E1F5FE; padding:10px; border-radius:10px; border:2px solid #B3E5FC; text-align:center;">
                    <div id="p2Question" style="font-size:1.5rem; font-weight:bold; margin-bottom:10px; color:#0288D1;">...</div>
                    <div id="p2Options" style="display:grid; grid-template-columns:1fr 1fr; gap:5px;"></div>
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
        setTimeout(() => { alert("🏆 PLAYER 1 MENANG!"); showPage("gameMenu"); }, 300);
    } else if(ropePosition >= 90) {
        setTimeout(() => { alert("🏆 PLAYER 2 MENANG!"); showPage("gameMenu"); }, 300);
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
        btn.className = "jawabanBtn";
        btn.style.fontSize = "1rem";
        btn.style.padding = "8px";
        btn.onclick = () => {
            if(o === correct) {
                playSound('correct');
                if(playerSide === 'p1') ropePosition -= 10; 
                else ropePosition += 10; 
                updateRopeVisual();
                nextRaceQuestion(playerSide); 
            } else {
                playSound('wrong');
                btn.style.background = "#ccc"; 
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

/* -------------------------------------
    MODUL INTERAKTIF 📘
-------------------------------------*/
const activityContainerId = "moduleContent"; 

function showModuleMenu(){
    const container = document.getElementById(activityContainerId);
    if (!container) return;
    container.innerHTML = `
        <h2 style="color:#5C8D89; text-align:center;">Pilih Aktivitas Modul Interaktif</h2>
        <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px; align-items:center;">
            <button class="jawabanBtn" onclick="startActivity('multiplicationConcept')">Aktivitas 1: Tabel Perkalian (1-10)</button>
            <button class="jawabanBtn" onclick="startActivity('likertSurvey')">Aktivitas 2: Angket Pemahaman</button>
        </div>
    `;
}
window.showModuleMenu = showModuleMenu;

function startActivity(activityId) {
    const container = document.getElementById(activityContainerId);
    if (!container) return;

    if (activityId === 'multiplicationConcept') {
        renderMultiplicationTableSelector(container);
    } else if (activityId === 'likertSurvey') {
        renderSurvey(container);
    }
}
window.startActivity = startActivity; 

// --- AKTIVITAS 1: TABEL PERKALIAN 1-10 ---
function renderMultiplicationTableSelector(container) {
    container.innerHTML = `
        <h2 style="color:#5C8D89; text-align:center;">Tabel Perkalian (1 - 10)</h2>
        <p style="text-align:center; margin-bottom: 20px;">Pilih angka untuk melihat tabel perkaliannya.</p>
        <div id="tableSelector" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:20px;">
            ${Array(10).fill(0).map((_, i) => 
                `<button class="jawabanBtn" style="flex: 0 0 10%; padding:10px; font-size:1.2rem;" 
                    data-factor="${i + 1}" onclick="selectMultiplicationTable(${i + 1})">${i + 1}</button>`
            ).join('')}
        </div>
        <div id="multiplicationTableOutput" style="text-align:center; font-size:1.2em; border: 2px solid #ccc; padding: 20px; border-radius: 8px; background-color: #fff;">
            Pilih angka di atas untuk melihat tabel perkalian.
        </div>
        <button class="btn-back" onclick="showModuleMenu()" style="display:block; margin: 20px auto;">Kembali ke Menu Modul</button>
    `;
    selectMultiplicationTable(currentMultiplicationTable);
}

function selectMultiplicationTable(factor) {
    currentMultiplicationTable = factor;
    const output = document.getElementById("multiplicationTableOutput");
    if (!output) return;

    document.querySelectorAll('#tableSelector button').forEach((btn) => {
        if (parseInt(btn.getAttribute('data-factor')) === factor) {
            btn.style.backgroundColor = '#A7D7C5'; 
            btn.style.color = 'white';
        } else {
            btn.style.backgroundColor = 'white'; 
            btn.style.color = '#333';
        }
    });

    let tableHtml = `<h3 style="color:#5C8D89; margin-bottom:15px;">Tabel Perkalian ${factor}</h3>`;
    tableHtml += `<ul style="list-style:none; padding:0; max-width: 300px; margin: 10px auto; text-align: left; font-size: 1.1em;">`;
    for (let i = 1; i <= 10; i++) {
        tableHtml += `<li style="padding: 5px; border-bottom: 1px dashed #eee;">${factor} × ${i} = <strong style="float:right;">${factor * i}</strong></li>`;
    }
    tableHtml += `</ul>`;
    output.innerHTML = tableHtml;
}
window.selectMultiplicationTable = selectMultiplicationTable;


// --- AKTIVITAS 2: ANGKET PEMAHAMAN ---
const surveyQuestions = [
    { id: 'q1', text: "Saya merasa perkalian itu mudah dipahami." },
    { id: 'q2', text: "Saya merasa percaya diri saat mengerjakan soal perkalian." },
    { id: 'q3', text: "Saya suka belajar perkalian menggunakan game interaktif." },
    { id: 'q4', text: "Saya tahu bahwa perkalian adalah penjumlahan berulang." },
    { id: 'q5', text: "Saya ingin lebih banyak latihan menggunakan modul seperti ini." },
];
const likertLabels = { 1: 'Sangat Tidak Setuju', 2: 'Tidak Setuju', 3: 'Netral', 4: 'Setuju', 5: 'Sangat Setuju' };

function renderSurvey(container) {
    container.innerHTML = `
        <h2 style="color:#5C8D89; text-align:center;">Angket Pemahaman Perkalian</h2>
        <p style="text-align:center;">Berikan penilaian Anda dari 1 s.d 5.</p>
        <div id="surveyForm" style="margin-top:20px; border: 1px solid #A7D7C5; padding: 15px; border-radius: 8px;">
        </div>
        <button class="jawabanBtn" id="submitSurveyBtn" onclick="submitSurvey()" style="display:block; margin: 20px auto; background-color: #5C8D89; color: white;">Kirim Jawaban</button>
        <div id="surveyResult" style="margin-top:20px; text-align:center; color:#28a745; font-weight: bold;"></div>
        <button class="btn-back" onclick="showModuleMenu()" style="display:block; margin: 20px auto;">Kembali ke Menu Modul</button>
    `;

    const form = document.getElementById("surveyForm");
    surveyQuestions.forEach(q => {
        const item = document.createElement('div');
        item.className = 'survey-item';
        item.style.marginBottom = '20px';
        item.style.borderBottom = '1px dashed #ccc';
        item.style.paddingBottom = '10px';
        item.innerHTML = `
            <p><strong>${q.id.toUpperCase()}. ${q.text}</strong></p>
            <div style="display:flex; justify-content:space-between; margin-top:10px;">
                ${[1, 2, 3, 4, 5].map(val => `
                    <label style="flex: 1; text-align: center; cursor: pointer;">
                        <input type="radio" name="${q.id}" value="${val}" required onchange="updateSurveyAnswer('${q.id}', ${val})" 
                            ${surveyAnswers[q.id] === val ? 'checked' : ''}>
                        <div style="font-size: 0.8em; margin-top: 5px;">${val}</div>
                    </label>
                `).join('')}
            </div>
        `;
        form.appendChild(item);
    });
}

function updateSurveyAnswer(qId, value) {
    surveyAnswers[qId] = parseInt(value);
}
window.updateSurveyAnswer = updateSurveyAnswer;

function submitSurvey() {
    if (Object.keys(surveyAnswers).length !== surveyQuestions.length) {
        alert("Mohon jawab semua pertanyaan sebelum mengirim angket.");
        return;
    }
    const resultEl = document.getElementById("surveyResult");
    if(resultEl) resultEl.innerHTML = "✅ Angket Berhasil Dikirim! Terima kasih.";
    
    document.querySelectorAll('#surveyForm input').forEach(input => input.disabled = true);
    document.getElementById('submitSurveyBtn').disabled = true;
}
window.submitSurvey = submitSurvey;


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
        showAuthAlert('regErr', 'Supabase belum terhubung! ' + (window.supabaseError || 'Isi ANON KEY di config.js'), 'error');
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
        showAuthAlert('loginErr', 'Supabase belum terhubung! ' + (window.supabaseError || 'Isi ANON KEY di config.js'), 'error');
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

    // 10 soal ANGKA
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, max), b = randInt(min, max);
        questions.push({ type: 'angka', a, b, correct: a * b });
    }

    // 10 soal CERITA
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, max), b = randInt(min, max);
        const item = QUIZ_EMOJI_ITEMS[randInt(0, QUIZ_EMOJI_ITEMS.length - 1)];
        const tmpl = QUIZ_STORY_TEMPLATES[randInt(0, QUIZ_STORY_TEMPLATES.length - 1)];
        const text = tmpl.replace(/{a}/g, a).replace(/{b}/g, b).replace(/{item}/g, item.name);
        questions.push({ type: 'cerita', a, b, correct: a * b, text, emoji: item.emoji });
    }

    // 10 soal GAMBAR (emoji visual grid)
    for (let i = 0; i < 10; i++) {
        const a = randInt(min, Math.min(max, 5));
        const b = randInt(min, Math.min(max, 5));
        const item = QUIZ_EMOJI_ITEMS[randInt(0, QUIZ_EMOJI_ITEMS.length - 1)];
        questions.push({ type: 'gambar', a, b, correct: a * b, emoji: item.emoji, name: item.name });
    }

    return shuffle(questions);
}

function startQuiz30(level) {
    quiz30Level = level;
    quiz30Questions = buildQuiz30(level);
    quiz30Index = 0;
    quiz30Score = 0;
    quiz30Answers = new Array(30).fill(null);
    showPage('quiz');
    document.getElementById('quizTitle').textContent = `📝 Latihan Soal — ${level.toUpperCase()}`;
    renderQuiz30Question();
}
window.startQuiz30 = startQuiz30;

function renderQuiz30Question() {
    const q = quiz30Questions[quiz30Index];
    const total = quiz30Questions.length;
    document.getElementById('quizProgress').textContent = `Soal ${quiz30Index + 1} / ${total}`;
    document.getElementById('quizScore').textContent = `Skor: ${quiz30Score}`;

    document.getElementById('prevBtn30').style.display = quiz30Index > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn30').style.display = quiz30Index < total - 1 ? 'inline-block' : 'none';
    document.getElementById('finishQuizBtn30').style.display = quiz30Index === total - 1 ? 'inline-block' : 'none';

    const { min, max } = getLevelRange30(quiz30Level);
    const opts = generateOpts30(q.correct, min * min, max * max);

    let html = `<div class="quiz30-card">`;
    html += `<div class="quiz30-num">Soal ${quiz30Index + 1} dari ${total}</div>`;

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
        // Grid emoji visual — tampilkan a baris × b kolom
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
    html += `</div></div>`;

    document.getElementById('quizContainer').innerHTML = html;
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
}
window.answerQuiz30 = answerQuiz30;

function nextQuiz30() {
    if (quiz30Index < quiz30Questions.length - 1) { quiz30Index++; renderQuiz30Question(); }
}
window.nextQuiz30 = nextQuiz30;

function prevQuiz30() {
    if (quiz30Index > 0) { quiz30Index--; renderQuiz30Question(); }
}
window.prevQuiz30 = prevQuiz30;

async function finishQuiz30() {
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
