module.exports = (items, props) => `
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

  ${items.map(item => {
    return `<script src="http://ec2-18-144-42-226.us-west-1.compute.amazonaws.com/${item}/bundle.js"></script>`;
  }).join('\n')}

  <script>
    ${items.map(item => {
      return `ReactDOM.hydrate(
        React.createElement(${item}, ${JSON.stringify(props)}),
        document.getElementById('${item}')
      );`;
    }).join('\n')}
  </script>
`;
