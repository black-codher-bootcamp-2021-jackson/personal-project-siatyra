const mongoose = require("mongoose");
const { Schema } = mongoose;

const dojaSchema = new Schema({
  text: String,
  author_id: String,
  id: String,
  created_at: Date
});

const Profile = mongoose.model("profiles", dojaSchema);

module.exports = Profile;
