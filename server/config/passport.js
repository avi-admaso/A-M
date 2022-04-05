const jwtstrategy = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;
const users = require("../models/userModel.js");
const options = {
    secretOrKey: process.env.SECRET_KEY
}
options.jwtFromRequest = extractjwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
    passport.use(
        new jwtstrategy(options, (jwt_from_payloud, done) => {
            console.log(jwt_from_payloud.user);
            users.findById(jwt_from_payloud.user._id)
                .then(user => {
                    if (user)return done(null, user);
                    return done(null, false)
                })
                .catch(err => done(err, false))
        })
    )
}
