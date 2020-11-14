
/* --------- detecting scroll --------- */
var header = document.getElementsByTagName('header')[0];
window.onscroll = function() {
    if(window.scrollY != 0) {
        header.classList.add('isFixed');
    }else {
        header.classList.remove('isFixed');
    }
}
alert("Hoang Hai test");