const menu = document.getElementById('menu');

menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        if (target.classList.contains('active')) {
            target.classList.remove('active');
        } else {          

            const elem = [...menu.children].find((elem)=>elem.classList.contains('active'));
            if (elem) {
                elem.classList.remove('active');
            }

            target.classList.add('active');
        }       
    }
});



