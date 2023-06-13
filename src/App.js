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
import UseReducerHook from './Pages/UseReducerHook/UseReducerHook';
import AddAndDeleteData from './Pages/UseReducerHook/AddAndDeleteData';
import AddAndDeleteNewData from './Pages/UseReducerHook/AddAndDeleteNewData';
import AxiosPostMethod from './Pages/AxiosFile/AxiosPostMethod';
import UseMemoHook from './Pages/MemoAndCallback/UseMemoHook';
import UseCallbackHook from './Pages/MemoAndCallback/UseCallbackHook';
import { Provider } from 'react-redux';
import store from './Pages/ReactRedux/Store';
import BookContainer from "./Pages/ReactRedux/BookContainer"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer />
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseReducerHook /> */}
      {/* <AddAndDeleteData /> */}
      {/* <AddAndDeleteNewData /> */}
      {/* <AxiosPostMethod /> */}
      {/* <Counter /> */}
      {/* <ScreenComponent /> */}
      {/* <UseUseStateHook /> */}
      {/* <CallFComponent /> */}
      {/* <UseUseRefHook /> */}
      {/* <UseUseMemoHook /> */}
      {/* <Main /> */}
      {/* <MainContextHook /> */}
      {/* <MainFile /> */}
    </div>
    </Provider>
  );
}

export default App;
