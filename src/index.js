import "./scss/main.scss";
import * as bootstrap from "bootstrap";
import app from "./js/app";
app.init();




// import * as bootstrap from "bootstrap";
let items = document.querySelectorAll('.caro-s .caro1')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
