export default function form(state = {agree: false}, action) {
    switch (action.type) {
        case 'UPDATE_NAME':
            return {...state, name: action.name};
        case 'UPDATE_AGREE':
            return {...state, agree: action.agree};
        default:
            return state;
    }
}