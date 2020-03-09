import Title from './components/Title/Title';
import './global.css'

const root = document.getElementById('root');

if (root)
    root.innerHTML = new Title('Trecko').render().outerHTML;