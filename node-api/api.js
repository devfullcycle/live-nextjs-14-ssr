const express = require("express");
const bodyParser = require("body-parser");
const { products } = require("./data");

const app = express();

app.use(bodyParser.json());

app.get("/products", async (req, res) => {

  await new Promise((resolve) => setTimeout(resolve, 10000));

  const limit = 15;
  const page = parseInt(req.query.page) || 0;
  const offset = page ? (page - 1) * limit : 0;
  const end = offset + limit;

  if (req.query.name) {
    const name = req.query.name.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name)
    );

    const slicedProducts = filteredProducts.slice(offset, end);

    return res.json({
      products: slicedProducts,
      total: filteredProducts.length,
    });
  }

  const slicedProducts = products.slice(offset, end);

  res.json({
    products: slicedProducts,
    total: products.length,
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
