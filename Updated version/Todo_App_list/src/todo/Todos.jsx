
import Checkbox from '@mui/material/Checkbox';
import { useState  } from "react"
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';




const Todos = () => {

    const [todos, settodos] = useState();
    const [value , setvalue] = useState([]); 
    const [edit , setedit]  = useState(); 
    const [toggle , settoggle] = useState(false)

    

      
    const addlist =() =>{
        if(!todos){
           alert('Please Fill the field first')
            }
            
       else if(todos && toggle) {
               setvalue( value.map((val) =>{
                if(val.id === edit){
                  return {...val , name: todos}
                }return val
                
               
              
              }
             )
            
            )
            setedit([])
            settodos('')
            settoggle(false)
            }
            
       else{
          
              const addinput ={
                id : new Date().getTime().toString(),
                name : todos,
              }


            setvalue( [...value , addinput ])
              settodos('')
            
           }
          
            }
        
        const delet = (ind) =>{
        const update =  value.filter((val ) =>{
            return (
              val.id !== ind
            )
          }
          )
          setvalue(update)
       
        }
      const handelediting =(ind) =>{
        const editcont = value.find((val) =>{
          return(
            val.id === ind
          )
        }
      )
      settodos(editcont.name)
      settoggle(true)
      setedit(ind)
      }




      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
    return (
      <div>


              <input type="text " placeholder='Add Todos'  
              value={todos}
              className='todo'
              name='todos'
              onChange={(e) =>settodos(e.target.value)}
              
              />
              <button type='submit'
              onClick={addlist}
              
              className='btn'
              > <AddIcon /> </button>


                 {
                 value.map((val ) =>  {
                 
                 return(
                 <div   key ={val.id}>
                      <div className="card-body">
                      <Checkbox {...label} />
                      <h4 className="card-title">{val.name}</h4>
                        
                     <div className='mui'>  
                       <Fab color="secondary" aria-label="edit" size='small' onClick={() => handelediting(val.id)}>
        <EditIcon />
      </Fab>
      <Fab color="warning" aria-label="Delete" size='small' onClick={() => delet(val.id)}>
        <DeleteIcon />
      </Fab>
      </div>
                     
                        
                      </div>
                    </div> 
                    )}
                    )}

        </div>






    );
  };
export default Todos
