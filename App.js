import { StatusBar } from 'expo-status-bar';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigations/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
