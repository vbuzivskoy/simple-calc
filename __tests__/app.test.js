/* eslint-disable dot-notation */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveTextContent } from '@testing-library/jest-dom/matchers';

import Calc from '../src/components/Calc';

expect.extend({ toHaveTextContent });

let buttons; let switchSignButton; let divideButton; let muliplyButton; let display;
const ratioSign = ',';

beforeEach(() => {
  render(<Calc />);
  buttons = ['AC', '%', 'mc', 'mr', 'm-', 'm+',
    '7', '8', '9', '4', '5', '6', '-', '1', '2', '3', '+',
    '0', ratioSign, '=']
    .reduce((accum, digit) => ({
      ...accum,
      [digit]: screen.getByDisplayValue(digit),
    }), {});
  switchSignButton = screen.getByDisplayValue('⁺∕₋');
  divideButton = screen.getByDisplayValue('÷');
  muliplyButton = screen.getByDisplayValue('×');
  display = screen.getByTestId('display');
});

test('Number buttons', () => {
  fireEvent.click(buttons['1']);
  expect(display).toHaveTextContent('1');
  fireEvent.click(buttons['2']);
  expect(display).toHaveTextContent('12');
  fireEvent.click(buttons['3']);
  expect(display).toHaveTextContent('123');
  fireEvent.click(buttons['4']);
  expect(display).toHaveTextContent('1234');
  fireEvent.click(buttons['5']);
  expect(display).toHaveTextContent('12345');
  fireEvent.click(buttons['6']);
  expect(display).toHaveTextContent('123456');
  fireEvent.click(buttons['7']);
  expect(display).toHaveTextContent('1234567');
  fireEvent.click(buttons['8']);
  expect(display).toHaveTextContent('12345678');
  fireEvent.click(buttons['9']);
  expect(display).toHaveTextContent('123456789');
  fireEvent.click(buttons['0']);
  expect(display).toHaveTextContent('1234567890');
  fireEvent.click(buttons[ratioSign]);
  expect(display).toHaveTextContent(`1234567890${ratioSign}`);
});

test('Two leading zeroes', () => {
  fireEvent.click(buttons['0']);
  expect(display).toHaveTextContent('0');
  fireEvent.click(buttons['0']);
  expect(display).toHaveTextContent('0');
});

test('Two trailing ratio signs', () => {
  fireEvent.click(buttons[ratioSign]);
  expect(display).toHaveTextContent(`0${ratioSign}`);
  fireEvent.click(buttons[ratioSign]);
  expect(display).toHaveTextContent(`0${ratioSign}`);
});

test('Switch signs', () => {
  fireEvent.click(switchSignButton);
  expect(display).toHaveTextContent('-0');
  fireEvent.click(switchSignButton);
  expect(display).toHaveTextContent('0');
});

test('Memory plus and memory read buttons', () => {
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['m+']);
  fireEvent.click(buttons['2']);
  expect(display).toHaveTextContent('2');
  fireEvent.click(buttons['mr']);
  expect(display).toHaveTextContent('1');
});

test('Memory minus and memory read buttons', () => {
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['m-']);
  fireEvent.click(buttons['2']);
  expect(display).toHaveTextContent('2');
  fireEvent.click(buttons['mr']);
  expect(display).toHaveTextContent('-1');
});

test('Memory clear and memory read buttons', () => {
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['m+']);
  fireEvent.click(buttons['2']);
  expect(display).toHaveTextContent('2');
  fireEvent.click(buttons['mr']);
  expect(display).toHaveTextContent('1');
  fireEvent.click(buttons['mc']);
  fireEvent.click(buttons['mr']);
  expect(display).toHaveTextContent('0');
});

test('Plus button', () => {
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['+']);
  fireEvent.click(buttons['2']);
  fireEvent.click(buttons['+']);
  expect(display).toHaveTextContent('3');
});

test('Minus button', () => {
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['-']);
  fireEvent.click(buttons['2']);
  fireEvent.click(buttons['-']);
  expect(display).toHaveTextContent('-1');
});

test('Multiply button', () => {
  fireEvent.click(buttons['2']);
  fireEvent.click(muliplyButton);
  fireEvent.click(buttons['3']);
  fireEvent.click(muliplyButton);
  expect(display).toHaveTextContent('6');
});

test('Divide button', () => {
  fireEvent.click(buttons['3']);
  fireEvent.click(divideButton);
  fireEvent.click(buttons['2']);
  fireEvent.click(divideButton);
  expect(display).toHaveTextContent(`1${ratioSign}5`);
});

test('Percent button', () => {
  fireEvent.click(buttons['3']);
  fireEvent.click(buttons['+']);
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['%']);
  fireEvent.click(buttons['+']);
  expect(display).toHaveTextContent(`3${ratioSign}03`);
});

test('Calc button', () => {
  fireEvent.click(buttons['3']);
  fireEvent.click(buttons['+']);
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['=']);
  expect(display).toHaveTextContent('4');
});

test('Clear all button', () => {
  fireEvent.click(buttons['3']);
  fireEvent.click(buttons['+']);
  fireEvent.click(buttons['1']);
  fireEvent.click(buttons['AC']);
  expect(display).toHaveTextContent('0');
});
