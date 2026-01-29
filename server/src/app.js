import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();

// CORS is handled by Netlify when same-origin, but good to keep for dev
app.use(cors());
app.use(express.json());

// If running in Netlify environment, we might want to attach routes to a specific path
// or we handle that in the function wrapper.
// For simplicity here, we just use the routes.
// Mount routes at potentially different paths to handle Netlify rewrites vs local dev
const router = express.Router();
router.use("/", routes);

app.use("/.netlify/functions/api", router); // Requests coming via Netlify rewrite
app.use("/api", router); // Fallback or direct /api usage
app.use("/", router); // Direct usage (localhost:3000)

export default app;
