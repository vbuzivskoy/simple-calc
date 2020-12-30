import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const MemoryMinusButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('darkGrayBtn', className);

  return (
    <Button
      title="m-"
      className={classNames}
      onClick={() => dispatch({ type: 'substractingFromMemory' })}
    />
  );
};

export default MemoryMinusButton;
