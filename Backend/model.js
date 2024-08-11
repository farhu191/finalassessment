//Write missing codes here
const mongoose=require('mongoose')
const schema = mongoose.Schema({
  title: String,
  content1: String,
  content2: String,
  img_url: String,
});
const BlogData = mongoose.model('employee', schema);
module.exports = BlogData;
//Write missing codes here