import React, { useEffect, Fragment, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuDetail from './pages';
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import getData from './helper/getData';
import { setMenu } from './redux/actions/menuActions';

const App = () => {

  const getMenuData = useCallback(async () => {
    const data = await getData();
    store.dispatch(setMenu(data.menus));
  }, []);

  useEffect(() => {
    getMenuData();
  }, [getMenuData]);

  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/:id?/:subId?/:subMenuItemId?">
                <MenuDetail />
              </Route>
            </Switch>
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
};
export default App;
