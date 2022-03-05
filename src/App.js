import "./App.css";
import Balance from "./Balance";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";
import Transactional from "./Transactional";
import TransactionalList from "./TransactionalList";

function App() {
  return (
    <GlobalProvider > 
    <div className="App">
      <Header /> 
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionalList />
        <Transactional/>
      </div>
    </div>
      
    </GlobalProvider>
  );
}

export default App;
