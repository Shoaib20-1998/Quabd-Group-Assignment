
import styled from '@emotion/styled';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Pages/AllRoutes';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';

function App() {
  return (
    <DIV className="App">
      <Navbar />
     <AllRoutes />
    </DIV>
  );
}

const DIV= styled.div`
  

  width: 80%;
  margin: 80px auto;
`
export default App;
