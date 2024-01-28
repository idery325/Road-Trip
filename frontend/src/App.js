/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 데이터를 가져올 API 엔드포인트
    const apiUrl = 'http://localhost:8000/api/';

    // 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData 함수 호출 (컴포넌트가 마운트될 때 한 번만 호출)
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from Django:</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.data_field}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

