import React, { useReducer } from 'react';

import { ContextApp, initialState, reducer } from '../reducer';
import components from '.';

const Calc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="calcContainer">
      <ContextApp.Provider value={{dispatch, state}}>
        <components.Display />
        <components.ClearAllButton />
        <components.SwitchSignButton />
        <components.PercentButton />
        <components.DivideButton />
        <components.MemoryClearButton />
        <components.MemoryReadButton />
        <components.MemoryMinusButton />
        <components.MemoryPlusButton />
        <components.DigitButton digit="7" />
        <components.DigitButton digit="8" />
        <components.DigitButton digit="9" />
        <components.MultiplyButton />
        <components.DigitButton digit="4" />
        <components.DigitButton digit="5" />
        <components.DigitButton digit="6" />
        <components.MinusButton />
        <components.DigitButton digit="1" />
        <components.DigitButton digit="2" />
        <components.DigitButton digit="3" />
        <components.PlusButton />
        <components.DigitButton digit="0" className="span-2 rightPadding"/>
        <components.RatioSignButton />
        <components.CalcButton />
      </ContextApp.Provider>
    </div>
  );
};

export default Calc;
