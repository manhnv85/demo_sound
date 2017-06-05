import Home from '../screens/Home';
import User from '../screens/User';
import Detail from '../screens/Detail';
import Menu from '../screens/Menu';
import Quiz from '../screens/Quiz';
import App from './app';
import {StackNavigation} from 'react-navigation';

const Routes = {
    Home: {screen: App},
    Detail: {screen: Detail}
}

export default Routes;