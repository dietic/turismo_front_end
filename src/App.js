import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8333/api/rooms`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log('data', data);


  return  (
    <div className="container">
      <nav className="navbar">
        <div className="logo"></div>
      </nav>
      <h1></h1>
      <ul>
      {data && data.length > 0 &&
        (
          data.map((el) => {
            return (
              <li>{el.number}</li>
            )
          })
        )
      }
      </ul>
    </div>
  );
}

export default App;
