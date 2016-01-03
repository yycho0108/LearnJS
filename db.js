/**
 * Created by jamiecho on 1/3/16.
 */
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOURI || "mongodb://localhost/PWDB";
mongoose.connect(mongoURI);
var acntSchema = mongoose.Schema({
    SITE : String,
    ID : String,
    PW : String,
    DESC : String
});
var account = mongoose.model('accounts',acntSchema);
exports.save = function(dat){
    var info = new account(dat);
    info.save(function(err){
        if(err){
            console.log("FAILED TO SAVE INFO");
            //return false;
        }
        //return true;
    });
};
