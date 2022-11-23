import { useState } from 'react';
import Contacts from './components/contacts/Contacts';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testmonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
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
