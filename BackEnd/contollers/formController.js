const form = require('../models/formModels')

const AddData = async(req,res) => {
    try{
        const FormData = new form(req.body);
        const data = await FormData.save();
        res.status(201).json({
            success : "success",
            message : "the data is successfully added",
            data : data
        })
    }catch(err){
         res.status(400).json({
            success : "failure",
            error : err.message
         })
    }
}

const getFormData = async(req,res) => {
    try{
        const getData = await form.getAll();
        res.status(200).json({
            success : "success",
            message : "The list of Data",
            list : getData
        })
    }catch(err){
        res.status(400).json({
            success : "failure",
            error : err.message
        })
    }
}

const deleteFormData = async (req, res) => {
    try {
        const { id } = req.params;
        await form.delete(id);
        res.status(200).json({
            success: true,
            message: "Data deleted successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};


module.exports = {
    AddData,
    getFormData,
    deleteFormData
}