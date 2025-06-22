import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactUs from "./model/contactSchema.js";

const App = express();
App.use(cors());
App.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/portfolioContact")
  .then(() => {
    console.log("Data base is Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

App.get("/", (req, res) => {
  res.send("Hello");
});

App.post("/Contactdata", async (req, res) => {
  try {
    const data = req.body.contactForm;
    const contactData = await contactUs.create(data);
    console.log(contactData);
    res.send(contactData);
  } catch (error) {
    console.log(error.message);
  }
});


App.listen(process.env.port, () => {
  console.log(`http://localhost:${port}`);
});
