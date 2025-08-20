import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET /api/categories -> list categories with counts
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await pool.query(`
      SELECT c.id, c.slug, c.name, c.description, c.icon,
             COUNT(p.id) as policy_count
      FROM categories c
      LEFT JOIN policies p ON p.category_id = c.id
      GROUP BY c.id
      ORDER BY c.name;
    `);
    res.json(rows);
  } catch (e) { next(e); }
});

export default router;
