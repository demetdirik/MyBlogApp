import User from "../models/User.js";


export const registerUser = async (req, res) => {
       const { name, email, password } = req.body;
       

       const user = await User.create({
        name,
        email,
        password,
      });
  
     

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: null,
    });

 
  
};
