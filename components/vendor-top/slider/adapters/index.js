import DefaultAdapter from "./default"
import GameAdapter from "./gameAdapter"
const Adapters = {
   default: DefaultAdapter,
   gameAdapter: GameAdapter
}
export default Adapters

/**
 *  {
 *    title: String,
 *    permalink: String,
 *    thumbnail: String,
 *    ref: Array[String]
 *  }
 */