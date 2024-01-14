import { Schema, model, models } from "mongoose";

const Userschma = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  photo: { type: String, require: true },
})

const User = models.User || model('User', Userschma);

export default User;