import React from 'react';
import { debug } from 'jest-preview';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter,Route, Routes, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Counter from './Counter';
import App from './App';

describe('App Routing', () => {
  it('renders Layout component when URL is /', () => {
    debug();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<div> fake layout element</div>}>
            <Route path='home' element={<div> fake home element</div>} />
            <Route path='counter' element={<div> fake counter element</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('fake layout element')).toBeInTheDocument();
    debug();
  });

  it('renders Home component when URL is /home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <React.Suspense fallback = {<p>Loading</p>}>
          <Layout/>
          <Routes>
              <Route path='home' element={<div>fake home element</div>} />
              <Route path='counter' element={<div>fake counter element</div>} />
          </Routes>
        </React.Suspense>
      </MemoryRouter>
    );
    debug();
    expect(screen.getByText('fake home element')).toBeInTheDocument();
  });

  it('renders Counter component when URL is /counter', () => {
    render(
      <MemoryRouter initialEntries={['/counter']}>
        <React.Suspense fallback = {<p>Loading</p>}>
          <Layout/>
          <Routes>
              <Route path='home' element={<div>fake home element</div>} />
              <Route path='counter' element={<div>fake counter element</div>} />
          </Routes>
        </React.Suspense>
      </MemoryRouter>
    );
    debug();
    expect(screen.getByText('fake counter element')).toBeInTheDocument();
  });
});