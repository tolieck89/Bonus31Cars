import {showCarsPage} from './carsPage.js';
import  {users}  from '../data.js';
import {isSignFormValid} from '../helpers/validators.js';
import {showError} from '../helpers/domHelpers.js';


export const showSignInForm = () => {
    const parent = document.querySelector("#root");
    const SignInFormContent = `
    <form>
        <div class="hidden error"></div>
       <div>
            <input type="text" name="login" placeholder="Login"/>
            <span class="hidden error login-error"></span>
        </div>
        <div>
            <input type="password" name="password" placeholder="Password" />
            <span class="hidden error password-error"></span>
        </div>
        <button type="button">Sign In</button>
        </form>
    `;
    const signInForm = document.createElement('div');
    signInForm.classList.add('sign-in');
    signInForm.innerHTML= SignInFormContent;
    parent.appendChild(signInForm);

    signInForm.addEventListener('click', (event) => {
        if (event.target.nodeName === 'BUTTON'){
            handleSignInButton();
        }

    })
}

function handleSignInButton(){
    
    const form = document.forms[0];
    const login = form.login.value;
    const password = form.password.value;

    if (!isSignFormValid({login, password})){
    showError('Incorrect data');
    } else {
    const isuserReal =  users.findIndex(user => user.login === login && user.password === password);
    if(isuserReal === -1){
        showError('Incorrect login or password');
    } else {
        localStorage.setItem('userToken', 'ok');
        showCarsPage();
    }
}
}

