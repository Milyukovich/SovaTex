const { Router } = require("express");
const categoryRouter = Router();
const { Category } = require("../../db/models");

categoryRouter.get("/", async (req, res) => {
  const category = await Category.findAll({
    raw: true,
    attributes: ["id", "name"],
  });
  res.json(category);
});

module.exports = categoryRouter;
