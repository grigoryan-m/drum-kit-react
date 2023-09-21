import './App.css';
import Button from './Button';

function App(){
  return(
    <div className='Wrapper'>
      <div className='Panel'>
        <Button hotkey="d" title="Kick" />
        <Button hotkey="f" title="Snare" />
        <Button hotkey="j" title="Clap" />
        <Button hotkey="k" title="Hihat" />
      </div>
    </div>
  );
}

export default App;
