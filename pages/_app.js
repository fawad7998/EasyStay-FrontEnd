import '/styles/globals.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/slick.css';
import '../public/assets/css/magnific-popup.css';
import '../public/assets/css/flatpicker.css';
import '../public/assets/css/intlTelInput.css';
import '../public/assets/css/nice-select.css';
import '../public/assets/css/style.css';
import {Provider as ReduxProvider} from 'react-redux';
import {store, persistor} from 'src/redux/store';

export default function App({Component, pageProps}) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
