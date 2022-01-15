import './App.css';
import './NAYC_banner.png'
import Card from './Card';

function App() {
  return (
    <>
    <div className='header'>
     <img className='main-banner' src={require("./NAYC_banner.png")} alt="Neural Apes Yacht Club" />
     <h2>2222 Neural Network AI Apes on Solana!</h2>
     <a href="https://launchmynft.io/collections/3HvXEuwpyTZSyjEUjzu8kAPJ1DnjQMXq14rGN4wX1V9G/PlmfEwl1VNtast2oLQiV" target="_blank" rel="noreferrer">
     <button className='btn inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'>Stealth Mint Live!</button>
     </a><br/>
     <a href="https://twitter.com/neuralapesyc" target="_blank" rel="noreferrer"><img className="h-full inline-flex items-center" src={require("./assets/icons8-twitter-50.png")} alt="Twitter @NeuralApesYC"></img></a>
    </div>
    <div className='card-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
      <Card />
    </div>
    <h4 className='text-center text-white'>Copyrights {new Date().getFullYear()} Neural Aped Yacht Club.</h4>
    </>

  );
}

export default App;
