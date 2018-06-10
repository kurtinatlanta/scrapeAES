export default function fixPool(pool) {
  if (pool) {
    return pool.replace('Pool', '').trim();
  }
  else {
    return pool;
  }
}
