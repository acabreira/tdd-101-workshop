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

export default async function (username, password) {
    let result;
    const user = users.find(user => {
        return user.username === username
    })

    if (!username || !password) {
        result = {
            success: false,
            msg: 'Username or password missing',
        }
    } else if (!user) {
        result = {
            success: false,
            msg: 'Unable to find a username with that name',
        }
    } else if (user.password !== password) {
        result = {
            success: false,
            msg: 'Incorrect password'
        }
    } else {
        result = {
            success: true,
            permission: user.permissions
        }
    }

    return new Promise(resolve =>
        setTimeout(() => {
            resolve(result)
        }, 500))
}