const path = require('path'); // node.js의 path 모듈을 가져옴

module.exports  = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스 : production, 개발 : development
    devtool: 'eval',
    resolve: { // 확장자 설정
        extensions: ['.js', '.jsx'], // js, jsx 확장자 파일을 읽어옴
    },
    
    /* 아래 enrty와 output 중요! */
    entry: {
        app: ['./client'], // client.jsx 파일을 읽어옴
    }, // 입력
    output: {  
        path: path.join(__dirname, 'dist'), // __dirname : 현재 파일의 위치
        filename: 'app.js'
    }, // 출력
};