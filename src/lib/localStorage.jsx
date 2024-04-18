const getItem = (key) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key) => {
  window.localStorage.removeItem(key);
}

export { getItem, setItem, removeItem }