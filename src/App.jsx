import { BrowserRouter } from "react-router-dom"
import 'boxicons/css/boxicons.min.css'
import Sidebar from "./Components/Sidebar"
import Page from "./App/Page"
import Navbar from "./Components/Navbar"
import { Provider } from "react-redux"
import { store } from "./Store/Store"

function App() {
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <div className="flex flex-col w-full h-screen">
    <Navbar />
      <div className="flex h-full w-full">
      <Sidebar />
      <Page />
      </div>
    </div>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
