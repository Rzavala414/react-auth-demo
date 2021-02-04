import Signup from './Signup.js';
import {Container} from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext.js';

function App() {
  return (
    <AuthProvider>
      <Container 
        className='d-flex align-items-center justify-content-center' 
        style={{minHeight:'100vh'}}
        >

        <div className='w-100' style={{ maxWidth:'400px'}}>

          <Signup></Signup>

        </div>
      </Container>
      
    </AuthProvider>
    )
}

export default App;
