"use client"

import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';


const App = () => {
      return <Provider store={store}>App</Provider>;
};

export default App;