-- Création de la table des utilisateurs
-- Exécuté automatiquement par PostgreSQL au PREMIER démarrage (volume vide)

CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  nom         VARCHAR(100) NOT NULL,
  email       VARCHAR(255) NOT NULL UNIQUE,
  role        VARCHAR(20)  NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);
