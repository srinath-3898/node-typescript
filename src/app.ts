import express from "express";
import todosRoutes from "./routes/todosRoutes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/todos", todosRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
