import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { InventoryProvider } from './context/InventoryContext';

const App = () => {
  return (
    <Router>
      <InventoryProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </InventoryProvider>
    </Router>
  );
};

export default App;
