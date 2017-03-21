import React from 'react';
import {Router, browserHistory} from 'react-router';

import {LayoutContainer} from '../components/Layout/LayoutContainer';

import {LandingContainer} from '../scenes/Landing/LandingContainer';
// These are the child routes, these come from somewhere backendie or poddie
import {ResumePresenterContainer} from '../scenes/Resume/ResumePresenterContainer';
import {CompanyManagerContainer} from '../scenes/CompanyManager/CompanyManagerContainer';
import {SkillManagerContainer} from '../scenes/SkillManager/SkillManagerContainer';
import {SkillCategoryManagerContainer} from '../scenes/SkillManager/SkillCategoryManagerContainer';
import {SkillUnitManagerContainer} from '../scenes/SkillManager/SkillUnitManagerContainer';
import App from '../scenes/TodoApp/containers/App';

export default function configureRouter() {
  const routes = [
    {
      path: '/',
      component: LayoutContainer,
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
      path: 'my-resume',
      component: ResumePresenterContainer
    }, {
      path: 'company-manager',
      component: CompanyManagerContainer
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
