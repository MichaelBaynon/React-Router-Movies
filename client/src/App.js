import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'

import MovieList from './Movies/MovieList'

import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
    <div>
      
      <SavedList list={savedList} />
      <Route path='/' exact component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
     
   
    </div>
</Router>
  );
};

export default App;
