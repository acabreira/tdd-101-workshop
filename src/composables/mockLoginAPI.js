const users = [
    {
        username: 'Admin',
        password: 'password',
        permissions: 'Admin'
    },
    {
        username: 'Employee',
        password: 'password',
        permissions: 'Employee'
    }
]

const findUser = (username) => {
    return users.find(user => {
        return user.username === username
    })
}

export default async function (username, password) {
    let result;
    const user = findUser(username)

    if (!username || !password) {
        result = {
            success: false,
            msg: 'Username or password missing',
        }
    } else if (!user) {
        result = {
            success: false,
            msg: 'Unable to find user',
        }
    } else if (user.password !== password) {
        result = {
            success: false,
            msg: 'Incorrect password'
        }
    } else {
        result = {
            success: true
        }
    }

    return new Promise(resolve =>
        setTimeout(() => {
            resolve(result)
        }, 500))
}