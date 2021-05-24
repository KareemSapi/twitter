
import React, {useContext} from 'react';
//import {firebaseAuth} from '../provider/AuthProvider'
import Menu from '../views/Menu';
import '../css/Home.css';
import Feed from '../views/Feed'
import Widgets from '../views/Widget'

const Home = (props) => {

    //const {handleSignout,} = useContext(firebaseAuth)

  return (
    <div className='container'>

      <Menu />
      <Feed />
      <Widgets />

     {/* <button onClick={handleSignout}>sign out </button>*/} 
    </div>
  );
};

export default Home;