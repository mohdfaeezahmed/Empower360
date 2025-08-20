import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// GET /api/policies -> list with filters: q, category, state, page, limit
router.get('/', async (req, res, next) => {
  try {
    const { q = '', category, state, page = 1, limit = 20, sort = 'new' } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const filters = [];
    const params = {};

    if (q) {
      filters.push('(p.title LIKE :q OR p.summary LIKE :q OR p.tags LIKE :q)');
      params.q = `%${q}%`;
    }
    if (category) {
      filters.push('c.slug = :category');
      params.category = category;
    }
    if (state) {
      filters.push('(p.state = :state OR p.state = "National")');
      params.state = state;
    }

    const where = filters.length ? ('WHERE ' + filters.join(' AND ')) : '';

    const orderBy = sort === 'alpha' ? 'p.title ASC' :
                    sort === 'popular' ? 'p.popularity DESC' :
                    'p.created_at DESC';

    const [list] = await pool.query(
      `SELECT p.id, p.title, p.summary, p.eligibility, p.benefits, p.doc_url, p.state, p.image_url,
              p.created_at, c.name as category, c.slug as category_slug
       FROM policies p
       JOIN categories c ON p.category_id = c.id
       ${where}
       ORDER BY ${orderBy}
       LIMIT :limit OFFSET :offset`, { ...params, limit: Number(limit), offset }
    );

    const [[{ total }]] = await pool.query(
      `SELECT COUNT(*) as total
       FROM policies p
       JOIN categories c ON p.category_id = c.id
       ${where}`, params
    );

    res.json({ items: list, pagination: { page: Number(page), limit: Number(limit), total } });
  } catch (e) { next(e); }
});

// GET /api/policies/:id
router.get('/:id', async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `SELECT p.*, c.name as category, c.slug as category_slug
       FROM policies p JOIN categories c ON p.category_id = c.id
       WHERE p.id = :id`, { id: req.params.id }
    );
    if (!rows.length) return res.status(404).json({ error: true, message: 'Policy not found' });
    res.json(rows[0]);
  } catch (e) { next(e); }
});

export default router;
