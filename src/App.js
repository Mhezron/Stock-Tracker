import './App.css'
import StockContainer from './containers/StockContainer'


const stocks = ['GOOG', 'AAPL', 'FB', 'AMZN', 'NFLX']

const App = () => {
  return (
    <div className='App'>
    <div style={{ backgroundImage: "url(/currency.jpg)" }}>
      <h1>Stock Tracker</h1>
      <div class='stocks'>
        {stocks.map(stock => <StockContainer key={stock} stock={stock} />)}
      </div>
    </div>
    </div>
  )
}

export default App
