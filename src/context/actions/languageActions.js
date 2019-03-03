import { SELECT_LANGUAGE } from './types';

export const selectLanguage = (id) => ({
    type: SELECT_LANGUAGE,
    payload: { id }
});