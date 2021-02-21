//behaviors and interactivity
'use strict'    //wont let js do whatever it wants and make assumptions

const switcher = document.querySelector('.btn');    //event, make button do stuff

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});
