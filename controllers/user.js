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
    await user.save();
  }
  addData();
};
