/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import {firebaseAuth} from './firebase/config';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from '../src/comps/Modal';
import Login from './Login';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [imgId, setImgId] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [hasAccount, setHasAccount]= useState(false);

const clearInputs = ()=>{
  setEmail("");
  setPass("");
}
const clearErrors=()=>{
  setEmailError("");
  setPassError("");

}
  const handleLogin = ()=>{
    clearErrors();
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch((error)=>{
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPassError(error.message);
            break;
        }
      });
  };

  const handleSignup=()=>{
    clearErrors();
    firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .catch((error)=>{
      switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPassError(error.message);
          break;
      }
    })
  }

  const handleLogout=()=>{
    firebaseAuth.signOut();
  }

  const authListener=()=>{
    
    firebaseAuth.onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

useEffect(()=>{
  authListener();
},[])

  return (
  
    <div className="App">
      {user ? (
      <>
      <Title handleLogout={handleLogout}/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} setImgId={setImgId}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} imgId={imgId}/>}
      </>):(
        <Login email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPass} 
      handleLogin={handleLogin} 
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError = {emailError}
      passwordError={passError}
      />
      )}
      
    </div>
  );
}

export default App;
