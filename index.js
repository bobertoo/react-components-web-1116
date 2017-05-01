var MyH2 =
  React.createClass({
    render() {
      return React.createElement('h2', {}, 'New Section');
    }
  });

var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'hi'),
    React.createElement('p', {}, 'this is something'),
    React.createElement('ul', {}, [
      React.createElement('li', {key: 1}, 'item1'),
      React.createElement('li', {key: 2}, 'item2'),
      React.createElement('li', {key: 3}, 'item3'),
    ]),
    React.createElement(MyH2, {})
  );

ReactDOM.render(rootElement, document.getElementById('main'))
