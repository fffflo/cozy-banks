import React from 'react'
import { IndexRoute, Route, Redirect } from 'react-router'
import App from 'components/App'

import { TransactionsPage, TransactionsByCategory } from 'ducks/transactions'
import { CategoriesPage } from 'ducks/categories'
import { Settings, AccountSettings, AccountsSettings, GroupsSettings, GroupSettings, NewGroupSettings, AppSettings } from 'ducks/settings'
import Notifications from 'ducks/settings/Notifications'
import { Balance } from 'ducks/balance'
import { EnsureHasAccounts, EnsureIsFirstSynced } from 'ducks/onboarding'

export const ComingSoon = () => (<p style='margin-left: 2em'>Coming soon!</p>)

const AppRoute = (
  <Route component={EnsureIsFirstSynced}>
    <Route component={EnsureHasAccounts}>
      <Route component={App}>
        <Redirect from='/' to='transactions' />
        <Route path='currentBalance' component={Balance} />
        <Route path='transactions' component={TransactionsPage} />
        <Route path='categories/:categoryName/transactions' component={TransactionsByCategory} />
        <Route path='categories' component={CategoriesPage}>
          <Route path=':categoryName' component={CategoriesPage} />
        </Route>
        <Route path='projections' component={ComingSoon} />
        <Route path='savings' component={ComingSoon} />
        <Route path='settings'>
          <Route path='groups/new' component={NewGroupSettings} />
          <Route path='groups/:groupId' component={GroupSettings} />
          <Route path='accounts/:accountId' component={AccountSettings} />
          <Route component={Settings}>
            <IndexRoute component={Notifications} />
            <Route path='accounts' component={AccountsSettings} />
            <Route path='groups' component={GroupsSettings} />
            <Route path='notifications' component={Notifications} />
            <Route path='app' component={AppSettings} />
          </Route>
        </Route>
      </Route>
    </Route>
  </Route>
)

export default AppRoute
