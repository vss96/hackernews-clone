import StoriesPage from '../components/StoriesPage';
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { BASE_API_URL } from '../constants';
import { act } from 'react-test-renderer';
import userEvent from '@testing-library/user-event';


describe('Test stories page', () => {
  const server = setupServer(
    rest.get(`${BASE_API_URL}/topstories.json`, (req, res, ctx) => {
      let arr = Array.from(Array(33).keys());;
      return res(ctx.json(arr))
    }),

    rest.get(`${BASE_API_URL}/item/1.json`, (req, res, ctx) => {
      return res(ctx.json({ 'id': '123', 'url': 'www.google.com', 'title': 'New google page' }))
    }),

    rest.get(`${BASE_API_URL}/item/32.json`, (req, res, ctx) => {
      return res(ctx.json({ 'id': '456', 'url': 'www.fb.com', 'title': 'New fb page' }))
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());


  it('should render stories in First page', async () => {
    const { findByText } = render(<BrowserRouter> <StoriesPage newsType='top' /> </BrowserRouter>)
    expect(await findByText('New google page')).toBeInTheDocument()
  });

  // it('should load next page on button click', async () => {
  //   const { findByText, getByText, getByRole } = render(<BrowserRouter> <StoriesPage newsType='top' /> </BrowserRouter>)
  //   act(async () => await userEvent.click(getByRole('button')));
  //   await new Promise((r) => setTimeout(r, 10000));
  //   expect(await findByText('New fb page')).toBeInTheDocument();
  // }, 30000)

});