import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import './AddBox.css';

const AddBox = ({ item, handleInputChange, addNewItem, inputRef }) => {
  return (
    <div>
      <h3>Add You'r To-Do</h3>
      <TextField
        type="text"
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        name="item"
        placeholder="Enter your todo"
        value={item}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="success"
        onClick={addNewItem}
        disabled={item.trim() === ""}
      >
        Add Todo
      </Button>

  
    </div>
  );
};

export default AddBox;
