import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../components/EyesOnMe";

beforeEach(() => {
  render(<EyesOnMe />);
});

test('displays a button with the text "Eyes on me"', () => {

});

test("focusing the button triggers console output", () => {
  console.log = jest.fn();

  const button = screen.queryByText(/Eyes on me/);



});

test("removing focus (blur) on the button triggers console output", () => {
  console.log = jest.fn();

  const button = screen.queryByText(/Eyes on me/);


});
