import { useState, useRef,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddBox from "../Add/AddBox"
import List from "../List/List";
import DeleteAllTodo from "../Delete/DeleteAllTodo";


export default function TodoList() {

let initialValue = () => {
  const storedItems = localStorage.getItem("allItems");
  return storedItems ? JSON.parse(storedItems) : [];
}
const [allItems, setAllItems] = useState(initialValue);
const [item, setItem] = useState("");
// Jab bhi allItems update hoga, yeh useEffect chalega
//Or localStorage ky ander updated value store ho gaye gi
useEffect(() => {
  localStorage.setItem("allItems", JSON.stringify(allItems));
}, [allItems]);

  let handleInputChange = (event) => {
    setItem(event.target.value);
  };
//add new Todo
  let addNewItem = () => {
    if (item.trim() === "") {
      return;
    }
    const newTodoItem = {
      id: uuidv4(),
      item: item,
      done: false,
    };
    setAllItems([...allItems, newTodoItem]);
    setItem(""); 
  };
//Delete specfic todo
  let deleteTodoItem = (id) => {
    setAllItems(allItems.filter((a) => a.id !== id));
  };
//Delete all todos
let deleteAllTodos = ()=>{
setAllItems([])
alert("Delete all Todos succfully!")
}
//Toggle for mark as
let toggle = (id) => {

  setAllItems(
    allItems.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
};
//Update Todo
let updateTodo = (id)=>{
let updateTodoItem = prompt("please enter you'r todo")

setAllItems(
allItems.map(todo=>(
  todo.id === id ? {...todo, item:updateTodoItem } : todo
))
)
//  console.log(updateTodo)
//   console.log("You'r Todo is update",id)
}
  return (
    <>
      <AddBox
        item={item}
        handleInputChange={handleInputChange}
        addNewItem={addNewItem}
      />
      <DeleteAllTodo
       allItems={allItems}
       deleteAllTodos = {deleteAllTodos}
       />
      <List list={allItems}
       deleteTodoItem={deleteTodoItem}
       updateTodo={updateTodo}
        toggle={toggle} />
    </>
  );
}
