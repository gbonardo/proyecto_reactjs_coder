const productos = [
    { descripcion: "Notebook Asus", precio: 100000, id: "1", img: "../assets/images/notebookasus.jpg", idCategoria: "1" },
    { descripcion: "Notebook MSI", precio: 120000, id: "2", img: "../assets/images/notebookmsi2.jpg", idCategoria: "1" },
    { descripcion: "Notebook Dell", precio: 110000, id: "3", img: "../assets/images/notebookdell.jpg", idCategoria: "1" },
    { descripcion: "Notebook HP", precio: 90000, id: "4", img: "../assets/images/notebookhp.jpg", idCategoria: "1" },
    { descripcion: "Mouse Logitech", precio: 3000, id: "5", img: "../assets/images/mouselogitech.jpg", idCategoria: "2" },
    { descripcion: "Teclado Logitech", precio: 8000, id: "6", img: "../assets/images/tecladologitech2.webp", idCategoria: "2" },
    { descripcion: "Parlante Logitech", precio: 20000, id: "7", img: "../assets/images/parlantelogitech.jpg", idCategoria: "2" },
    { descripcion: "Monitor LG", precio: 50000, id: "8", img: "../monitorlg2.webp", idCategoria: "3" },
    { descripcion: "Monitor Samsung", precio: 55000, id: "9", img: "../monitorsamsung.webp", idCategoria: "3" },
    { descripcion: "Monitor Dell", precio: 70000, id: "10", img: "../monitordell12.jpg", idCategoria: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCat) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCategoria === idCat)
            resolve(productosCategoria);
        }, 2000)
    })
}