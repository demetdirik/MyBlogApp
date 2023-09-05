import { Schema, model } from "mongoose";
//import validator from "validator";
//import bcrypt from "bcryptjs";
//import JWT from "jsonwebtoken";

const UserSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: false },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/*UserSchema.pre("save", async function () {
  if (!this.isModified) return;

const salt = await bcrypt.genSalt(10);

this.password = await bcrypt.hash(this.password,salt);

});

//compare
UserSchema.methods.comparePassword = async function (userPassword){
  const isMatch = await bcrypt.compare(userPassword,this.password);

  return isMatch;
};
*/

const User = model("User", UserSchema);
export default User;