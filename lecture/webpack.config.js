const path = require('path'); // node.js의 path 모듈을 가져옴
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin'); // webpack의 LoaderOptionsPlugin 모듈을 가져옴

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
                    presets: [ 
                        ['@babel/preset-env', 
                            { 
                                targets: { // 어떤 환경에서 사용할 것인지 설정
                                    browsers: ['> 5% in KR', 'last 2 chrome versions'], // 한국에서 5% 이상 사용되는 브라우저, 마지막 2개 버전
                                },
                                debug: true, // 디버그 모드
                            }
                        ], 
                        '@babel/preset-react'
                ],
                }
        }],
    }, 
    plugins: [
        new LoaderOptionsPlugin({ debug: true }),
    ],
    output: {  
        path: path.join(__dirname, 'dist'), // __dirname : 현재 파일의 위치
        filename: 'app.js'
    }, // 출력
};