import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        // toastOptions={{
        //   className: '',
        //   style: {
        //     border: '1px solid #0FCFEC',
        //     padding: '16px',
        //     color: '#713200',
        //   },
        // }}
      ></Toaster>
    </div>
  );
}

export default App;
