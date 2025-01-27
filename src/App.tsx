import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPageLayout from './components/Layout/LandingPage';
import { Toaster } from './components/UI/shadcn/toaster';


function App() {
  // TODO: routes separated in a new dedicated file
  const routes = [
    { path: '/', element: <Home />, name: 'Home', layout: LandingPageLayout }

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
