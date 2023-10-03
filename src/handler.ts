import { configure } from "@vendia/serverless-express";
import { app } from "./app.js";

export const handler = configure({ app });
