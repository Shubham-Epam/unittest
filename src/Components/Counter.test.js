import React from "react";
import {render, screen} from '@testing-library/react';
import {debug} from 'jest-preview';
import Counter from "./Counter";

describe('Counter button component rendering', () => {
  it('renders two buttons', () => {
    render(<Counter/>);
    expect(screen.getAllByRole('button').length).toBe(2);
    debug();
  })
})
