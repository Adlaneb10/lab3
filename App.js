
import { useState } from "react";
import './App.css'

function EntryForm({ addEntryToPhoneBook }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ name, phoneNumber, email });
  };
  return (
    <div className="bodyTop">
      <form onSubmit={handleSubmit}>
        <input
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
        />
        <input
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

  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div className="App">
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <div className='directory'>
          <div className='upperDir'>
            <p>Search Contact by Mobile No:</p>
            <input type="text" id="search"></input>
          </div>
          <div className='lowerDir'>
            <h1>Contacts Summary</h1>
            <table className="tableDiv">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
              {entries.map((entry)=> (
                <tr>
                  <th>{entry.name}</th>
                  <th>{entry.phoneNumber}</th>
                  <th>{entry.email}</th>
              </tr>
              ))}

            </table>
          </div>
        </div>
    </div>
  );
}

export default App;
