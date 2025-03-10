// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static("public"));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submission:", { name, email, message });
  
  // In production, add validation, send email, or store in a database
  res.json({
    success: true,
    message: "Thank you for reaching out. I will contact you shortly."
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
