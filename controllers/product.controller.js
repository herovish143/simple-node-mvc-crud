const Product = require("../models/product.model")

//list product
exports.listProducts = (req, res) => {
    Product.find((err, products) => {
        if(err) return next(err);
        res.send(products);
    });
}

// create product 

exports.createProduct = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save((err) => {
        if(err) {
            return next(err);
        }
        res.send('Product Created successfully');
    });
};

// details of products :id

exports.productDetails = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            return next(err);
        }

        res.send(product);
    });
};

// update product :id
exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
        if(err) return next(err);
        res.send("Product updated");
    });
}

// delete product :id
exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send("Product deleted.");
    })
}

exports.test = (req, res) => {
    res.send('Greetings from the Test controller!')
    res.end();
};