const express=require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.render("index")
})


//Author
router.get("/author",(req,res) => {
    res.render("author/vivaram.js")
})

router.get("/author/new",(req,res) => {
    res.send("connect")
})



module.exports=router