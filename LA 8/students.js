const express=require("express");
const router=express.Router()
const Student=require('../models/student')

router.get('/',async(req,res)=>{
    try{
        const  stud=await Student.find()
        res.json(stud)
    }catch(err){
        res.send("Error")
    }
    res.send("Get request made")
})

router.get('/:id',async(req,res)=>{
    try{
        const stud1=await Student.findById(req.params.id)
        res.json(stud1)
    }catch(err){
        res.send("Error")
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const studPatch = await Student.findById(req.params.id);
        studPatch.name = req.body.name;
        const s = await studPatch.save();
        res.json(studPatch);
    } catch (err) {
        res.status(500).send("Error"); // Sending an error response
    }
});

router.post('/',async(req,res)=>{
    const student=new Student({
        name: req.body.name,
        course: req.body.course
    })
    try{
        const s=await student.save()
        res.json(s)
    }catch(err){
        res.send("Error")
    }
})


module.exports=router
