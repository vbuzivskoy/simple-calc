import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const DigitButton = (props) => {
  const { state, dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('darkGrayBtn', className);

  return (
    <Button
      title={state.ratioSign}
      className={classNames}
      onClick={() => dispatch({
        type: 'typingNumber',
        payload: { char: state.ratioSign },
      })}
    />
  );
};

export default DigitButton;
