-- ============================================================
-- PLAY MATCH MULTIPLICATION - Supabase Database Setup
-- Cocok dengan script.js versi terbaru
-- Jalankan di Supabase SQL Editor
-- Aman dijalankan berulang kali (idempotent)
-- ============================================================

-- LANGKAH 1: BUAT SEMUA TABEL

-- Tabel akun pengguna
-- Dipakai: doRegister(), doLogin(), doVerify(), doResetPw()
CREATE TABLE IF NOT EXISTS skripsi_users (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    fullname   TEXT NOT NULL,
    username   TEXT UNIQUE NOT NULL,
    password   TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel skor game
-- Dipakai: saveScoreToPlayer() - game1/game2/game3/game4
CREATE TABLE IF NOT EXISTS skripsi_scores (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username   TEXT NOT NULL REFERENCES skripsi_users(username) ON DELETE CASCADE,
    game_type  TEXT NOT NULL,
    level      TEXT NOT NULL,
    score      INTEGER NOT NULL DEFAULT 0,
    played_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel hasil latihan soal 30 soal
-- Dipakai: finishQuiz30()
CREATE TABLE IF NOT EXISTS skripsi_quiz_results (
    id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username   TEXT NOT NULL REFERENCES skripsi_users(username) ON DELETE CASCADE,
    score      INTEGER NOT NULL,
    total      INTEGER NOT NULL DEFAULT 30,
    level      TEXT NOT NULL,
    played_at  TIMESTAMPTZ DEFAULT NOW()
);

-- LANGKAH 2: AKTIFKAN ROW LEVEL SECURITY

ALTER TABLE skripsi_users        ENABLE ROW LEVEL SECURITY;
ALTER TABLE skripsi_scores       ENABLE ROW LEVEL SECURITY;
ALTER TABLE skripsi_quiz_results ENABLE ROW LEVEL SECURITY;

-- LANGKAH 3: HAPUS POLICY LAMA, BUAT BARU

DO $$
BEGIN
    DROP POLICY IF EXISTS "allow_all_skripsi_users"  ON skripsi_users;
    DROP POLICY IF EXISTS "allow_all_skripsi_scores" ON skripsi_scores;
    DROP POLICY IF EXISTS "allow_all_skripsi_quiz"   ON skripsi_quiz_results;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

CREATE POLICY "allow_all_skripsi_users"  ON skripsi_users        FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_skripsi_scores" ON skripsi_scores       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_skripsi_quiz"   ON skripsi_quiz_results FOR ALL USING (true) WITH CHECK (true);

