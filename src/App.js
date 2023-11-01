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
import Practice1 from './Pages/Practice/Practice1';
import Header from './ManageContacts/Header';
import AddContact from './ManageContacts/AddContact';
import ContactList from './ManageContacts/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';

function App() {
  const localStorageKey = "contact"
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || []
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])

  const addContact = (data) => {
    setContact([...contact, {id: uuid4(), data}])
  }
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    })
    setContact(updatedList);
    
    // console.log("Button Click");
  }
  return (
    <>
    {/* // <Provider store={store}> */}
    <div className="App">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
      {/* <Practice1 /> */}
      {/* <BookContainer /> */}
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
    {/* </Provider> */}
    </>
  );
}

export default App;
