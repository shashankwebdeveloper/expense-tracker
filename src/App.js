
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddNewTransaction from './components/AddNewTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider >
    <Header/>
    <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <Transactionlist/>
     <AddNewTransaction/>
    </div>

    </GlobalProvider>
  );
}

export default App;
