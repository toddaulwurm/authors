
import './App.css';
import AuthorForm from './Components/AuthorForm';
import Main from './Components/Main';

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Detail from './Components/Detail';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Author Manager</h1>
      </header>
          <BrowserRouter>
            <Link to="/authors/">Home</Link>
            {'|'}
            <Link to="/authors/create/new">Create Author</Link>
            <Switch>
              <Route exact path="/authors/">
                <Main />
              </Route>
              <Route exact path='/authors/create/new'>
                <AuthorForm/>
              </Route>
              <Route path="/authors/:id/edit">
                <Update />
              </Route>
              <Route path="/authors/:id">
                <Detail />
              </Route>
            </Switch>
          </BrowserRouter>
      {/* <Main></Main> */}
    </div>
  );
}

export default App;