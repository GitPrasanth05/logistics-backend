import express from "express";
import cors from "cors";
import HealthCheckRoutes from "./routes/health.routes.js";
import AddressRoutes from "./routes/address.routes.js";
import PackageRoutes from "./routes/package.routes.js";
import ShippingRoutes from "./routes/shipping.routes.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/healthCheck", HealthCheckRoutes);
app.use("/api/address", AddressRoutes);
app.use("/api/package", PackageRoutes);
app.use("/api/shipping", ShippingRoutes);
app.use("/api/user", UserRoutes);

export { app };
