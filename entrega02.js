const fs = require('fs');


class ProductManager {
    constructor() {
        this.PATH = "./db.json"
        this.products = this.cargarArchivoExterno();
    }; 

    static id = 0;
   //-------------------FUNCION CARGAR ARCHIVO JSON---------------------//
       cargarArchivoExterno() {
        try {
            const data = fs.readFileSync(this.PATH, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error("Error al cargar productos desde el archivo:", error);
            return [];
        }
    }

//--------------------FUNCION AGREGAR PRODUCTO---------------------//
addProduct(title, description, price, thumbnail, code, stock) { 
    ProductManager.id++;
    this.products.push({ title, description, price, thumbnail, code, stock, id: ProductManager.id });
    
    try {
        fs.writeFileSync(this.PATH, JSON.stringify(this.products, null, 2));
        console.log("Producto agregado y guardado en el archivo.");
    } catch (error) {
        console.error("Error al agregar producto y guardar en el archivo:", error);
    }
}

//-------------------FUNCION OBTENER PRODUCTOS---------------------//
getProducts() {
    return this.products;
    
};

//-----------------FUNCION OBTENER PRODUCTO POR ID----------------//
getProductById (id) {
    const foundProduct = this.products.find((product) => product.id === id);
    if (foundProduct) {
        console.log("El producto con el Id buscado es :", foundProduct); 
    } else {
        console.log("No se encontró ningún usuario con el nombre:", id);
    }
}
//-----------------FUNCION ACTUALIZAR PRODUCTO POR ID----------------//

updateProduct(id, updatedFields) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedFields };
        try {
            fs.writeFileSync(this.PATH, JSON.stringify(this.products, null, 2));
            console.log(`El producto con el ID ${id} ha sido actualizado.`);
        } catch (error) {
            console.error("Error al guardar productos en el archivo:", error);
        }
    } else {
        console.log("No se encontró ningún producto con el ID:", id);
    }
}

 //-----------------FUNCION  ELIMINAR PRODUCTO POR ID----------------//
 deleteProductById(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
        this.products.splice(index, 1);
        this.saveToFile(); // Guardar productos en el archivo después de eliminar uno
        console.log(`El producto con el ID ${id} ha sido eliminado.`);
    } else {
        console.log("No se encontró ningún producto con el ID:", id);
    }
}

    saveToFile() {
        try {
            fs.writeFileSync(this.PATH, JSON.stringify(this.products, null, 2));
            console.log("Productos guardados en el archivo.");
        } catch (error) {
            console.error("Error al guardar productos en el archivo:", error);
        }
    } 
 
}
const products = new ProductManager();


// LLAMANDO CON METODOS : getProducts()
 //console.log("Productos cargados desde el archivo:", products.getProducts());


// LLAMANDO CON METODOS : getProductById()
//console.log(products.getProductById(2));


// LLAMANDO CON METODOS : updateProduct()
/*  const updatedFields = {// Definir los campos actualizados del producto

    title: "Funda para motos",
    description: "hasta 1000cc",
    price: 1100,
    thumbnail: "imagen sin cargar",
    stock: 19
};

products.updateProduct(2, updatedFields);// Llamar al metodo updateProduct con el ID del producto y los campos actualizados
 */
// LLAMANDO CON METODOS : addProduct()


/* products.addProduct(
    "Remeras",       
    "Escote redondo", 
    2400,                         
    "Sin fotos, pa que..",           
    "23ft",                      
    205                            
); */

// LLAMANDO CON METODOS : deleteProductById(1)
//products.deleteProductById(1);