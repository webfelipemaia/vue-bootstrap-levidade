import {createStore} from 'vuex'
import {notifications} from '../components/notify'
const store = createStore({
    modules: {
        notifications
    }
});

export default store;