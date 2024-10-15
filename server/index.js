import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js"; // Corrected variable naming for consistency
import questionRoutes from "./routes/question.js"; // Corrected variable naming for consistency
import answerRoutes from "./routes/answer.js"; // Corrected variable naming for consistency

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Define routes
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
app.get("/", (req, res) => {
    res.send("Codequest is running perfectly!");
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const databaseUrl = process.env.MONGODB_URI;

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }) // Added connection options for MongoDB
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message); // Improved error logging
    });
