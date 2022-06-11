import { useState } from "react";

function useLocalStorage<T>(key:string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value: T) => {
    try {
      let valueToStore = value instanceof Function ? value(storedValue) : value;
      valueToStore = valueToStore === undefined ? null : valueToStore;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  const clearValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue ?? (null as unknown as T));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue, clearValue] as const;
}

export default useLocalStorage;