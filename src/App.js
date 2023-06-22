import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  
  const [state, setState] = useState(0);
  

  useEffect(() => {
    // const url = 'http://localhost/colorHuntApi/public/api/getoutwardchallen/12'
    const url = process.env.REACT_APP_API_URL + '/getoutwardchallen/12'
  
    console.log(url);

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        setState(data)
        // Handle the API response data here
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the API call
        console.error('Error: ', error);
      });
  });
  
  return (
    <div className="App">
      


    </div>
  );
}

export default App;
