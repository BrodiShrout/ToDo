import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Categories from './Components/Categories/Categories';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer';
import ToDo from './Components/ToDo/ToDo';
import AuthProvider from './Context/AuthContext';
import Login from './Components/Auth/Login';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>

      <Navigation/>
      
      <Routes>
          <Route path='/' element={<ProtectedRoute> <ToDo /> </ProtectedRoute> } />
          <Route path='/ToDo' element={<ProtectedRoute> <ToDo /> </ProtectedRoute>} />
          <Route path='/Categories' element={<ProtectedRoute> <Categories /> </ProtectedRoute>} />
          <Route path='/About' element={<About />} />
          <Route path='/login' element={<Login/>} />

          <Route path ='*' element={<NotFound />}/>

        </Routes>
    <Footer/>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
