import { Button } from 'antd';
import './App.css'
import Hello from './api/posts';
import Side from './api/sbar';


function App(){
  return(
    <div className='app'> 
    <div className='hello'>
      <Hello />
      <h1 id='hello1'>Button</h1>
      <Button type='primary'>Click Me</Button>
</div>

  <div className='sidebar'>
    <Side />
  </div>

</div>
  );
}

export default App;