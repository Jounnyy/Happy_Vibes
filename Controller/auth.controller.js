const Users = require("../Models/usersData.model");
const argon2 = require("argon2");

module.exports = {
    async Login(req, res) {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        })
        
        if(!user) return res.status(404).json({status: 404, msg: "User not found"});
        const matchingPassword = await argon2.verify(user.password, req.body.password);
        if(!matchingPassword) return res.status(400).json({status: 400, msg: "Password do not matches"})
        const { uuid, name, email, name_img, url } = user;

        req.session.userId = uuid;
        res.status(200).json({
            status:200, 
            result:{
                uuid:uuid,
                name:name, 
                email:email, 
                name_img:name_img, 
                url:url
        }})
    },
    async Profile(req, res) {
        if(!req.session.userId) return res.status(401).json({status:401, msg:"Please login your account"})

        const user = await Users.findOne({
            attributes: ['uuid', 'name', 'email', 'name_img', 'url'],
            where: {
                uuid: req.session.userId
            }
        })
        if(!user) return res.status(404).json({status: 404, msg:"User not found"});
        res.status(200).json({status:200, result: user})
    },
    async LogOut(req, res) {
        req.session.destroy(err => {
            if(err) return res.status(err).json({status:500, msg:"Internal server error", err: err.message});
            res.status(200).json({status:200, msg:"User logged out"});
        }) 
    }
}