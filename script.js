var busqueda = document.getElementById("busqueda");
var btn = document.getElementById("buscar");
var cat = document.getElementById("categorias");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarResultados();
});

async function obtenerProductos() {
    try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        const productos = await respuesta.json();
        return productos;

    } catch(error) {
        console.log(error);
    }
}

async function mostrarResultados(){
    var productos = await obtenerProductos();
    busqueda.innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    var filtrados = productos.filter(producto => {
        var coincideCategoria =
            cat.value === "" || producto.category === cat.value;
        return producto.title.toLowerCase().includes(busqueda.value.toLowerCase()) && coincideCategoria;
    });

    filtrados.forEach(producto => {
        var li = document.createElement("li");
        var t = document.createElement("p");
        t.textContent = producto.title;
        li.appendChild(t);
        document.getElementById("resultados").appendChild(li);
    });
    if(filtrados.length === 0){
        var li = document.createElement("li");
        var t = document.createElement("p");
        t.textContent = "No se encontro ni un producto con los parametros de busqueda";
        li.appendChild(t);
        document.getElementById("resultados").appendChild(li);
    }
}
