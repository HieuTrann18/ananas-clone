import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
          <Home />
      </Layout>

    </>
  )
}

export default App
