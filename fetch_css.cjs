const https = require('https');
https.get('https://ahnaflabib.com/styles.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 3000));
  });
});
