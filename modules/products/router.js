var express = require("express");
var router = express.Router();
const model = require("./dbcon");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get("/", (req, res) => {
  res.render("index", { title: "Supplement Store" });
});

router.get("/new", (req, res) => {
  res.render("new-product", { title: "Add new" });
});
router.get("/products", async (req, res) => {
  try {
    let products = await model.getProducts();
    console.log(products);
    res.render("products", { title: "Products", items: products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
