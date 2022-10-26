import React ,{useState} from 'react';


// import dropdown annd navbar component
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar'



export default function App() {
  
  const [list , setList] = useState(['Coffee','Tea','Samoosa'])
  const [inputValue , setInputValue] = useState('')

  function handleChange(e){
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  function addToList(){
    setList( prevList =>{
      return[...prevList , inputValue]
    }

    )
  }
  
    return (
      <div className="App">
        <Navbar />
        <div className='input-box-container'> 
          <input className='input-box'
            type="text"
            placeholder="add somthing to the dropdown"
            onChange={handleChange}
            value={inputValue}/>
            <button onClick={addToList} >add</button>
        </div>
        <Dropdown list={list}/>
      </div>
    )
  
}


