import RouterProvider from './router/RouterProvider'
import { GlobalStyles } from './components/styled/GlobalStyles'
import { Provider } from 'react-redux'
import store from './store'
function App() {

  return (
    <>
     <Provider store={store}>
       <GlobalStyles />
       <RouterProvider />
     </Provider>
    </>  
   
   
  )
}

export default App
