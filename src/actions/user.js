export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

export function updateUserName(data) {
    return {
        type: UPDATE_USER_NAME,
        payload: data
    };
}