const express= require ("express");
const { create_todo, update_todo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");
        const app=express();


        app.use(express.json());
        app.use(cors());


app.post("/todo", async function(req,res){
        const createPayload=req.body;
        const parsePayload= create_todo.safeParse(createPayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg:" You sent wrong input",
            })
            return ;
        }

        // put it in mongo db
      await todo.create ({
        title: createPayload.title,
        desc:createPayload.desc,
        completed: false
      })
      res.json({
        msg: "To-do Created"
      })
})

app.get("/todos", async function(req,res){
    const todos= await todo.find({});
   res.json({
    todos
   })
})


app.put("/completed", async function(req,res){
    const updatePayload=req.body;
    const parsePayload=update_todo.safeParse();
    if(!parsePayload.success){
        res.status(411).json({
            msg:" You sent wrong input",
        })
        return ;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        msg: "Todo marked as completed"
    })

})

app.listen(3000);