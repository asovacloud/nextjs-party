import { Provider } from 'react-redux';
import { useStore } from '../store';

import 'materialize-css/dist/css/materialize.min.css';
import '../styles/app.scss'

export default function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
};