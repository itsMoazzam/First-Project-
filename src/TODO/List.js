import React ,{useState , useEffect} from 'react';
import Todo from './Todo';
import { FiTrash } from "react-icons/fi";
import 'animate.css';
const localdata = ()=>{
    const list = localStorage.getItem("my todo" );

    if(list ){
        return JSON.parse(list);
    }else{
        return [];
    }
}
const List = () => {
    const [first, setfirst] = useState('');
    const [second, setsecond] = useState(localdata());
useEffect (() => {
    localStorage.setItem("my todo" , JSON.stringify(second))
}, [second]);


    const listss =()=> {
        if(!first){
            alert('Plzzz Enter List name...')
        }else{
        setsecond([...second, first]);
        setfirst('');
    }

    }
    const del =(id)=>{
        const update = second.filter((val,ind) => {
            return ind !== id;
            })
        setsecond(update);
    }



  return (
    <>
    <div className='main'>
    <div className='sec'>
    <input className='inpu' type="text" placeholder='Enter List name '
    value={first}
    onChange={(e) => setfirst(e.target.value)}
    />
    <button className='ad' onClick={listss}>create list</button>
    </div>
    <div  className='set'>


{   second.map((val , index) => {
        return(
            <>
            <div className='row '>
            <div className='free' key={index}>
            <h1  contentEditable ='true'>{val}  
            <button onClick={() =>del(index)}  className='btnn'>
            <FiTrash />
            </button></h1>  
            <Todo />
            </div>
            </div>

            </>
        )

})
}    


    </div>
    </div>
    </>
  )
}

export default List