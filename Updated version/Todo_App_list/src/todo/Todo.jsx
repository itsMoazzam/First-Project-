import { useState, useEffect } from "react";
import Todos from "./Todos";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./Navbar";

const localdata = () => {
  const item = localStorage.getItem("value");

  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};

const Todo = () => {
  const [todos, settodos] = useState();
  const [value, setvalue] = useState(localdata());
  const [edit, setedit] = useState();
  const [toggle, settoggle] = useState(false);

  const addlist = () => {
    if (!todos) {
      alert("Please Fill the field first");
    } else if (todos && toggle) {
      setvalue(
        value.map((val) => {
          if (val.id === edit) {
            return { ...val, name: todos };
          }
          return val;
        })
      );
      setedit([]);
      settodos("");
      settoggle(false);
    } else {
      const addinput = {
        id: new Date().getTime().toString(),
        name: todos
      };
      console.log("values----->", value)
      console.log("values----->", ...value)

      setvalue([...value, addinput]);
      settodos("");
    }
  };

  const delet = (ind) => {
    const update = value.filter((val) => {
      return val.id !== ind;
    });
    setvalue(update);
  };
  const handelediting = (ind) => {
    const editcont = value.find((val) => {
      return val.id === ind;
    });
    settodos(editcont.name);
    settoggle(true);
    setedit(ind);
  };

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  return (
    <div>
      <Navbar />
      <div className="front">
        <input
          type="text "
          className="top"
          placeholder=" Enter your list name here"
          value={todos}
          name="todos"
          onChange={(e) => settodos(e.target.value)}
          autoComplete="off"
        />

        <button className="bt " onClick={addlist}>
          Add list
        </button>
      </div>
      <div className="flex">
        {value.map((val) => {
          return (
            <div className="card" key={val.id}>
              <div className="card-body">
                <h3 className="card-title">{val.name}</h3>
                <div className="mui">
                  <Fab
                    color="secondary"
                    size="small"
                    aria-label="edit"
                    onClick={() => handelediting(val.id)}
                  >
                    <EditIcon />
                  </Fab>
                  <Fab
                    color="warning"
                    size="small"
                    aria-label="delete"
                    onClick={() => delet(val.id)}
                  >
                    <DeleteIcon />
                  </Fab>
                </div>
              </div>

              <Todos />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
