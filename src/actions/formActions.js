export function updateName(name) {
    return {
        type: 'UPDATE_NAME',
        name
    }
}
export function updateAgree(agree) {
    return {
        type: 'UPDATE_AGREE',
        agree
    }
}

export default { updateName, updateAgree };