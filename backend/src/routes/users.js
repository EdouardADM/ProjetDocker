import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET /users : liste tous les utilisateurs
router.get('/', async (req, res) => {
  const { rows } = await pool.query(
    'SELECT id, nom, email, role, created_at FROM users ORDER BY id'
  );
  res.json(rows);
});

export default router;
