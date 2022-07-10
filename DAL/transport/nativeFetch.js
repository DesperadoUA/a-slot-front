import config from "../../config"
export default class NativeFetch {
        #BASE_API_URL = config.API_PATH[config.NODE_ENV]
        #API_URL = ''
        #listActionMethods = {
            get: 'GET',
            add: 'POST',
            update: 'PATCH',
            delete: 'DELETE'
        }
        #data = {
            method: 'POST', 
            body: '',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        #response = {
            status: 'ok',
            data: {}
        }
        async get(options) {
            this.setEndpoint(options)
            this.setData(options)
            if(this.#data.method === 'GET') {
                const response = await fetch(this.#API_URL)
                                .then(resp => (resp.ok)
                                    ? resp.json()
                                    : Promise.reject('is not ok: ' + resp.status)
                                )
                                .catch((err) => {
                                    console.warn(err)
                                    this.#response.status = 'error'
                                })
                if(response) {
                    this.#response.data = response
                    this.#response.status = response.confirm
                } 
                } 
            else {
                const response = await fetch(this.#API_URL, this.#data)
                    .then(resp => (resp.ok)
                        ? resp.json()
                        : Promise.reject('is not ok: ' + resp.status)
                    )
                    .catch((err) => {
                        console.warn(err)
                        this.#response.status = 'error'
                    })
                if(response) {
                    this.#response.data = response
                } 
            }
            return this.#response
        }
        setData(data) {
            if(data.data) this.#data.body = JSON.stringify(data.data)
            if(data.action) {
                this.#data.method = data.action in this.#listActionMethods 
                                    ? this.#listActionMethods[data.action]
                                    : 'GET'
            } 
        }
        setEndpoint(options) {
            const PARTS_URL = []
            if(options.postType) PARTS_URL.push(options.postType)
            if(options.urlId) PARTS_URL.push(options.urlId)
            this.#API_URL = this.#BASE_API_URL + '/' + PARTS_URL.join('/')
        } 
    }