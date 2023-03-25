import './App.css';
import Counter from './Components/Counter';
import ScreenComponent from './Components/ScreenComponent';
import UseUseStateHook from './Pages/UseUseStateHook';
import CallFComponent from './Pages/UseEffect/CallFComponent';
import UseUseRefHook from './Pages/UseUseRefHook';
import UseUseMemoHook from './Pages/UseUseMemoHook';
import Main from './Pages/ContextAPI/Main';
import MainContextHook from './Pages/UseContextHook/MainContextHook';
import MainFile from './Pages/LiftingStateUp/MainFile';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ScreenComponent /> */}
      {/* <UseUseStateHook /> */}
      {/* <CallFComponent /> */}
      {/* <UseUseRefHook /> */}
      {/* <UseUseMemoHook /> */}
      <Main />
      <MainContextHook />
      <MainFile />
    </div>
  );
}

export default App;
