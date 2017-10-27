import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// These are the child routes, these come from somewhere backendie or poddie
import {LandingContainer} from '../pods/Landing/LandingContainer';
import ResumePresenter from '../pods/Resume/containers/ResumePresenter';
import ResumeEditor from '../pods/Resume/containers/ResumeEditor';

// Non migrated
import {CompanyManagerContainer} from '../pods/CompanyManager/CompanyManagerContainer';
import {SkillManagerContainer} from '../pods/SkillManager/SkillManagerContainer';
import {SkillCategoryManagerContainer} from '../pods/SkillManager/SkillCategoryManagerContainer';
import {SkillUnitManagerContainer} from '../pods/SkillManager/SkillUnitManagerContainer';
import App from '../pods/TodoApp/containers/App';

export default function configureRouter() {
  return (
    <div>
      <Router>
        {getChildRoutes()}
      </Router>
    </div>
  );
}

function getChildRoutes() {
  return (
    <div>
      <Route exact path="/" component={LandingContainer}/>

      <Route path="/resume" component={ResumePresenter}/>
      <Route path="/skill-manager" component={SkillManagerContainer}/>
      <Route path="/resume-editor" component={ResumeEditor}/>
      <Route path="/company-manager" component={CompanyManagerContainer}/>
      <Route path="/skill-unit-manager" component={SkillUnitManagerContainer}/>
      <Route path="/skill-category-manager" component={SkillCategoryManagerContainer}/>

      <Route path="/todo" component={App}/>
    </div>
  );
}
