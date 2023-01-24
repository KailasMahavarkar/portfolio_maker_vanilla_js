const handleLogoChange = () => {
    const logoChangeHandler = (e) => {
        const logoDivs = document.getElementsByClassName('logo');
        // loop through each logo div
        for (let i = 0; i < logoDivs.length; i++) {
            // change the text

            // if max length is reached then stop
            if (e.target.value.length > 20) {
                e.target.value = e.target.value.slice(0, 20);
                return;
            }

            logoDivs[i].textContent = e.target.value;
        }
    }
    const logoInput = document.getElementById('logoInput');
    logoInput.focus();
    // add event listener to logo input
    logoInput.addEventListener('input', logoChangeHandler);
}

