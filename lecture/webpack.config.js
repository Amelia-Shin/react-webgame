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

    module: { // 모듈 설정
        rules: [    
            { // babel-loader 설정
                test: /\.jsx?/, // 정규표현식, js, jsx 파일을 찾음  
                loader: 'babel-loader', // babel-loader를 사용
                options: { 
                    presets: [ '@babel/preset-env', '@babel/preset-react'],
                }
        }],
    }, 

    output: {  
        path: path.join(__dirname, 'dist'), // __dirname : 현재 파일의 위치
        filename: 'app.js'
    }, // 출력
};