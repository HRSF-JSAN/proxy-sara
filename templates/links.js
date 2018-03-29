module.exports = (items) => `
  <link rel="stylesheet" type="text/css" href="http://ec2-18-144-42-226.us-west-1.compute.amazonaws.com/style.css">

  ${items.map(item => {
    return `<link rel="stylesheet" type="text/css" href="http://ec2-18-144-42-226.us-west-1.compute.amazonaws.com/${item}/style.css"></link>`;
  }).join('\n')}
`;
