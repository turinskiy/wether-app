// This service provides methods to:
import { setCookie, getCookie } from './data/cookies';

const fieldSepar = '::';
const usersSepar = '(+)';//

// 1. Sign In
// 2. Sign Up
// 3. Sign Out
// 4. Check if user registered
// 5. Check is username occupied

export const checkIfUserRegistered = (username, password) => {
    // Get all users
    // Check if username exist ib DB
    // Check if the passwords are equal
    // Return result
    return true;
};

export const getAllUsers = () => {
    const usersString = getCookie('users');
    
    if(!usersString || usersString.length === 0) {
        return '';
    }

    return usersString;
}

export const registerNewUser = (user) => {
    const users = getAllUsers();
    const userToAdd = user.fName + fieldSepar + user.lName + fieldSepar + user.phone + fieldSepar + user.pass;
    const res = users && users.length > 0 
        ? users + usersSepar + userToAdd 
        : userToAdd;

    setCookie('users', res);
    // setCookie('userpass', userpass);
}
