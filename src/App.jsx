import './App.css'
import Folder from './components/Folder';
import explorer from './data/folderData';

function App() {

  return (
    <>
      <div className='main'>
        <Folder explorer={explorer}/>
      </div>
        
    </>
  )
}

export default App;
