
export function saveStorage(key, value) {
  let v = JSON.stringify(value);
  sessionStorage[key] = v;
}

export function getStorage(key) {
  const v = sessionStorage[key];
  return v ? JSON.parse(v) : null;
}

export function removeStorage(key) {
  sessionStorage.removeItem(key);
}

export function signOut() {
  sessionStorage.removeItem('token');
}

export function isLogin() {
  return !!sessionStorage.getItem('token');
}