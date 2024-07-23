import mongoose from "mongoose";

export const connectBD = async() => {
    await mongoose.connect('mongodb+srv://rathodkaushal2001:S3SPPuY5CR9Wl3K7@kaushal.w6kbbwb.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}