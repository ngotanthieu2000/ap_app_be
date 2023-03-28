const {getUsers,getUser} = require('../models/db')

module.exports = {
    getUsers: (req,res,next)=>{
        try {
            let user =  getUsers();
            return res.status(200).json({code:"Success",user})
        } catch (error) {
            console.log({error})
        }
    },
    getUserById: async (req,res,next)=>{
        try {
            if(!req.query.id){
                res.status(400).json({code:"Failure"})
            }
            // check exist device in data base
            let users = await getUser(req.query.id,(err,rows) => {
                if (err) {
                    console.error(err);
                  } else {
                    console.log(rows);
                    if(rows.length === 0){
                        console.log("Not found");
                        createUser(req.query.id,(err,rows)=>{

                        })
                    }
                    else return res.status(200).json({code:"Success",users:rows})
                  }
            });
            // console.log({users_getUserById:JSON.stringify(users)})
            // console.log({users_getUserById:users})
        } catch (error) {
            console.log({error})
        }
    }
}