import User from "../models/User.js";
import bcrypt from "bcryptjs";


 const registerUser = async (req, res) => {
       const { name, email, password } = req.body;
       
       //const hashedPassword = bcrypt.hashSync(password);


       const user = await User.create({
        name,
        email,
        password ,
        //:hashedPassword
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

/*const loginUser = async (req, res) => {
  try {
     const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(500).json({message:"mail hata"});
  }

  if (await user.comparePassword(password)){
    return res.status(500).json({message:"password hata"});
  }
  } catch (error) {
    console.log(error);
  }
 
};
*/
 const loginUser = async (req, res) =>{
  const{email,password} = req.body;
  let existinguser = await User.findOne({email});

  if (!existinguser){
    return res.status(404).json({ message: "mail user bulunamadi"});
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existinguser.password);
  if(!isPasswordCorrect){
    return res.status(400).json({message:"yanliş şifre"})
  }
  
  return res.status(200).json({message:"login basarili"})

 };




export {
  registerUser,
  loginUser,
}