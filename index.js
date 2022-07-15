
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
    let allcontainerCart = document.querySelector(".cards");
    let buyThings = [];
    let containerBuyCart = document.querySelector(".mycart");
    loadEvents();
    function loadEvents() {
        allcontainerCart.addEventListener('click', addProduct);

        containerBuyCart.addEventListener("click", deleteProduct);
    }

    function addProduct(e) {
        e.preventDefault();
        if(e.target.classList.contains("addToCart")) {
            const selectProduct = e.target.parentElement;
            const selectProduct2 = selectProduct.parentElement; 
            readTheContent(selectProduct2);
        }
        
    }

    function deleteProduct(e) {
        if(e.target.classList.contains("cartIconElm")) {
            console.log(e.target.classList.contains("cartIconElm"));

            // const deleteId = e.target.getAtribute("id")
            // buyThings = buyThings.filter(product =>product.id != deleteId )        
        }
        loadHtml();
    }


    function readTheContent(product) {
        const infoProduct = {
            id   : product.closest(".card1"),
            image: product.querySelector("#imgs").src,
            title: product.querySelector(".soldp1").textContent,
            price: product.querySelector(".soldbuyP1 span").textContent,
            amount: 1
            
        }

        buyThings = [...buyThings, infoProduct]
        loadHtml();

    }

    
    function loadHtml() {
        clearhtml();
        buyThings.forEach(ele => {
            const {id, image, title, price, amount} = ele;
            const row = document.createElement("section");
            row.classList.add("MycartItems");
            row.innerHTML = `
            <section class="mycartItems">
            <div class="cartclose">
                <img class="cartcloseimg" src="assets/icon/cerrar.png" alt="">
            </div>
            <div class="mycarcontimg">
                <img class="cartimg1" src="${image}" alt="">
            </div>
            <div class="cartdetails">
                <h4 class="carttitle1">${title}</h4>
                <h5 class="cartprice">$ <span>${price}</span> <h5>
                <h6 class="cartstock">amount: 50</h6>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                      <span class="cart__amount-box minus"data-id="2">-</span>                
                      <span class="cart__amount-number">${amount} units</span>
                      <span class="cart__amount-box plus"data-id="1">+</span>
                    </div>
                    <img class="cartIconElm" data-id="1" src="assets/icon/eliminar.png" alt="">
                </div>
            </div>
        </section>
            `;

            containerBuyCart.appendChild(row);
        })
    }

    function clearhtml() {
        containerBuyCart.innerHTML = "";
    }
