module.exports = (links, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>FoodiGo</title>
      ${links}
    </head>
    <body>
      <div id="nav"><img id ="logo" alt="logo" src="https://s3-us-west-1.amazonaws.com/foodigoiconlib/FoodiGo.png" /></div>
      <div id="container">
        ${body}
        ${scripts}
      </div>
    </body>
  </html>
`;
