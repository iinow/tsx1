const gh = require('gh-pages')
const path = require('path')

gh.publish(path.join(__dirname, "build"), {
    branch: 'gh-pages',
    repo: 'https://github.com/iinow/tsx1.git',
    remote: 'upstream',
    add: true,
    message: 'Auto-generated commit',
    user: {
        email: 'iinow@naver.com',
        name: 'iinow'
    },
    push: true
}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('성공적으로 배포함')
    }
})
