import "dotenv/config";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
HelloRoutes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
