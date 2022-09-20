export interface ValidationMessages {
    field: string,
    messages: Array<string>
}

export const isFilled = (text: string|null|undefined) => {
    if(text !== undefined && text !== null && text.length > 0) {
        return true;
    }
    return false;
};

export const isLongerThan = (text: string|null|undefined, length: number) => {
    if(text && text.length >= length) {
        return true;
    }
    return false;
};

export const isEmailValid = (email: string|null|undefined) => {
    if(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }
};

export const isPasswordMatching = (password: string|null|undefined, confirm: string|null|undefined) => {
    if(isFilled(password) && isFilled(confirm)) {
        if(password === confirm) {
            return true;
        }
        return false;
    }
    return false;
};