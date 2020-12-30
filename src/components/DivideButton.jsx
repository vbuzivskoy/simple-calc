import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const DivideButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('orangeBtn', className);

  return (
    <Button
      title="&#x00F7;"
      className={classNames}
      onClick={() => dispatch({
        type: 'dividingNumber',
      })}
    />
  );
};

export default DivideButton;
