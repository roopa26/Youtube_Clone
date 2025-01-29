import './App.css'
import Body from './Components/Body/Body'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
      <>
      <ErrorBoundary>
      <Header/>
      <div className='flex m-4 h-[80%] overflow-hidden'>
        <Sidebar/>
        <Body/>
      </div>
      </ErrorBoundary>
      </>
  )
}

export default App
