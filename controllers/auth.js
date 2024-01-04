import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

/* ------- Register User ------- */

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastNAme,
      email,
      password,
      picturePath,
      friends,
      occupation,
      impressions,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastNAme,
      email,
      password: passwordHash,
      picturePath,
      friends,
      occupation,
      impressions,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 1000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
