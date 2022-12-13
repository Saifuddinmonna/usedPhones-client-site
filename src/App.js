import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';


function App() {
  return (
		<div className=" bg-slate-200">
			<div className="max-w-[1440px] mx-auto bg-white ">
				<RouterProvider router={router}></RouterProvider>
				<Toaster></Toaster>
			</div>
		</div>
  );
}

export default App;
