const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer();

// Util to make email body
const createMailBody = require("./utils/mail-body");

const app = express();
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static("public"));

// For Email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_PASSWORD,
  },
});

app.post("/newOrder", (req, res) => {
  console.log("newOrder Route Hit!");

  let mailBody = createMailBody(req.body);
  let attachments = [];

  for (let key of Object.keys(req.body)) {
    if (key.startsWith("Image") && req.body[key]) {
      attachments.push({
        filename: key + ".png",
        content: new Buffer.from(req.body[key].split("base64,")[1], "base64"),
      });
    }
    if (key.endsWith("Image") && req.body[key]) {
      attachments.push({
        filename: key + ".png",
        content: new Buffer.from(req.body[key].split("base64,")[1], "base64"),
      });
    }
  }

  console.log(mailBody.length);
  attachments.forEach((att) => console.log(att.filename, att.content.length));

  var mailOptions = {
    from: process.env.HOST_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Jacket Order!",
    text: mailBody,
    attachments: attachments,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("Email Sent: ", info.response);
  });
  res.status(200).json({ message: "Successfully Sent Email!" });
});

app.get("*", (req, res) => {
  res.send("<h1>404! Page Not Found</h1>");
});

PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
