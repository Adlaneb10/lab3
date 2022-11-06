
import react, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [repos, setRepos] =useState([]);
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = document.getElementById("username").value;
    setUserName(x);
    

    fetch('https://api.github.com/users/'+userName)
    .then(response=>response.json())
    .then((response)=>{
      setData(response)
      
    })

    fetch(data.repos_url)
    .then(response => response.json())
    .then((response) => {
      setRepos(response)
    })
    console.log(data)
    console.log(repos)
  }
    


  return (
    <div className="App">
      <div className='nav'>
        <div className='navLeft'>
          <input id="username" type="text"   ></input>
        </div>
        <div className='navRight'>
          <button onClick={handleSubmit}>Search</button>
        </div>

      </div>
      <div className='holder'>
        <div className='boxLeft'>
          <div className='innerLeft'>
            <h3>User Profile</h3>
          </div>
          <div className='innerLBottom'>
            <div className='imageLB'>
              <img src={data.avatar_url} height="200px" width={"250px"}/>
            </div>
            <div className='nameKey'>
              <p>Name: {data?.name || ''}</p>

            </div>
            <div className='unKey'>
              <p>Username: {data?.login || ''}</p>
            </div>
            <div className='emailKey'>
              <p>Email: {data?.email || ''}</p>
            </div>
            <div className='locationKey'>
              <p>Location: {data?.location || ''}</p>
            </div>
            <div className='gistKey'>
              <p>Number of Gists: {data?.public_gists || ''}</p>
            </div>
          </div>
        </div>
        <div className='boxRight'>
          <div className='innerRight'>
            <h3> User Repos</h3>
            <div className='innerRBottom'>
               {repos.map((repo, index) => {
                return(
                <div class="repoHolder">
                  <tr>
                    <th key={index}>
                      Name: {repos[index].name} 
                      <br></br>
                      <br></br>
                      Description: {repos[index].description}
                    </th>    
                    
                  </tr>
                </div>
                )

               })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
