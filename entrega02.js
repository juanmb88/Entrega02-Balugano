 class ProductManager {
    constructor(PATH) {
        PATH = this.PATH
        this.products = [];
    }; 

    static id = 0;
    
//--------------------FUNCION AGREGAR PRODUCTO---------------------//
addProduct (title, description, price, thumbnail, code, stock) { 
    ProductManager.id++
    this.products.push( {title, description, price, thumbnail, code, stock, id : ProductManager.id})
};

//-------------------FUNCION OBTENER PRODUCTOS---------------------//
getProducts() {
    return this.products;
    
};

//-----------------FUNCION OBTENER PRODUCTO POR ID----------------//
getProductById (id) {
    const foundProduct = this.products.filter((product) => product.id === id);
    if (foundProduct.length > 0) {
        console.log("El producto con el Id buscado es :", foundProduct); 
    } else {
        console.log("No se encontró ningún usuario con el nombre:", id);
    }
}
//-----------------FUNCION ACTUALIZAR PRODUCTO POR ID----------------//

updateProduct (id, updatedFields) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedFields };
            //this.saveToFile(); // Guardar productos en el archivo después de actualizar
            console.log(`El producto con el ID ${id} ha sido actualizado.`);
        } else {
            console.log("No se encontró ningún producto con el ID:", id);
        }
    }

 //-----------------FUNCION  ELIMINAR PRODUCTO POR ID----------------//
deleteProductById(id) {
        const index = this.products.findIndex((product) => product.id === id);
            if (index !== -1) {
                this.products.splice(index, 1);
                console.log(`El producto con el ID ${id} ha sido eliminado.`);
            } else {
                console.log("No se encontró ningún producto con el ID:", id);
            }
    }
 
}
const products = new ProductManager();


products.addProduct("Evento Clase06", 'Chile', 500,'Sin Imagen' , "dh161", 50);
products.addProduct("Evento Clase01", 'Brasil', 3300,'Sin Imagen' , "dh44", 56);
products.addProduct("Evento Clase02", 'Peru', 3500,'Sin Imagen' , "dh11", 56);
products.addProduct("Evento Clase13", 'Canada', 1500,'Sin Imagen' , "fff221", 12);



// Mostrar productos

//console.log(products.getProducts())

// Mostrar productos por ID

//console.log(products.getProductById(2));


// Actualizar producto por ID

/* const productIdToUpdate = 4 ; // Puedes cambiar esto al ID que quieras actualizar
const updatedFields = { code : "FFRR44" }; // Puedes cambiar esto a los campos que quieras actualizar
products.updateProduct(productIdToUpdate, updatedFields);   */



// Mostrar productos después de agregar y actualizar

/* console.log(products.getProducts())
console.log("Productos después de agregar y actualizar:", products.updateProduct(2,1));
 */

// Eliminar producto por ID

/*  const productIdToDelete = 4; 
products.deleteProductById(productIdToDelete); 
console.log("Productos después de eliminar:", products.getProducts()); 
 */

