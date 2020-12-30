import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const MemoryReadButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('darkGrayBtn', className);

  return (
    <Button
      title="mr"
      className={classNames}
      onClick={() => dispatch({ type: 'readingMemory' })}
    />
  );
};

export default MemoryReadButton;
