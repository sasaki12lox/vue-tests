import fetch from 'node-fetch';

fetch('https://test.gnzs.ru/oauth/get-token.php', {
    headers: {
        'X-Client-Id': '30878566'
    }
}).then(e => e.json()).then(console.log)