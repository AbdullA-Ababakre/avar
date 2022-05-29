import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        default: 'guest'
    },
    email: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    image:{
        type: 'string',
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    }
},{timeStamp:true});


let Dataset = mongoose.models.users || mongoose.model('users',userSchema);
export default Dataset;