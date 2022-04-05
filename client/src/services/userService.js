// const BASIC_API = process.env.NODE_ENV === 'production' ? "https://team-ware.herokuapp.com/register" : 'http://localhost:8100/register';
const BASIC_API = "http://localhost:8100/api/users"

export const GetAll = async () => {
    try {
        return await fetch(`${BASIC_API}`,options)
            .then(res => res.json())
            .catch(err => { return err })
    } catch (error) {
        return error
    }
}
export const GetUserById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}
export const registerNewUser = async (user) => {

try {
       return await fetch(`${BASIC_API}/register`, {
        method: 'POST', 
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
       },
    })
        .then(res => res.json())
        .catch((err) => { return err }); 
} catch (error) {
    
}

}
export const loginUser = async (user) => {
    try {
        return await fetch(`${BASIC_API}/login`, {
        method: 'POST',
        body: JSON.stringify(user), 
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .catch((err) => { return err });    
    } catch (error) {
        
    }

}
export const UpdateUser = async (id, user) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
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
