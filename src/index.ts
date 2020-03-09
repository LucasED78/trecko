import App from './components/App/App';
import './global.css'

const root = document.getElementById('root');

if (root)
    root.appendChild(new App().render())