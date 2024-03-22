import mongoose from 'mongoose'

// first create schema , then create model
const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        required : true ,
        unique : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true ,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F009%2F749%2F643%2Foriginal%2Fwoman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg&tbnid=CUOXNGjFv4BIMM&vet=12ahUKEwjA2cjB64eFAxVwsWMGHUusCV0QMyhDegUIARCAAg..i&imgrefurl=https%3A%2F%2Fdesignco-india.com%2Frevsliderl%2FWoman-Profile-Mascot-Vector-Illustration-Female-Avatar-1378863.html&docid=Zz-4mmPIs8UOqM&w=1920&h=1920&q=avatar%20profile%20images&ved=2ahUKEwjA2cjB64eFAxVwsWMGHUusCV0QMyhDegUIARCAAg"
    }
}, {timestamps : true});

// now createing model
const User = mongoose.model('User' , userSchema);

export default User;