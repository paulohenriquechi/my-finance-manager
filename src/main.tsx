import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import AuthLayout from './layouts/AuthLayout.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Expenses from './pages/Expenses.tsx';
import Profile from './pages/Profile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout children={<Dashboard />} />,
  },
  {
    path: "/expenses",
    element: <AuthLayout children={<Expenses />} />,
  },
  {
    path: "/profile",
    element: <AuthLayout children={<Profile />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
