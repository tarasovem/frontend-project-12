import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default App;
