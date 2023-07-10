const User = require("../models/user");
exports.addUserData = (req, res, err) => {
  console.log(req.body);
  async function addData() {
    const user = await User.create({
      name: req.body.user_name,
      gender: req.body.user_gender,
      phone: req.body.user_phone,
      email: req.body.user_email,
      bloodGroup: req.body.user_blood_group.toString(),
      city: req.body.user_city,
      state: req.body.user_state,
      pin: req.body.user_pin,
    });
    await user.save().then((result) => {
      console.log("USER ADDED");
      res.status().send(200);
    });
  }
  addData();
};
exports.searchCity = (req, res, err) => {
  if (req.body.searchCity !== null) run();
  async function run() {
    try {
      const user = await User.find({
        city: { $regex: req.body.searchCity, $options: "i" },
      });
      await res.end(JSON.stringify(user));
    } catch (e) {
      console.log(e.message);
    }
  }
};
exports.searchBloodGroup = (req, res, err) => {
  if (req.body.bloodGroupId !== null) run();
  async function run() {
    try {
      const user = await User.find({
        bloodGroup: req.body.bloodGroupId,
      });
      await res.end(JSON.stringify(user));
    } catch (e) {
      console.log(e.message);
    }
  }
};
