const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


mongoose.connect("mongodb://localhost:27017/Netflix", () => {
  console.log("MongoDB connected");
})
.catch (error => console.log(error));

const Movie = mongoose.model("Movie", {
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  title: String,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  video:String,
});

const ToView = mongoose.model("ToView", {
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  title: String,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  video:String,
});

module.exports = {
  Movie,ToView
}
