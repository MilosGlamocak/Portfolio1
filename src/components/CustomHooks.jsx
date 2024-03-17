import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue; 
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;