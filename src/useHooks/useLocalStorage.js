import { useEffect } from "react";

export const setItem = (itemName, data) => localStorage.setItem(itemName, data);

export const clearItem = (itemName) => localStorage.removeItem(itemName);

export const getItem = (itemName) => {
  const item = localStorage.getItem(itemName);
  return /\d/.test(item) ? +item : item;
};

const useLocalStorage = (itemName, data) => {
  useEffect(() => {
    console.log("storage set");
    setItem(itemName, data);
  }, [data, itemName]);
};

export default useLocalStorage;
