import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import ApiKnowLedgeTypes from './api/ApiKnowLedgeTypes';
import ApiExperienceProfessional from './api/ApiExperienceProfessional';
import ApiOutsideExperience from './api/ApiOutsideExperience';
import ApiLanguages from './api/ApiLanguages';
import ApiOthers from './api/ApiOthers';

ReactDOM.render(
<BrowserRouter>
  <App knowLedgeTypes={ApiKnowLedgeTypes}
       professionalExperience={ApiExperienceProfessional}
       outsideExperience={ApiOutsideExperience}
       languages={ApiLanguages}
       others={ApiOthers}/>
</BrowserRouter>, 
document.getElementById('root'));

serviceWorker.unregister();