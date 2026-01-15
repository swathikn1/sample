import { Button } from 'antd';
import './App.css';
import Hello from './pages/dummy';
import Side from './pages/sbar';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='app'>
      <div className='hello'>
        <Hello />

        <h2>: {count}</h2>

        <Button type='primary'onClick={() => setCount(count + 1)} style={{ margin: '5px' }}> + </Button>
        <Button type='primary'onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>-</Button>
      </div>

      <div className='sidebar'>
        <Side />
      </div>
    </div>
  );
};

export default App;
