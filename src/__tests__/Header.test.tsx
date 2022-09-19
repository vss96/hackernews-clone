import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Header test', () => {
    it('check if Header renders correctly', () => {
        const tree = renderer
            .create(<Router><Header /></Router>)
            .toJSON();
        expect(tree).toMatchInlineSnapshot(`
<table>
  <tbody>
    <tr>
      <th>
        <a
          href="/news"
          onClick={[Function]}
        >
          Hacker News
        </a>
      </th>
      <th>
        <a
          href="/newest"
          onClick={[Function]}
        >
          new
        </a>
         
      </th>
      <th>
        <a
          href="/best"
          onClick={[Function]}
        >
          best
        </a>
         
      </th>
      <th>
        <a
          href="/ask"
          onClick={[Function]}
        >
          ask
        </a>
      </th>
      <th>
        <a
          href="/show"
          onClick={[Function]}
        >
          show
        </a>
      </th>
      <th>
        <a
          href="/jobs"
          onClick={[Function]}
        >
          jobs
        </a>
      </th>
    </tr>
  </tbody>
</table>
`);
    })
});