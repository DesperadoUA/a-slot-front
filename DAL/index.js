import config from '../config'
import transport from './transport'
export default class Builder {
    #listAction = ['get', 'add', 'update', 'delete']
    #options = {
            data: {},
            action: 'get',
            postType: '',
            urlId: ''
        }
    #data = {
        status: 'ok',
        data: []
    }
    #transport = transport[config.API_TRANSPORT]
    setPostType(postType) {
        this.#options.postType = postType
        return this
    }
    setAction(action) {
        this.#options.action = this.#listAction.includes(action) ? action : 'get'
        return this
    }
    setUrlId(urlId) {
        this.#options.urlId = urlId
        return this
    }
    setData(data) {
        this.#options.data = data
        return this
    }
    async get() {
            const transport = new this.#transport()
            const response = await transport.get(this.#options)
            this.#data.status = response.status
            this.#data.data = response.data
            return this.#data
        }
    }