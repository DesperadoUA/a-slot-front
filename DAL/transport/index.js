import Axios from "./axios"
import NativeFetch from "./nativeFetch"

const TransportMap = {
    nativeFetch: NativeFetch,
    axios: Axios
}

export default TransportMap