import React, { useContext } from 'react';
import cn from 'classnames';

import { ContextApp } from '../reducer';
import Button from './Button';

const PercentButton = (props) => {
  const { dispatch } = useContext(ContextApp);
  const { className } = props;
  const classNames = cn('lightGrayBtn', className);

  return (
    <Button
      title="%"
      className={classNames}
      onClick={() => dispatch({
        type: 'gettingPercentNumber',
      })}
    />
  );
};

export default PercentButton;
