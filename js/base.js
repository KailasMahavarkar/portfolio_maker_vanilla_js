window.addEventListener('load', function () {
    if (localStorage.getItem('theme')) {
        // set active element
        activeID = localStorage.getItem('theme');
        document.documentElement.setAttribute('data-theme', activeID);
        document.getElementById(activeID)?.classList.add('selected');
    }

    // set controlbox state
    if (localStorage.getItem('controlbox') === 'open') {
        openControlBox();
    }else{
        closeControlBox();
    }

})


// when controlbox is closed
function openControlBox() {
    const controlbox = document.getElementById('controlBox');
    const controlBoxOpen = document.getElementsByClassName('controlbox__open')[0];

    if (controlBoxOpen){
        controlBoxOpen.classList.add('hide');
        controlBoxOpen.classList.remove('show');
    }

    if (controlbox){
        controlbox.classList.add('show');
        controlbox.classList.remove('hide');
    }
    

    // add state to localstorage
    localStorage.setItem('controlbox', 'open');

}


function closeControlBox() {
    const controlbox = document.getElementById('controlBox');
    const controlBoxOpen = document.getElementsByClassName('controlbox__open')[0];

    if (controlBoxOpen){
        controlBoxOpen.classList.remove('hide');
        controlBoxOpen.classList.add('show');
    }

    if (controlbox){
        controlbox.classList.remove('show');
        controlbox.classList.add('hide');
    }


    // add state to localstorage
    localStorage.setItem('controlbox', 'close');
}