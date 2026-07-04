let carrito = [];


/* ABRIR / CERRAR CARRITO */

function toggleCarrito(){

    document
    .querySelector(".carrito-flotante")
    .classList.toggle("abierto");

    document
    .querySelector(".overlay")
    .classList.toggle("activo");

}


function cerrarCarrito(){

    document
    .querySelector(".carrito-flotante")
    .classList.remove("abierto");

    document
    .querySelector(".overlay")
    .classList.remove("activo");

}


/* AGREGAR PRODUCTOS */

function agregarCarrito(nombre,precio,talle){

    carrito.push({

        nombre:nombre,

        precio:precio,

        talle:talle

    });

    renderCarrito();

    cerrarCarrito();

}


/* ELIMINAR PRODUCTOS */

function eliminarProducto(index){

    carrito.splice(index,1);

    renderCarrito();

}


/* RENDERIZAR CARRITO */

function renderCarrito(){

    let lista =
    document.getElementById("listaCarrito");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto,index)=>{

        lista.innerHTML += `

        <div class="item-carrito">

            <p>

                ${producto.nombre}

            </p>

            <small>

                Talle: ${producto.talle}

            </small>

            <p>

                $${producto.precio}

            </p>

            <button
            onclick="eliminarProducto(${index})">

                Eliminar

            </button>

        </div>

        `;

        total += producto.precio;

    });


    document
    .getElementById("contador")
    .textContent = carrito.length;


    document
    .getElementById("total")
    .textContent = "$" + total;

}

/*ENVIAR WHATSAPP*/

function enviarWhatsapp(){

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

        return;

    }

    let mensaje =

    "Hola IN THE WEST.%0A%0A";

    mensaje +=

    "Quiero realizar el siguiente pedido:%0A%0A";

    let total = 0;

    carrito.forEach(producto=>{

        mensaje +=

        "• " +

        producto.nombre +

        " | Talle " +

        producto.talle +

        " | $" +

        producto.precio +

        "%0A";

        total += producto.precio;

    });

    mensaje +=

    "%0A";

    mensaje +=

    "TOTAL: $" +

    total;

    window.open(

    "https://wa.me/541164806264?text="

    +

    mensaje,

    "_blank"

    );

}

/* INICIO */

window.onload = () => {
    cerrarCarrito();
}