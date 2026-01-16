import './App.css'
import Hello from './pages/dummy';
import '../src/pages/dummy.css'
// import Side from './pages/sbar';


function App(){
  return(
    <div className='app'> 
    <div className='hello'>
      <h1>Todo List</h1>

        <Hello />
</div>
  {/* <div className='sidebar'>
    <Side />
  </div> */}

</div>
  );
}

export default App;