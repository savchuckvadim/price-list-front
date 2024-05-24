import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from '@/components/PriceList/PriceList';

const App = ({ prices,  }) => {



  return <PriceList prices={prices} />

}

export default App;
