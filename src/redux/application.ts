/**
 * State
 */
export interface ApplicationState {
    section: string;
    idForScroll: string;
}

const initialState: ApplicationState = {
    section: '',
    idForScroll: ''
};

/**
 * Constants
 */
const SET_SECTION = 'application/SET_SECTION';
type SET_SECTION = typeof SET_SECTION;

const SET_ID = 'application/SET_ID';
type SET_ID = typeof SET_ID;

/**
 * Actions
 */
export interface SetAction {
    type: SET_SECTION;
    section: string;
}

export interface SetId {
    type: SET_ID;
    idForScroll: string;
}

type ApplicationAction = SetId | SetAction;
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
        case SET_ID:
            return {
                ...state,
                idForScroll: action.idForScroll
            };
        default:
            return state;
    }
}

/**
 * Action Creators
 */
export const setSection = (section: string): SetAction => ({
    type: SET_SECTION,
    section
});

export const setId = (idForScroll: string): SetId => ({
    type: SET_ID,
    idForScroll
});
