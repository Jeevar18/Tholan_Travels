const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    }),
);

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Tholan Travels Backend is Running!",
    });
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is healthy",
    });
});

app.use("/api/enquiries", enquiryRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exitCode = 1;
    }
};

startServer();