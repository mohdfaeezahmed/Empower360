import fs from 'fs';
import { pool } from './db.js';

async function run() {
  try {
    const init = fs.readFileSync(new URL('./models/init.sql', import.meta.url));
    const seed = fs.readFileSync(new URL('./models/seed.sql', import.meta.url));
    console.log('Running schema...');
    await pool.query(init.toString());
    console.log('Seeding data (this may take a few seconds)...');
    await pool.query(seed.toString());
    console.log('Done.');
    process.exit(0);
  } catch (e) {
    console.error('Seed error:', e);
    process.exit(1);
  }
}
run();
