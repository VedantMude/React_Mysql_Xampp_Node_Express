import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/users')
     .then((res) => res.json())
     .then((data) => setData(data))
     .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5" style={buttonstyle}>
      <h1 className="text-center mb-5">Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.Id}</td>
              <td>{d.Email_Id}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;