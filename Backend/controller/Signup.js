import User from "../model/Signup.js";

export const SignUp = async (req, res) => {
  try {
    const prefix = "UID";
    const uid = prefix + Date.now();
    const uFullname = req.body.fullname;
    const uEmail = req.body.email;
    const uNo = req.body.number;
    const uNic = req.body.nic;
    const uAddress = req.body.address;
    const uPassword = req.body.password;

    const newSuser = new User({
      userID: uid,
      userName: uFullname,
      number: uNo,
      nic: uNic,
      address: uAddress,
      password: uPassword,
      email: uEmail,
    });

    const newF = await newSuser.save();
 
    if (newF) {
      res.status(200).json({
        message: "User Added",
        payload: newF,
      });
    } else {
      res.status(400).json({
        message: "User Added Error",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err,
    });
  }
};

export const Login = async (req, res) => {
    try {
      const uEmail = req.body.email;
      const uPassword = req.body.password;

      const u = await User.findOne({email:uEmail});

        if(u){
            if(u.password == uPassword){
                res.status(200).json({
                    message: "Logged",
                  });
            }else{
                res.status(400).json({
                    message: "Password Incoorect!",
                  });
            }
        }else{
            res.status(404).json({
                message: "User Added Error",
              });
        }
  
    } catch (err) {
      res.status(500).json({
        message: "Server Error",
        error: err,
      });
    }
  };

// export const getAllFoods = async (req, res) => {
//   try {
//     const foods = await Foods.find();
//     if (foods) {
//       res.status(200).json({
//         payload: foods,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in getting Foods",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const getOneFood = async (req, res) => {
//   try {
//     const foodId = req.params.id;
//     const food = await Foods.findById(foodId);

//     if (food) {
//       res.status(200).json({
//         payload: food,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in getting Food",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const updateFood = async (req, res) => {
//   try {
//     const foodId = req.params.id;
//     const food = await Foods.findById(foodId);
//     const f = {
//         foodId: req.body.foodId,
//         foodName: req.body.foodName,
//         foodCalorie: req.body.foodCalorie
//     };

//     const upFo = await Foods.findByIdAndUpdate(foodId, f);
//     if (upFo) {
//       res.status(200).json({
//         payload: f,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in updating Food",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const deleteFood = async (req, res) => {
//   try {
//     const foodId = req.params.id;
//     const food = await Foods.findByIdAndDelete(foodId);
//     if (food) {
//       res.status(200).json({
//         message: "Food deleted",
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in deleting Food",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

