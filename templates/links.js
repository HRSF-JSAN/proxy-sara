module.exports = (items) => `
  <link rel="stylesheet" href="/style.css">

  ${items.map(item => {
    return `<link rel="stylesheet" href="/${item}/style.css"></link>`;
  }).join('\n')}
`;