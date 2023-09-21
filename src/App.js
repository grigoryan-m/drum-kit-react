import './App.css';
import Button from './Button';

function App(){
  return(
    <div className='Wrapper'>
      <div className='Panel'>
        <Button hotkey="d" className="Kick" title="Kick" />
        <Button hotkey="f" title="Snare" />
      </div>
    </div>
  );
}

export default App;