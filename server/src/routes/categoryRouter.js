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

categoryRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    await Category.create({ name });
    res.json({
      data: "Категория успешно добавлена",
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      data: "Такая категория уже существует",
      statusCode: 400,
    });
  }
});

module.exports = categoryRouter;
