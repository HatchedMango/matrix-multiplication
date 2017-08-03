import React from 'react';
import ReactDOM from 'react-dom';

import App from './scripts/app';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./scripts/app.js', () => {
        const NextRootContainer = require('./scripts/app.js').default;
        ReactDOM.render(<App />, document.getElementById('app'));
    });
}
