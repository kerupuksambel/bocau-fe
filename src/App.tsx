import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPageLayout from './components/Layout/LandingPage';


function App() {
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
    </>
  )
}

export default App
