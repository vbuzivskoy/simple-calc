import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const SwitchSignButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('lightGrayBtn', className);

  return (
    <Button
      title="&#x207A;&#x2215;&#x208B;"
      className={classNames}
      onClick={() => dispatch({ type: 'switchingSing' })}
    />
  );
};

export default SwitchSignButton;
