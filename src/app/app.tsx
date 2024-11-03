"use client"

import Navbar from '@/components/Navbar';
import { store } from '@/redux/store';
import React, { useState } from 'react';
import { Provider } from 'react-redux';


const [showCart,setShowCart]=useState(false)
const App = ({children}:{children: React.ReactNode}) => {
      return <Provider store={store}>
            <Navbar setShowCart={setShowCart}/>
            {children}
      </Provider>;
};

export default App;