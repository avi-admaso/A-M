const BASIC_API = "http://localhost:8100/api/business"

export const GetAllBusiness = async () => {
    try {
        return await fetch(`${BASIC_API}`)
            .then(res => res.json())
            .catch(err => { return err })
    } catch (error) {
        return error
    }
}
export const GetBusinessById = async (id) => {
    try {
        return await fetch(`${BASIC_API}/${id}`)
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }
}

export const CreateBusiness = async (Business) => {
    try {
        return await fetch(`${BASIC_API}`, {
            method: 'POST',
            body: JSON.stringify(Business),
            headers: {
                'Content-Type': 'application/json'
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
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
