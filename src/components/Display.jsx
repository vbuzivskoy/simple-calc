import React, { useContext } from 'react';

import { ContextApp } from '../reducer';

const Display = () => {
  const { state } = useContext(ContextApp);

  return <div id="display" className="span-4">
    <div data-testid="display">{state.displayText}</div>
  </div>;
};

export default Display;
