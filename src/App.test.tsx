import { render, screen } from '@testing-library/react';
// import App from './App.ts';
// import Home from "./Home"

test('renders learn react link', () => {
//   render(<Home/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});