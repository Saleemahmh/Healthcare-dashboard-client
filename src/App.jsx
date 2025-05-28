
import './App.css'
import DashboardMainContent from './components/DashboardMainComponent/DashboardMainContent'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='appcontainer'>
    <div className='App'>
      
         <Header></Header>
         <DashboardMainContent></DashboardMainContent>
      </div>
    </div>
  )
}

export default App
