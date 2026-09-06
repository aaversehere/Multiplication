// ============================================================
// PLAY MATCH MULTIPLICATION — Supabase Configuration
// ============================================================
// INSTRUKSI:
// 1. Buka https://supabase.com → masuk ke project kamu
// 2. Klik Settings → API
// 3. Salin "Project URL" dan "anon/public key"
// 4. Ganti dua nilai di bawah ini
// ============================================================

const SUPABASE_URL      = 'https://xwfxyrrbmeihtgbotdnf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Znh5cnJibWVpaHRnYm90ZG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2OTUxNjYsImV4cCI6MjEwNDI3MTE2Nn0.GURYaKBUXD4UTEdSbfK6UHI5W1H7WdzQINbF-tr5Jdc';

const _lib = window.supabase || window.supabaseJs;
if (!_lib || typeof _lib.createClient !== 'function') {
    console.warn('[MathWorld] Library Supabase tidak ditemukan. Menggunakan penyimpanan lokal.');
    window.db = null;
} else if (SUPABASE_ANON_KEY.includes('TEMPELKAN')) {
    console.warn('[MathWorld] SUPABASE_ANON_KEY belum diisi dengan key project xwfxyrrbmeihtgbotdnf.');
    window.db = null;
} else {
    try {
        window.db = _lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('[MathWorld] Supabase terhubung ke:', SUPABASE_URL);
    } catch (e) {
        console.error('[MathWorld] Inisialisasi Supabase gagal:', e);
        window.db = null;
    }
}
