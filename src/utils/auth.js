import { STORAGE_KEYS } from "../constants/storageKeys";

// Save Access Token
export const saveToken = (token) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

// Get Access Token
export const getToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

// Remove Access Token
export const removeToken = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};

// Save User
export const saveUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

// Get User
export const getUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.USER);

  return user ? JSON.parse(user) : null;
};

// Remove User
export const removeUser = () => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

// Clear Authentication
export const clearAuth = () => {
  removeToken();
  removeUser();
};