import '../styles/globals.css'
import { CurrencyDataProvider } from '../contexts/currency-data.context.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <CurrencyDataProvider>
      <Component {...pageProps} />
    </CurrencyDataProvider>
  )
}

export default MyApp
