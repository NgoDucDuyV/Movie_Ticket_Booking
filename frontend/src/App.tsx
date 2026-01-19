import MainLayout from './Layouts/MainLayout';
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
      <div className="max-w-app mx-auto bg-app-gradient text-white p-4 text-black">
        TEST max-w-app + bg-app-gradient
      </div>
    </>
  )
}

export default App
