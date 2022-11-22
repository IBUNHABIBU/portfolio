import Contacts from './components/contacts/Contacts';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testmonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
