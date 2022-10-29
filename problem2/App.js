import react, {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([]);
  useEffect(()=> {

    fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then(response => response.json())
    .then((response) =>{
      setData(response)
      
      
    })
  },[])
    const dataToReturn = data.filter(logs => logs.title.length >6);
    const dataHold = data.filter(logs => logs.title );
    console.log(data)
    return dataToReturn.length === 0
    ? null
    : (
    <div className="App">
      <h1>Welcome</h1>

      {dataToReturn.map (logs => {
        console.log(logs.title)

        

      })}

    </div>
  );
  
}

export default App;
