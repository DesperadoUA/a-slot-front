import axios from 'axios'
import config from '../../config'
export default class Axios {
    #BASE_API_URL = config.API_PATH[config.NODE_ENV]
    #API_URL = ''
    #STATUS_CODE = {
        get: 200,
        delete: 200,
        post: 201,
        patch: 200
    }
    #listActionMethods = {
        get: 'get',
        add: 'post',
        update: 'patch',
        delete: 'delete',
    }
    #data = {}
    #method = 'get'
    #response = {
        status: 'ok',
        data: {}
    }
    async get(options) {
        this.setEndpoint(options)
        this.setData(options)
        if(this.#method === 'get' || this.#method === 'delete') {
            const response = await axios[this.#method](this.#API_URL)
            this.setResponse(response)
        } else {
            const response = await axios[this.#method](this.#API_URL, this.#data)
            this.setResponse(response)
        }
        return this.#response
    }
    setData(data) {
        if(data.data) this.#data = data.data
        if(data.action) {
            this.#method = data.action in this.#listActionMethods 
                                ? this.#listActionMethods[data.action]
                                : 'get'
        } 
    }
    setEndpoint(options) {
        const PARTS_URL = []
        if(options.postType) PARTS_URL.push(options.postType)
        if(options.urlId) PARTS_URL.push(options.urlId)
        this.#API_URL = this.#BASE_API_URL + '/' + PARTS_URL.join('/')
    } 
    setResponse(response){
        this.#response.status = response.status === this.#STATUS_CODE[this.#method] ? 'ok' : 'error'
        if(response.status === this.#STATUS_CODE[this.#method]) this.#response.data = response.data
    }
}