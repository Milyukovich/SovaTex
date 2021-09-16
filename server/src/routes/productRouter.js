const { Router } = require("express");
const productRouter = Router();
const { Product } = require("../../db/models");

productRouter.get("/pillowcases", async (req, res) => {
  const pillowcases = await Product.findAll({ where: { categoryID: 1 } });
  res.json(pillowcases);
});

productRouter.get("/duvetcovers", async (req, res) => {
  const duvetcovers = await Product.findAll({ where: { categoryID: 2 } });
  res.json(duvetcovers);
});

productRouter.get("/bedsheets", async (req, res) => {
  const bedsheets = await Product.findAll({ where: { categoryID: 3 } });
  res.json(bedsheets);
});

productRouter.get("/:article", async (req, res) => {
  // console.log(req.params);
  // const bedsheets = await Product.findAll({ where: { categoryID: 3 } });
  // res.json(bedsheets);
});

module.exports = productRouter;
