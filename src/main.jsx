import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



// React Router :
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes';
import AuthProvider from './Authentication/AuthProvider/AuthProvider';


// TanStack query
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()




createRoot(document.getElementById('root')).render(
  <StrictMode>

{/* Router */}
<div className='bg-black'>

<AuthProvider>

{/* TansTAck Query  */}
<QueryClientProvider client={queryClient}>

<RouterProvider router={router} />


</QueryClientProvider>


</AuthProvider>


</div>



  </StrictMode>,
)
