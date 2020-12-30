import React from 'react';
import cn from 'classnames';

const Button = (props) => {
  const { title, onClick, className } = props;
  const classNames = cn('btn', className);

  return (
    <input
      type="button"
      className={classNames}
      value={title}
      onClick={onClick}
    />
  );
};

export default Button;
