import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';


Parse.initialize("AsyKlwpQNp7FldON8kqEE8iEMz2Yz9JyWZB7EQzF", "1wqF4GABGJLMuLKZFQfjvO4rFKyvR05Au0QX5HNK"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";


ReactDOM.render(<App />, document.getElementById('app'));