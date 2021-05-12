import path from "path";
import express from "express";
import routes from "./src/routes/routes";
import apiRoutes from "./src/routes/api";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/api", apiRoutes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
