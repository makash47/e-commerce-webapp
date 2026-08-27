import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router = {router}/>
    </QueryClientProvider>
    </>
  )
}

export default App