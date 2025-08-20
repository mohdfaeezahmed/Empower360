export function errorHandler(err, req, res, next) {
  console.error('[ERROR]', err);
  const status = err.status || 500;
  res.status(status).json({ error: true, message: err.message || 'Internal Server Error' });
}
