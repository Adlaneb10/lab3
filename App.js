
import { useState, useEffect } from "react";
import './App.css'

function EntryForm({ addEntryToPhoneBook }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ name, phoneNumber, email });
    setFormErrors(validate(name, phoneNumber, email));
    setIsSubmit(true);
  };
  useEffect(() => {
    if(Object.keys(formErrors).length == 0 && isSubmit){
      console.log(formErrors);
    }
  })
  const validate = (checkName, checkNum, checkEmail) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]{2,}$/i; 
    if (!checkName) {
      errors.checkName = "Name is required"
    }
    if (!checkNum) {
      errors.checkName = "Number is required"
    }
    if (!checkEmail) {
      errors.checkName = "Email is required"
    }
    return errors;
  };

  return (
    <div className="bodyTop">
      <form onSubmit={handleSubmit}>
        <input
          maxLength={20}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="number"
          id="number"
          placeholder="Mobile Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          maxLength={10}
        />
        <input
          maxLength={39}
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}



function App() {
  const [entries, setEntries] = useState([]);

  const [search, setSearch] = useState("");

  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
       console.log(entries)
      )
    );
  };

  const [show, setShow] = useState(true);


  return (
    <div className="App">
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <div className='directory'>
          <div className='upperDir'>
            <p>Search Contact by Mobile No:</p>
            <input type="text" id="search" onChange={(e) => setSearch(e.target.value)}></input>
            {}
          </div>
          <div className='lowerDir'>
            <h1>Contacts Summary</h1>
            <table className="tableDiv">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>

              {entries.filter((row) =>
                !search.length || row.name
                .toString()
                .toLowerCase()
                .includes(search.toString().toLowerCase()) 
                )
              .map((entry)=> (
                <tr>
                  <th>{entry.name}</th>
                  <th>{entry.phoneNumber}</th>
                  <th>{entry.email}</th>
              </tr>
              ))}
              
            </table>
          </div>
        </div>
        <div className ="test" id="test" >
          {show && <p>hello</p>}
                
        {/* <button onClick={showDiv()}></button> */}
          <button onClick={() => setShow(!show)}>Show/hide</button>
        </div>
    </div>
  );
}

export default App;
