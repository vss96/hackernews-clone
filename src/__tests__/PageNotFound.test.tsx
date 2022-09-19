import { render, screen } from '@testing-library/react';
import PageNotFound from '../components/PageNotFound';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';



it('should render PageNotFound', () => {
    const tree = renderer
      .create(<Router><PageNotFound/></Router>)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
<p>
  Page Not found. Go to 
  <a
    href="/news"
    onClick={[Function]}
  >
    Home
  </a>
</p>
`);
  });