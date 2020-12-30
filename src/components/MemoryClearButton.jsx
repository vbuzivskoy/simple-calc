import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const MemoryClearButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('darkGrayBtn', className);

  return (
    <Button
      title="mc"
      className={classNames}
      onClick={() => dispatch({ type: 'clearingMemory' })}
    />
  );
};

export default MemoryClearButton;
