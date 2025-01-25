import { useEffect, useState } from "react";
import ThemeSwithButton from "./components/ThemeSwithButton"
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { FaUserEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";



function App() {
const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])
const [showFinished, setshowFinished] = useState(true)


useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){

    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
}, [])



const saveToLS = () =>{
  localStorage.setItem("todos", JSON.stringify(todos))
}

const toggleFinished = (e) =>{
setshowFinished(!showFinished)
}



const handleEdit = (e, id) =>{
  let t = todos.filter(i=>i.id === id)
  setTodo(t[0].todo)

  let newTodos =todos.filter(item=>{
    return item.id!==id
  })
  setTodos(newTodos)
  saveToLS()
}

const handleDelete = (e, id) =>{
  let newTodos =todos.filter(item=>{
    return item.id!==id
  })
  setTodos(newTodos)
  saveToLS()
}

const handleAdd = () =>{
setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
setTodo("")
saveToLS()
}

const handleChange = (e) =>{
setTodo(e.target.value)
}

const handleCheckbox = (e) =>{
let id = e.target.name
let index = todos.findIndex(item=>{
  return item.id === id;
  
})

let newTodos =[...todos];
newTodos[index].isCompleted = !newTodos[index].isCompleted;
setTodos(newTodos)
saveToLS()
}






  return (
    <>
      <Navbar />
      <ThemeSwithButton/>
      <div className="mx-3 md:container md:mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 my-5 rounded-xl p-6 min-h-[80vh] md:w-[40%]">    
      <h1 className="font-bold text-center text-3xl text-yellow-200">|| Your Daily 🚀 Todo Application || </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-fuchsia-800 "> Enter Your Work 💻 </h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className="w-full rounded-xl px-5 py-2" />
          <button onClick={handleAdd} disabled = {todo.length<3} className="bg-green-500 hover:bg-blue-800 p-4 py-2 mx-3 text-white rounded-full  font-bold">
            Save
          </button>
          </div>
        </div>
        <input type="checkbox" className="" onChange={toggleFinished} checked={showFinished}/> 
        <span className="font-bold  text-fuchsia-900 my-3">Finished Todos &#128513; </span>
        <h2 className="text-xl font-bold text-yellow-300 flex justify-center">|| My Daily Todo 🚁 ||</h2>
        <div className="todos">
          {todos.length === 0 && <div className="font-bold text-yellow-800 m-5 flex justify-center ">No todos to display @ Enter It &#128512; </div> }
          {todos.map(item=>{           
          return (showFinished || !item.isCompleted) &&  <div key={item.id} className="todo flex my-2 justify-between">
            <div className="flex gap-4"> 
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={todo.isCompleted}   />
            <div className={item.isCompleted?"line-through":""}>            
           {item.todo}
            </div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-green-400 hover:bg-blue-600 p-2 py-1 text-white rounded-md  font-bold mx-2">
              <FaUserEdit />
              </button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-green-400 hover:bg-blue-600 p-2 py-1 text-white rounded-md  font-bold mx-2">
              <MdAutoDelete />
              </button>
            </div>
          </div>         
        })}
        </div>
      </div>
    </>
  );
}

export default App;
