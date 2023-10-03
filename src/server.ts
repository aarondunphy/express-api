import "dotenv/config";
import { app } from "./app.js";

app.listen(3000, () => console.log("App running on http://localhost:3000"));
