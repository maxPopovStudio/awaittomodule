/*eslint no-console: 'off'*/


const { to } = require('await-to-js');
const bitcoin = require('./bitcoin.js');

start();

async function start() {
  let err, data;

  [err, data] = await to(bitcoin.get());
  if (err) {
    console.log('Error : ' + JSON.stringify(err, null, '  '));
    return;
  }

  console.log(JSON.stringify(data));
  
}
