import { showSignInForm } from "./pages/signInForm.js";
import { showCarsPage } from "./pages/carsPage.js";
document.addEventListener('DOMContentLoaded', () => {
    const isUserSignedIn = !!localStorage.getItem('userToken');
    isUserSignedIn ? showCarsPage() : showSignInForm();
})