import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors';
import postsRoute from './routes/posts.js';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import announcementsRoute from './routes/announcements.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

app.use(cookieParser());
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use("/api/auth", authRoute);
//app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);
app.use("/api/announcements", announcementsRoute);

app.use((req, res, next) => {
  console.log("Middleware Used");
}); // Needs to be omited in production

app.listen(8800, () => {
  connect();
  console.log("Backend connection established");
});
