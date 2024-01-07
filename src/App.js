import './App.scss';
import Navigation from './Navigation';
import CreditCard from './components/CreditCard';

const LINKS = [
  { label: 'Website', to: 'https://www.robinwieruch.de/' },
  { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];

const cardInfo = [
  {
    name: "Suraj Thadarai",
    expirationDate: "12/99",
    creditCardNumber: "1234 5678 9101 9632",
    bankName: "IDBI Bank Ltd"
  },
  {
    name: "Neer Thadarai",
    expirationDate: "12/99",
    creditCardNumber: "9101 5678 1234 7412",
    bankName: "HDFC Bank Ltd"
  }
]

function App() {
  
  return (
    <>
      <div>
        <Navigation links={LINKS} />
        <div className='creditCardWrapper'>
          <CreditCard cardInfo={cardInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
