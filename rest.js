const axios = require('axios').default

axios.get('http://localhost:8082/test')
    .then((v) => {
        console.log(v.data)
    })