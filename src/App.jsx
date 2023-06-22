import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questions from './components/Body/Questions/Questions';

function App() {
  const [count, setCount] = useState(0)

  return (
		<div className='App px-8 md:px-16'>
			<Header />
			<hr className='my-5' />
			<Body />
			<Questions/>
			<ToastContainer />
		</div>
  );
}

export default App
