import React from 'react';
import ReactDOM from 'react-dom';

import style from './style/style.scss';
import App from './scripts/App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./scripts/App.js', () => {
        const NextRootContainer = require('./scripts/App.js').default;
        ReactDOM.render(<App />, document.getElementById('app'));
    });
}
