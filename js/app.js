import { showSignInForm, showCarsPage } from "./pages/signIn.js";
document.addEventListener('DOMContentLoaded', () => {
    const isUserSignedIn = !!localStorage.getItem('userToken');
    isUserSignedIn ? showCarsPage() : showSignInForm();
})