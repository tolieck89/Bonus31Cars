const signInValidators = {
    login: {
        regExp: /^\w{4,10}$/,
        errorMessage: 'Login is incorrect',
        errorElementSelector: '.login-error',
    },
    password: {
        regExp: /^.{5,10}$/,
        errorMessage: 'Password is incorrect',
        errorElementSelector: '.password-error',
    },
};

const carValidator = {
    brand: {
        regExp: /^[A-Za-z ]{2,10}$/,
        errorMessage: 'Brand is incorrect',
        errorElementSelector: '.brand-error',
    },
    model: {
        regExp: /^[A-Za-z0-9 -]{2,15}$/,
        errorMessage: 'Model is incorrect',
        errorElementSelector: '.model-error',
    },
    type: {
        regExp: /^[A-Za-z -]{2,15}$/,
        errorMessage: 'Type is incorrect',
        errorElementSelector: '.type-error',
    },
    price: {
        regExp: /^\d{4,7}$/,
        errorMessage: 'Price is incorrect',
        errorElementSelector: '.price-error',
    },
    description: {
        regExp: /^.{2,1000}$/,
        errorMessage: 'Description is incorrect',
        errorElementSelector: '.description-error',
    },
}

/**
 * 
 * @param data: {login, password}
 * @returns boolean
 */

function isValid (data, validator) {
    let errors = false;

    for(let key in data){
        if (!validator[key].regExp.test(data[key])){
            errors = true;
            const errorElement = document.querySelector(validator[key].errorElementSelector);
            errorElement.classList.remove('hidden');
            errorElement.textContent = validator[key].errorMessage;
        }
    }
    return !errors;
};


export const isSignFormValid = (data) =>{
    return isValid(data, signInValidators);
}
 
export const isCarFormValid = data => {
    return isValid(data, carValidator);
};

