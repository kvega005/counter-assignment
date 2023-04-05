// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter'
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter"))
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(0))
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByText('+'))

  expect(screen.getByText('1'))
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByText('-'))
  
  expect(screen.getByText('-1'))
});
