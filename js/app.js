import React from 'react';
import immstruct from 'immstruct';
import omniscient from 'omniscient';

import Editor from './Editor';
import Preview from './Preview';

import data from './editor-data';

const component = omniscient.withDefaults({
  jsx: true
});

const App = component('App', ({cursor}) => {
  return (
    <div id="mainContainer">
      <Editor cursor={cursor} />
      <Preview cursor={cursor} />
    </div>
  );
});

const render = () => {
  React.render(<App cursor={data.cursor()} />, document.getElementById('app'));
}

render();
data.on('swap', render);
