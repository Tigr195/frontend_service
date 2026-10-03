export const $ = id => document.getElementById(id);
export const setError = (id, msg) => { $(id).textContent = msg || ''; };
export const extractToken = s => {
  s = s.trim();
  try { return new URL(s).searchParams.get('invite') || s; } catch { return s; }
};