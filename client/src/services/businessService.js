const BASIC_API = "http://localhost:8100/api/buisiness"

export const GetAllBusiness = async () => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}`,options)
            .then(res => res.json())
            .catch(err => { return err })
    } catch (error) {
        return error
    }
}
export const GetBusinessById = async (id) => {
    let options ={
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")} `
        }
    }
    try {
        return await fetch(`${BASIC_API}/${id}`,options)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const AddBusiness = async (Business,id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: 'POST',
            body: JSON.stringify(Business),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            },
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const UpdateBusiness = async (id, Business) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(Business),
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.log(reject))
    } catch (error) {
        return error
    }

}
export const DeleteBusiness = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")} `
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
