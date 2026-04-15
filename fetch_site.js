const https = require('https');
https.get('https://ahnaflabib.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 3000));
    const classes = data.match(/class="([^"]+)"/g);
    if (classes) {
      console.log("Classes found:", [...new Set(classes)].slice(0, 20));
    }
  });
});
