import ReactDOM from 'react-dom/client';
import init from './init.jsx';
import 'bootstrap/dist/css/bootstrap.css';

const app = async () => {
  const chat = ReactDOM.createRoot(document.getElementById('chat'));
  chat.render(await init());
};

app();
