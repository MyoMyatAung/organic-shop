
import { ThemeProvider } from '@mui/material';

import * as component from './components';
import * as page from './pages';
import theme from './theme/theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#EFF0F4' }}>
        <ThemeProvider theme={theme}>
          <header>
            <component.Common.HeaderComponent />
          </header>
          <main>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/organic-shop' />
              </Route>
              <Route path="/organic-shop" exact component={page.HomePage} />
              <Route path="/shop" exact component={page.ShopPage} />
              <Route path="/wish-list" exact component={page.FavoritePage} />
              <Route path="/product/:id" exact component={page.ProductDetailPage} />
              <Route path="/cart" exact component={page.CartPage} />
              <Route path="/contact-us" exact component={page.ContactUsPage} />
              <Route path="/profile" exact component={page.ProfilePage} />
              <Route path="/checkout" exact component={page.CheckoutPage} />
            </Switch>
          </main>
          <footer>
            <component.Common.FooterComponent />
          </footer>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
