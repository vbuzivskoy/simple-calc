import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const ClearAllButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('lightGrayBtn', className);

  return (
    <Button
      title="AC"
      className={classNames}
      onClick={() => dispatch({ type: 'clearingAll' })}
    />
  );
};

export default ClearAllButton;
