import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPageLayout from './components/layout/LandingPage';
import { Toaster } from './components/ui/shadcn/toaster';
import Dashboard from './pages/user/Dashboard';
import DashboardLayout from './components/layout/Dashboard';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
function App() {
  // TODO: routes separated in a new dedicated file
  const routes = [
    { path: '/', element: <Home />, name: 'Home', layout: LandingPageLayout },
    { path: '/user/dashboard', element: <Dashboard />, name: 'Dashboard', layout: DashboardLayout }

  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, element, name, layout: Layout }) => (
            <Route key={name} path={path} element={<Layout>{element}</Layout>} />
          ))}
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  )
}

export default App
