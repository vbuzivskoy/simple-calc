import React from 'react';

import * as utils from './utils';

const initialState = {
  maxCharacters: 12,
  ratioSign: ',',
  isEditable: true,
  displayText: '0',
  leftOperand: 0,
  operator: utils.defaultOperator,
  memory: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'typingNumber': {
      const updatedDisplayText = `${state.isEditable ? state.displayText : '0'}${action.payload.char}`;
      const displayText = utils.normalizeInputtingNumber(updatedDisplayText, state.ratioSign);
      return {
        ...state,
        displayText,
        isEditable: true,
      };
    }
    case 'switchingSing': {
      const displayText = state.displayText.includes('-')
        ? state.displayText.replace('-', '')
        : `-${state.displayText}`;
      return {
        ...state,
        displayText,
      };
    }
    case 'clearingAll':
      return {
        ...state,
        displayText: '0',
        leftOperand: 0,
        operator: utils.defaultOperator,
        isEditable: true,
      };
    case 'clearingMemory':
      return {
        ...state,
        memory: 0,
      };
    case 'readingMemory': {
      const displayText = utils.convertNumberToText(
        state.memory,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        displayText,
        isEditable: false,
      };
    }
    case 'summingToMemory': {
      const memory = utils.plusOperator(
        state.memory,
        utils.convertTextToNumber(state.displayText, state.ratioSign),
      );
      return {
        ...state,
        memory,
        isEditable: false,
      };
    }
    case 'substractingFromMemory': {
      const memory = utils.minusOperator(
        state.memory,
        utils.convertTextToNumber(state.displayText, state.ratioSign),
      );
      return {
        ...state,
        memory,
        isEditable: false,
      };
    }
    case 'summingNumber': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = state.operator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        leftOperand: result,
        displayText,
        isEditable: false,
        operator: utils.plusOperator,
      };
    }
    case 'substuctingNumber': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = state.operator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        leftOperand: result,
        displayText,
        isEditable: false,
        operator: utils.minusOperator,
      };
    }
    case 'multiplyingNumber': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = state.operator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        leftOperand: result,
        displayText,
        isEditable: false,
        operator: utils.multiplyOperator,
      };
    }
    case 'dividingNumber': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = state.operator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        leftOperand: result,
        displayText,
        isEditable: false,
        operator: utils.divideOperator,
      };
    }
    case 'calculating': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = state.operator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        leftOperand: 0,
        displayText,
        isEditable: false,
        operator: utils.defaultOperator,
      };
    }
    case 'gettingPercentNumber': {
      const displayNumber = utils.convertTextToNumber(state.displayText, state.ratioSign);
      const result = utils.percentOperator(
        state.leftOperand,
        displayNumber,
      );
      const displayText = utils.convertNumberToText(
        result,
        state.maxCharacters,
        state.ratioSign,
      );
      return {
        ...state,
        displayText,
        isEditable: false,
      };
    }
    default:
      return state;
  }
};

const ContextApp = React.createContext();

export { initialState, reducer, ContextApp };
