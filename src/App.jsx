import React from 'react';
//components
import Header from './components/Header/Header';
import Home from "./pages/Home/Home.jsx"

import { useRoutes } from 'react-router-dom';
import routes from './routes.jsx';

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Header />
      {router}
    </>
  )
}

export default App