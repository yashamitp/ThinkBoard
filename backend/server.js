const express = require("express");
const noteRoutes = require("./src/routes/notes.routes");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const rateLimiter = require("./src/middleware/rateLimiter");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(rateLimiter);
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
// app.use((req, res, next) => {
//   console.log(`method:${req.method} and url was:${req.url}`);
//   next();
// });

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
