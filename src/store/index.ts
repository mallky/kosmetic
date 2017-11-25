import { createStore } from 'redux';
import rootReducer from '../redux';
import { FieldState } from '../redux/field';
import { ApplicationState } from '../redux/application';

export interface IStore {
    field: FieldState,
    application: ApplicationState
}

const configureStore = (initialState?: IStore) => {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};

export default configureStore;