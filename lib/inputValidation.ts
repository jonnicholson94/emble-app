
export const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
export const passwordRegex = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/)

export const validateEmail = (value: string): string => {

    if (!emailRegex.test(value)) {
        return 'Enter a valid email address'
    } else {
        return ''
    }
}

export const validatePassword = (value: string): string => {
    if (!passwordRegex.test(value)) {
        return 'Your password must be at least 6 characters, contain a number and a special character'
    } else {
        return ''
    }
}

export const validateLength = (value: string): string => {
    if (value.length < 1) {
        return 'Enter a title for your task'
    } else {
        return ''
    }
}