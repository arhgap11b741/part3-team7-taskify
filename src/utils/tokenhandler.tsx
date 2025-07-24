export const setAccessToken = (token: string): void => {
  sessionStorage.setItem('accessToken', token);
};

export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('accessToken');
};

export const removeAccessToken = (): void => {
  sessionStorage.removeItem('accessToken');
};
