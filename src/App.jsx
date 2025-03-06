
import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './Components/Body/Body'
import Header from './Components/Header/Header'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App() {
  return (
      <Provider store={appStore}>
          <Header/>
          <Outlet/> 
      </Provider>
  )
}

export default App
