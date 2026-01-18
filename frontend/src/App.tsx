import MainLayout from './Layouts/MainLayout';
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </>
  )
}

export default App
