const express = require('express')
const router = express.Router()
const userModels = require('../models/userModels')

router.get('/',async(_req,res) => {
try{
        const user =await userModels.find()
        res.json(user)
}catch(err){
    res.send('Error'+err)

}
})
router.get('/:id',async(req,res) => {
    try{
            const user =await userModels.findById(req.params.id)
            res.json(user) 
    }catch(err){
        res.send('Error'+err)
    
    }
    })

router.post('/',async(req,res) =>{
    const user = new userModels({
    name : req.body.name,
    salary : req.body.salary
})
    try{
        const a1 = await user.save()
        res.json(a1)
    }catch(err){
        res.send('error')
    }


})

module.exports = router