import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const MemoryPlusButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('orangeBtn', className);

  return (
    <Button
      title="m+"
      className={classNames}
      onClick={() => dispatch({ type: 'summingToMemory' })}
    />
  );
};

export default MemoryPlusButton;
