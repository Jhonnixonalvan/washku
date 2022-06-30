
    // ---------Serach----------------------------------
    function mostrar_buscador() {
        document.getElementById("ctn_search").style.display= "block";
        document.getElementById("ctn_search").style.position= "absolute";
        document.getElementById("ctn_search").style.zIndex= "20";
        document.getElementById("ctn_search").style.Transition = 'all 1000ms';
       }
       function  cerrar_buscador() {
           document.getElementById("ctn_search").style.display= "none";
       }
    // -----slider-------
    window.onload = function(){
    const slider = document.querySelector("#slider");
    let slider__images = document.querySelectorAll(".slider__images");
    let slider__imagesLast = slider__images[slider__images.length - 1];
    
    const btnLeft = document.querySelector("#btn__left");
    const btnRight = document.querySelector("#btn__right");
    
    slider.insertAdjacentElement('afterbegin', slider__imagesLast);
    
    function moverDerecha () {
        let slider__imagesFirst = document.querySelectorAll(".slider__images")[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', slider__imagesFirst);
            slider.style.marginLeft = "-100%";
        }, 500)
    };
    
    function moverIzquierda () {
        let slider__images = document.querySelectorAll(".slider__images");
        let slider__imagesLast = slider__images[slider__images.length - 1];
        slider.style.marginLeft = "0%";
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', slider__imagesLast);
            slider.style.marginLeft = "-100%";
        }, 500)
    };
    
    btnRight.addEventListener('click', function(){
        moverDerecha();
    });
    
    btnLeft.addEventListener('click', function(){
        moverIzquierda();
    });
    
    setInterval(function(){
        moverDerecha();
    }, 5000);
    }

    // ---carrito----

    

