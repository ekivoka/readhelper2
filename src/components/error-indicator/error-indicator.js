import './error-indicator.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 1200,
    draggable: true,
});

const notify = (mes) => toast.error(mes);

const ErrorIndicator = (message) => {
    notify(message);
}



export default ErrorIndicator;