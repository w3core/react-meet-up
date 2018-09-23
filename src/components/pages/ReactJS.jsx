import React from 'react';
import { BuggyControl, ToggleButton, Button } from 'components/controls';

const displayName = 'ReactJS';

function ReactJS() {
  return (
    <div>
      <h1>ReactJS</h1>
      <Button>DEFAULT</Button>
      <Button accent>ACCENT</Button>
      <ToggleButton>DEFAULT TOGGLE</ToggleButton>
      <ToggleButton accent>ACCENT TOGGLE</ToggleButton>
      <BuggyControl />
    </div>
  );
}

ReactJS.displayName = displayName;

export default ReactJS;
