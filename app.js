import express from "express";
import Lab5 from "./lab5.js";
import Hello from "./hello.js";

const app = express();
app.use(express.json());
Lab5(app);
Hello(app);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
