import pg from 'pg';

// Un "pool" garde plusieurs connexions ouvertes et les réutilise :
// plus rapide que d'ouvrir une nouvelle connexion à chaque requête.
export const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
