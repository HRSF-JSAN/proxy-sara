module.exports = (items) => `
  <link rel="stylesheet" href="/style.css">

  ${items.map(item => {
    return `<link rel="stylesheet" type="text/css" href="/${item}/style.css"></link>`;
  }).join('\n')}
`;