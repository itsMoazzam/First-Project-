import React ,{useState}from 'react'
import { FiTrash } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const Todo = () => {
  const [todo, settodo] = useState('');
  const [item, setitem] = useState([]);
  const [edited, setedited] = useState('');
  const [toggle, settoggle] = useState(false);
const add =()=>{
  if(!todo){
    alert ('Enter TODO...')
  }else if(todo && toggle){
    setitem(item.map((val) => {
        if(val.id === edited){
          return{...val,name:todo};
        }return val;
    }))
    settodo('');
setedited([]);
settoggle(false);
  }
  
  
  else{
    const sim = {
      id:new Date().getTime().toString(),
      name:todo
    }
  setitem([...item, sim]);
  settodo('');
}
}
const edit = (index) =>{
        const isedit = item.find((val) => {
            return val.id === index;
        })

settodo(isedit.name);
setedited(index);
settoggle(true);

}
const del=(index)=>{
  const update = item.filter((val) => {
    return val.id !== index;
  })
  setitem(update);
}



  return (
    <>
    <div className='next'>
    <input className='tod' type="text" placeholder='Enter Todo title'
value={todo}
  onChange={(e)=>settodo(e.target.value)}
  
/>
{ toggle ? (<span onClick={add}  className='btn' >
        <FiEdit /></span>) 
        :
(<span onClick={add} className='btn' >
<FiPlus  /></span>)
}
{item.map((val) => {
  return(
    <>
    <div className='fre' key={val.id}>
    <input type="checkbox" className="check" autocomplete="off" />
    <p >{val.name}
     
     <span  onClick={()=>del(val.id)} className='btnns' comments='delet'>
      <FiTrash />

      </span><span  className='btnns' onClick={() => edit(val.id)}>
        <FiEdit /></span> </p>
    
    </div>

    </>
  )
})}


</div>
    
  


    

    
            
    </>
  )
}

export default Todo