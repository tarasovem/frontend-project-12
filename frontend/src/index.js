import ReactDOM from 'react-dom/client';
import init from './init.jsx';

const app = async () => {
  const chat = ReactDOM.createRoot(document.getElementById('chat'));
  chat.render(await init());
};

app();
