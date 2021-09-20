const { Router } = require("express");
const productRouter = Router();
const { Product } = require("../../db/models");

productRouter.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  if (category === "pillowcases") {
    const pillowcases = await Product.findAll({ where: { categoryID: 1 } });
    res.json(pillowcases);
  } else if (category === "duvetcovers") {
    const duvetcovers = await Product.findAll({ where: { categoryID: 2 } });
    res.json(duvetcovers);
  } else if (category === "bedsheets") {
    const bedsheets = await Product.findAll({ where: { categoryID: 3 } });
    res.json(bedsheets);
  }
});

productRouter.get("/:article", async (req, res) => {
  const { article } = req.params;
  const product = await Product.findOne({ where: { vendorCode: article } });
  res.json(product);
});

module.exports = productRouter;
