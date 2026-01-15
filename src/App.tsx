import './App.css';
import Hello from './pages/dummy';
// import Side from './pages/sbar';
import Card1 from './pages/card';

const App: React.FC = () => {
  const data = [
    {
      title: "hello",
      description: "Flowers are the beautiful, colorful reproductive parts of plants varying immensely in form, size, and scent, serving vital roles in nature for pollination and seed production.",
    },
    {
      title: "roses",
      description: "layered petals in colors like red, pink, yellow, and white"
    },
    {
      title:"sunflower",
      description:"bright yellow petals"
    },
    {
      title:"lily",
      description:"Usually long, narrow, and arranged alternately or in whorls."
    }
  ]
  return (
    <div className='app'>
      <div className='hello'>
        <Hello />
              </div>

        <div className='card-container'>
          {data.map((item,index)=>(
            <Card1 
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      
      
    {/* <div className='sidebar'>
        <Side />
      </div> */}
    </div>
  );
};

export default App;
