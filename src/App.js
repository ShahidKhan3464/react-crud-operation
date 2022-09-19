import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      username: 'Shahid',
      designation: 'React Developer',
      location: 'lahore'
    },
    {
      id: 2,
      username: 'Ali',
      designation: 'Php Developer',
      location: 'lahore'
    },
    {
      id: 3,
      username: 'Basit',
      designation: 'Flutter Developer',
      location: 'lahore'
    },

  ])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>Crud App</h1>
      <Routes>
        <Route exact path='/' element={<Home data={data} setData={setData} />} />
        <Route exact path='/create' element={<Create data={data} setData={setData} />} />
      </Routes>
    </div>
  );
}

export default App;