module.exports = (req, res, next)=>{
    if (typeof req.cookies.weatherauthtoken === 'undefined' || req.cookies.weatherauthtoken === null) {
      req.user = null;
    } else {
      var token = req.cookies.weatherauthtoken;
  
      //Synchronous verification
      try{
        decodedToken = jwt.verify(token, process.env.SECRETKEY)
        req.user = decodedToken._id
      }catch(err){
        console.log(err.message)
      }
    };
    next();
};