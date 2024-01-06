class ProductManager {
    constructor() {
        this.products = [];
    }
    
    getProducts = () => {
        return this.products;
    };

    addProduct(title, description, price, thumbnail, stock , code
    ) {
    const product = {title,
        description,
        price,
        thumbnail,
        stock,
        code,
    };

    const productFoundWithRepeatedCode = 
    this.products.find((prod) => prod.code === code);

    if (productFoundWithRepeatedCode) {
        return console.log("Code already exists.");
    }
    
    if (this.products.length === 0) {
        product.id = 1;
    } else {
        product.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(product);
    }

    getProductById = (id) => {
        const foundProduct = this.products.find((prod) => prod.id === id);
        
        
        if (!foundProduct){
            return console.log("Not Found")
        } else{
            return foundProduct;
        }
    }
};