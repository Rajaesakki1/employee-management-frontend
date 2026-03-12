import './App.css'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {
  

  return (
    <> 
    <BrowserRouter> 
    <HeaderComponent/>
    <Routes>
      {/* http://localhost:3030/ */}
    
    <Route path='/' element ={<ListEmployeeComponent/>}></Route>
     {/* http://localhost:3030/employees */}
      <Route path='/employees' element ={<ListEmployeeComponent/>}></Route>
      {/* http://localhost:3030/add-employee */}
      <Route path='/add-employee' element ={<EmployeeComponent/>}></Route>
       {/* http://localhost:3030/update-employee/1 */}
      <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
    </Routes>
    <FooterComponent/>
    
     
   </BrowserRouter>
    
    </>
  )
}

export default App
