import './App.css';
import Header from 'utils/header/Header';
import Footer from 'utils/footer/Footer';
import Dashboard from 'pages/dashboard/Dashboard';
import Loading from 'utils/loading/Loading';

function App() {
  return (
    <div>
      <Header/>
      <div className="content">
        <Dashboard/>
      </div>
      <Footer/>
      <Loading/>
    </div>
  );
}

export default App;
