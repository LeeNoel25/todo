import express from "express";
import cors from "cors";
import todoRouter from "./routes/todoRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routers //
app.use("/api/tasks", todoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
