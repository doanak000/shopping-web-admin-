const authService = require("./authService");
exports.register = async (req, res) => {
    const { firstname, lastname, username, password, address} = req.body;
    try {
        if(!username || !password){
            res.render('../components/auth/register', { errorCode: 1});
        }
        else{
            await authService.register(firstname, lastname, username, password, address)
            res.redirect("/login");
        }
    }
    catch(err){
        console.log(err)
        res.render('../components/auth/register', { errorCode: 2});
    }
};