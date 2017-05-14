import React from 'react';
import {Router, browserHistory} from 'react-router';

import {AppLayout} from '../components/Layout/containers/AppLayout';

// These are the child routes, these come from somewhere backendie or poddie
import {LandingContainer} from '../pods/Landing/LandingContainer';
import ResumePresenter from '../pods/Resume/containers/ResumePresenter';
import ResumeEditor from '../pods/Resume/containers/ResumeEditor';

// non migrated
import {CompanyManagerContainer} from '../pods/CompanyManager/CompanyManagerContainer';
import {SkillManagerContainer} from '../pods/SkillManager/SkillManagerContainer';
import {SkillCategoryManagerContainer} from '../pods/SkillManager/SkillCategoryManagerContainer';
import {SkillUnitManagerContainer} from '../pods/SkillManager/SkillUnitManagerContainer';
import App from '../pods/TodoApp/containers/App';

export default function configureRouter() {
  const routes = [
    {
      path: '/',
      component: AppLayout,
      indexRoute: {component: LandingContainer},
      childRoutes: getChildRoutes()
    }
  ];

  return (
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={handleRouteUpdate}
      />
  );
}

function handleRouteUpdate() {
  console.log('Route state updated');
}

function getChildRoutes() {
  return [
    {
      path: 'company-manager',
      component: CompanyManagerContainer
    }, {
      path: 'resume',
      component: ResumePresenter
    }, {
      path: 'resume-editor',
      component: ResumeEditor
    }, {
      path: 'skill-manager',
      component: SkillManagerContainer
    }, {
      path: 'skill-unit-manager',
      component: SkillUnitManagerContainer
    }, {
      path: 'skill-category-manager',
      component: SkillCategoryManagerContainer
    }, {
      path: 'todoapp',
      component: App
    }
  ];
}
