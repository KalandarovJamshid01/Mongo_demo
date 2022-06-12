

const { async } = require("jshint/src/prod-params");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test")
  .then(() => {
    console.log("MOngo ulandi");
  })
  .catch((err) => {
    console.log(err);
  });

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

const savedBook = async function () {
  const book = new Book({
    name: "Javascript Foundation",
    author: "Farkhod Dadajonov",
    tags: ["js", "dasturlash"],
    isPublished: true,
  });
  let bookSave = await book.save();
  console.log(bookSave);
};
savedBook();
