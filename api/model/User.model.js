import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avater: {
      type: String,
      default:
        "https://www.bing.com/images/search?view=detailV2&ccid=%2fwzrOCy6&id=AA9C696BBDB31469E197D6F5C17E4CEC30031629&thid=OIP._wzrOCy6F1cV-gE-Qzn04gHaHa&mediaurl=https%3a%2f%2fimg.freepik.com%2fpremium-vector%2fuser-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg%3fw%3d2000&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0ceb382cba175715fa013e4339f4e2%3frik%3dKRYDMOxMfsH11g%26pid%3dImgRaw%26r%3d0&exph=2000&expw=2000&q=user&simid=608002417514133014&FORM=IRPRST&ck=A5EF6443B9780648668D49AD96F53BE4&selectedIndex=5&itb=0",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
