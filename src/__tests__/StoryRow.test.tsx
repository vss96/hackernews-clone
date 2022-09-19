import { render, screen } from '@testing-library/react';
import StoryRow from '../components/StoryRow';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';



it('should render Story row', () => {
    const count = 1;
    const story = { 'id': '123', 'url': 'www.test.com', 'title': 'Test site', 'score': 10, 'by': 'TestUser' };
    const tree = renderer
        .create(<StoryRow story={story} count={count} />)
        .toJSON();
    expect(tree).toMatchInlineSnapshot(`
Array [
  <tr>
    <td>
      <a>
        1
        . 
      </a>
      <a
        href="www.test.com"
      >
        Test site
         
      </a>
    </td>
  </tr>,
  <tr>
    <td>
      <a>
        10
         points by 
        TestUser
      </a>
    </td>
  </tr>,
]
`);
});