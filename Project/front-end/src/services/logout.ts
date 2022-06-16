export const logout = () => {
    localStorage.removeItem('user');
    return true;
};