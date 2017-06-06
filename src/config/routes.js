import App from '../App';
import Search from '../components/Search';
import Details from '../components/Details';
import VideoPlayerView from '../components/VideoPlayerView';

import {StackNavigator} from 'react-navigation';

const Routes = {
    Home: {
        screen: App,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            //header: null
        }
    },
    Video: {
        screen: VideoPlayerView,
        navigationOptions: {
            //header: null
        }
    }
}

export default Routes;
