class HttpReq {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    postRequest = async (endPoint, data) => {
        try {
            const res = await fetch(this.baseUrl + endPoint, {
                method: 'POST',
                body: data,
                headers: {},
            })
            const json = await res.json()
            return json
        } catch (e) {
            return e
        }
    }
}

export class CloudinaryService {
    constructor(baseUrl) {
        this.http = new HttpReq(baseUrl)
    }

    uploadImage = async (data) => {
        try {
            console.log('upload', data)
            const result = await this.http.postRequest(`/image/upload`, data)
            return result.data
        } catch (e) {
            console.log(e)
            return e
        }
    }
}
