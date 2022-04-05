const BASIC_API = "http://localhost:8100/api/appointment"

export const GetAllAppointment = async () => {
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
export const GetAppointmentById = async (id) => {
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

export const CreateAppointment = async (appointment) => {
    try {
        return await fetch(`${BASIC_API}`, {
            method: 'POST',
            body: JSON.stringify(appointment),
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

export const UpdateAppointment = async (id, appointment) => {
    try {
        return await fetch(`${BASIC_API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(appointment),
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
export const DeleteAppointment = async (id) => {
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
