
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Phone Directory</h1>
        <div className='bodyTop'>
          <div className='inputs'>
              <input type="text" placeholder="Contact Name" id="contact"/>
              <input type="number" placeholder="Mobile Number" id="number"/>
              <input type="email" placeholder="Email" id="email"/>
              <button>Add Contact</button>
          </div>
        </div>
        <div className='directory'>
          <div className='upperDir'>
            <p>Search Contact by Mobile No:</p>
            <input type="text" id="search"></input>
          </div>
          <div className='lowerDir'>
            <h1>Contacts Directory</h1>
            <table>
              <tr>Name</tr>
            </table>
          </div>
        </div>
    </div>
  );
}

export default App;
