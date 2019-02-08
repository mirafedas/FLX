const userCredentials = { 
    username: "User",
    password: "UserPass"
}

const adminCredentials = {
    username: "Admin",
    password: "RootPass"
}

const checkLogin = () => {
    const login = prompt("Login", "");

    if (!login) {
        alert("Cancelled");
    } else if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else if (login === userCredentials.username || login === adminCredentials.username) {
        getPassword(login);
    } else {
        alert("I don’t know you");
    }
}

const getPassword = (login) => {
    const password = prompt("Password", "");
    if (!password) {
        alert("Cancelled");
    } else if (login === userCredentials.username && password === userCredentials.password) {
        greatUser(login);
    } else if (login === adminCredentials.username && password === adminCredentials.password) {
        greatUser(login);
    }
}

const greatUser = (login) => {
    const currentTime = new Date().getHours();
    if (currentTime < 20) {
        alert(`Good day, dear ${login}!`)
    } else {
        alert(`Good evening, dear ${login}!`)
    }
}

checkLogin();