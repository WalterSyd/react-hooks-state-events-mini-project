import React from 'react'; // Add this import if it's missing
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App"; // Ensure this path is correct
import Task from "../components/Task";

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});

