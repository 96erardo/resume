import { SELECT_LANGUAGE } from './../actions/types';

export default function languageReducer (state = {}, action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            const { langs } = state;
            const { payload } = action;

            const selected = langs.find((l) => (
                l.id == payload.id
            ));

            return {
                ...state,
                selected: selected.iso
            }    
        default:
            break;
    }
}