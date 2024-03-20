require("./src/db");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/docs/swagger.json");
const productController = require("./src/controllers/productController");
const categoryController = require("./src/controllers/categoryController");

const app = express();
app.use(express.json());

app.use("/api", productController);
app.use("/api", categoryController);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
