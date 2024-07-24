import fs from 'fs'
import foodModel from '../models/foodModel.js';



// Add food Item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true, message:"Food Added Successfully"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


//delete fod item
const removeFood = async (req, res) => {
    try {
        //To find the image by an id
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        //to delete the produvt by id
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Deleted successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood, listFood, removeFood}
