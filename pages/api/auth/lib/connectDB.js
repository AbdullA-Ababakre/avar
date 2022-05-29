import mongoose from 'mongoose';

const connectDB = () => {
    if (mongoose.connection.readyState) {
        console.log("Already connected");
        return;
    }

    mongoose.connect(process.env.MONGODB_URI, {}, err => {
        if (err) {
            throw err;
        }
        console.log("Connected successfully");
    })
}

export default connectDB;