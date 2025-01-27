import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import "./List.css"; // Import CSS file

const List = ({ list, deleteTodoItem, toggle ,updateTodo}) => {
  return (
    <div className="table-container">
      <h2 className="table-title">All Todos</h2>
      <table className="todo-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Todo Name</th>
            <th>Mark As</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {list.map((todo, index) => (
              <motion.tr
                key={todo.id}
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
                className={todo.done ? "done" : ""}
              >
                <td>{index + 1}</td>
                <td>{todo.item}</td>
                <td>
                  <button
                    onClick={() => toggle(todo.id)}
                    className={`mark-button ${todo.done ? "done-btn" : "pending-btn"}`}
                  >
                    {todo.done ? <CheckIcon /> : <CloseIcon />}
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteTodoItem(todo.id)} className="delete-button">
                    <DeleteIcon />
                  </button>
                </td>
                <td>
                  <button  onClick={() => updateTodo(todo.id)} className="update-btn">Update</button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default List;
