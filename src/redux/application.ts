/**
 * State
 */
export interface ApplicationState {
    section: string;
}

const initialState: ApplicationState = {
    section: ''
};

/**
 * Constants
 */
const SET_SECTION = 'application/SET_SECTION';
type SET_SECTION = typeof SET_SECTION;

/**
 * Actions
 */
export interface SetAction {
    type: SET_SECTION;
    section: string;
}

type ApplicationAction = SetAction;

/**
 * Reducer
 */
export default function reducer(state: ApplicationState = initialState, action: ApplicationAction): ApplicationState {
    switch (action.type) {
        case SET_SECTION:
            return {
                ...state,
                section: action.section
            };
        default:
            return state;
    }
}

/**
 * Action Creators
 */
export const setSection= (section: string): SetAction => ({
    type: SET_SECTION,
    section
});
