import './App.css'
import Header from './Components/Header/Header'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
      <>
      <ErrorBoundary>
      <Header/>
      </ErrorBoundary>
      </>
  )
}

export default App
