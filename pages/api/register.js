import Users from '../models/userModel';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    const body = req.body;
    const userExist = await Users.findOne({ email: body.email });
    if (userExist) {
        res.status(200).json({ message: 'Already registered' })
        return;
    }

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    const hashpass = await bcrypt.hash(body.password, salt);
    const user = new Users({ email: body.email, password: hashpass });
    await user.save();
    res.status(200).json({ message: 'Registered successfully' });

}