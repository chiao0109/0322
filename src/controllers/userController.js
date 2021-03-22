class UserController{
    getUser = (req,res)=>{
        res.status(200).json({message:'hi555666'});
    }
}

export default new UserController();