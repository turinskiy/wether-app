// This service provides methods to:
import { setCookie, getCookie } from './data/cookies';

// 1. Sign In
// 2. Sign Up
// 3. Sign Out
// 4. Check if user registered
// 5. Check is username occupied

// (function () {

// })();

export const checkIfUserRegistered = (username, password) => {
    // Get all users
    // Check if username exist ib DB
    // Check if the passwords are equal
    // Return result
    return true;
};

export const getAllUsers = () => {
    return getCookie('users');
}

export const saveUser = (username, userlastname, userphone, userpass) => {
    // Save user to cookies
    //
    // 1. Get all users from cookie
    const users = getAllUsers();
    const userToAdd = username + '::' + userlastname + '::' + userphone + '::' + userpass;

    debugger
    // 2. 
    setCookie('users', users + '(+)' + userToAdd);
    // setCookie('userpass', userpass);
}
