/**
 * Created by jamiecho on 1/3/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PWDB');
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
