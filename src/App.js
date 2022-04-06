
import './App.css';
import React,{Suspense,lazy} from 'react'
const Photo=lazy(()=>import('./Photo.js'))
function App() {
  return (
    <div className="App">
     <Suspense fallback={<div>please wait...</div>}>
       <Photo/>
       </Suspense>
    </div>
  );
}

export default App;
