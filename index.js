const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const User = require("./models/user");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRoutes);
async function addData() {
  const user = await User.create({
    name: "Vishnu",
    gender: "male",
    phone: 9949466518,
    email: "v@vishnulokesh.com",
    bloodGroup: "O+",
    city: "bangalore",
    state: "KA",
    pin: "560008",
  });
  await user.save();
}
const PORT = process.env.PORT || 5000;

mongoose
  .connect(`mongodb+srv://${process.env.MONGODB_URL}`)
  .then((result) => {
    app.listen(PORT, console.log(`The Server is listening at ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
