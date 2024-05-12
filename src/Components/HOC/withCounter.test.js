import React, {useState, useRef} from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import {debug} from 'jest-preview';
import Button from "../Button";
import withCounter from "./withCounter";

describe('withCounter Higher Order Component', () => {
    it('takes a component1 as argument and returns a component2 which internally renders the component1 in parameter, with handleClick() function and count as prop', () => {
        let Button  = jest.fn((props) => {
            return (
                <div>
                    <div>
                        handleClick prop's type = {typeof props.handleClick}
                    </div> 
                    <div>
                        count is {props.count}
                    </div>
                </div>
            )
        });

        const ButtonFromHOC = withCounter(Button, 1, 10);
        render(<ButtonFromHOC/>);
        expect(screen.getByText('count is 1')).toBeInTheDocument();
        expect(screen.getByText('handleClick prop\'s type = function')).toBeInTheDocument();
        debug();
    });
    
    it('The rendered button if the count = 1, upon click it becomes 2 ', () => {
        const ButtonFromHOC = withCounter(Button, 1, 10);
        render(<ButtonFromHOC/>);
        let button = screen.getByRole('button');
        console.log('b  - ', button);
        fireEvent.click(button);
        expect(screen.getByText('Count | 2')).toBeInTheDocument()
        debug();
    });

    it('The rendered button if the count = 10, upon click it becomes 9 ', () => {
        const ButtonFromHOC = withCounter(Button, 10, 1);
        render(<ButtonFromHOC/>);
        let button = screen.getByRole('button');
        console.log('b  - ', button);
        fireEvent.click(button);
        expect(screen.getByText('Count | 9')).toBeInTheDocument()
        debug();
    })
})