console.log("Welcom")

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const {v4 : uuidv4} = require('uuid')


const listTodos=[];
let idglobal=0
//******************************************************* */
app.get("/list/:id",(req,res)=>{
    const id =req.params.id

    listTodos.forEach((ele,i)=>{
        if (id ==ele.id){
            res.json(listTodos[i])

        }
    })
})



//************************************************************* */
app.get("/list",(req,res)=>{
    res.json(listTodos)

   
});

//************************************************************* */
app.post("/todo",(req,res)=>{
    // const todo={id:req.body.id,todo:req.body.todo,
    //     description:req.body.description,deadline:req.body.deadline
    // }
    // idglobal+=1
    const newId = uuidv4()
    console.log(newId);
    const todo={id:newId ,todo:req.body.todo,
             description:req.body.description,deadline:req.body.deadline
         }

    
    listTodos.push(todo)
    res.json(`"Success create new todo"`)
});
//***************************************************************** */
app.put("/todo/:id",(req,res)=>{
 const newtodo=req.body.todo;
 console.log(newtodo)
 const id =req.params.id
 console.log(id)
 listTodos.forEach((ele,i)=>{
    if(id==ele.id){
        listTodos[i].todo=newtodo;
        res.json(`Success Update List Todo`)
    }
});
 
});
//***************************************************************** */
app.delete("/list/:id",(req,res)=>{
    const id =req.params.id
    listTodos.forEach((ele,i)=>{
        if(id==ele.id){
            listTodos.splice(i,1);
            res.json("Delete this todo")
        }
    })
})

//********************************************************************* */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
