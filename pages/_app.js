import '../styles/globals.css'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import react from 'react'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
          <Component {...pageProps} />
         </Provider>
}

const makeStore = () => store
export default withRedux(makeStore)(MyApp)