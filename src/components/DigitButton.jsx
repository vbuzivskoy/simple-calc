import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const DigitButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { digit, className } = props;
  const classNames = cn('darkGrayBtn', className);

  return (
    <Button
      title={digit}
      className={classNames}
      onClick={() => dispatch({
        type: 'typingNumber',
        payload: { char: digit },
      })}
    />
  );
};

export default DigitButton;
