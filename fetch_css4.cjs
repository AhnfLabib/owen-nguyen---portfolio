const https = require('https');
https.get('https://ahnaflabib.com/styles.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/\.blur-circle[^}]+\}/g);
    if (match) console.log(match.join('\n'));
    const match2 = data.match(/\.background-animation[^}]+\}/g);
    if (match2) console.log(match2.join('\n'));
  });
});
