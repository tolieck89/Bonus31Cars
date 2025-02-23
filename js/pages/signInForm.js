import  {users}  from './data.js';
import {showCarsPage} from './carsPage.js';

export const showSignInForm = () => {
    const parent = document.querySelector("#root");
    const SignInFormContent = `
    <form>
        <span class="hidden"></span>
        <input type="text" name="login" placeholder="Login" /><br/>
        <input type="password" name="password" placeholder="Password" /><br/>
        <button type="button">Sign In</button>
        </form>
    `
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

    const isuserReal =  users.find(user => user.login === login && user.password === password);
    if(isuserReal === -1){
        //handle error not correc user
    } else {
        showCarsPage();
    }
}