// const BASIC_API = process.env.NODE_ENV === 'production' ? "https://team-ware.herokuapp.com/register" : 'http://localhost:8100/register';
const BASIC_API = "http://localhost:8100/api/user"

export const GetAll = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .catch(err => { return err })
    } catch (error) {
        return error
    }
}
export const GetUserById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const registerNewUser = async (user) => {

    return await fetch(`${BASIC_API}/register`, {
        method: 'POST', 
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .catch((err) => { return err });
}
export const loginUser = async (user) => {
    return await fetch(`${BASIC_API}/login`, {
        method: 'POST',
        body: JSON.stringify(user), 
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .catch((err) => { return err });
}
export const UpdateUser = async (id, user) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => response.json())
            .catch(reject => console.log(reject))
    } catch (error) {
        return error
    }

}
export const DeleteUser = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
