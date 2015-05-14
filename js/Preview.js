import React from 'react';
import omniscient from 'omniscient';
import marked from 'marked';

const component = omniscient.withDefaults({
  jsx: true
});

const mixins = {
  createMarkup: function () {
    const data = this.props.cursor.get('editor');

    return { __html: marked(data, { sanitize: true }) }
  }
};

const Preview = component('Preview', mixins, function ({cursor}) {
  return (
    <section id="preview">
      <div className="content" dangerouslySetInnerHTML={ this.createMarkup() }></div>
    </section>
  );
});

export default Preview;
