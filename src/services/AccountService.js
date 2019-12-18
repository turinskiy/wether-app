// This service provides methods to:
import { setCookie, getCookie } from './data/cookies';

const fieldSepar = '::';
const usersSepar = '(+)';//

// 1. Sign In
// 2. Sign Up
// 3. Sign Out
// 4. Check if user registered
// 5. Check is username occupied

export const isNameOcupied = (wantedUserName) => {
    let users ='';

    if(users.length === 0) {
        return false;
    }

    const findName = (element) => element.fName === wantedUserName;

    return users.some(findName);
}

export const getUserIfRegistered = (username, password) => {
    console.log(username, password);
    const users = getAllUsersObject();
    console.log(users);
    const findUser = (element) => element.fName.toLowerCase() === username.toLowerCase() && element.pass === password;

    return users.find(findUser);
};

const getAllUsersObject = () => {
    let usersString = getAllUsersString();
    let usersParts = usersString.split(usersSepar);

    return usersParts.map((usersPart) => {
        console.log(usersPart);
        let userParts = usersPart.split(fieldSepar);
        return {
            fName:  userParts[0],
            lName:  userParts[1],
            phone:  userParts[2],
            pass:   userParts[3]
        }
    })
}

export const getAllUsersString = () => {
    const usersString = getCookie('users');
    
    if(!usersString || usersString.length === 0) {
        return '';
    }

    return usersString;
}

export const registerNewUser = (user) => {
    const users = getAllUsersString();
    const userToAdd = user.fName + fieldSepar + user.lName + fieldSepar + user.phone + fieldSepar + user.pass;
    const res = users && users.length > 0 
        ? users + usersSepar + userToAdd 
        : userToAdd;

    setCookie('users', res);
    // setCookie('userpass', userpass);
}
