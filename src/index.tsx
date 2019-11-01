// import { addAlias } from 'module-alias';
// addAlias('#', __dirname)

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '@src/common/serviceWorker';
import { Routes } from '@src/routes'

ReactDOM.render(<Routes/>, document.getElementById('root'));

serviceWorker.unregister();