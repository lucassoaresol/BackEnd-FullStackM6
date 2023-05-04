import "express-async-errors";
import express from "express";
import { resolve } from "node:path";
import { errorHandler } from "./errors";
import {
  announcementRouter,
  commentRouter,
  imageRouter,
  passwordRouter,
  sessionRouter,
  userRouter,
} from "./router";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/announcements", announcementRouter);
app.use("/images", imageRouter);
app.use("/comments", commentRouter);
app.use("/resetpassword", passwordRouter);
app.use("/files", express.static(resolve(__dirname, "..", "tmp", "uploads")));

app.use(errorHandler);

export default app;
