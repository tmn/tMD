import React from 'react';
import omniscient from 'omniscient';

const component = omniscient.withDefaults({
  jsx: true
});

const mixins = {
  handleChange: function (event) {
    this.props.cursor.cursor('editor').update(() => {
      return event.currentTarget.value;
    });
  }
};

const Editor = component('Editor', mixins, function ({cursor}) {
  const data = cursor.cursor('editor').deref();

  return (
    <section id="editor">
      <textarea rows="20" onChange={this.handleChange}>{ data }</textarea>
    </section>
  );
});

export default Editor;
