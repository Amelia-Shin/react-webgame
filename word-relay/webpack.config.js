const path = require('path'); // node.js의 path 모듈을 가져옴
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // React Refresh Webpack Plugin을 가져옴

const isDevelopment = process.env.NODE_ENV !== 'production'; // 개발 모드인지 확인

module.exports  = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스 : production, 개발 : development
    devtool: 'eval',
    resolve: { // 확장자 설정
        extensions: ['.js', '.jsx'], // js, jsx 확장자 파일을 읽어옴
    },
    
    /* 아래 enrty와 output 중요! */
    entry: {
        app: './client', // client.jsx 파일을 읽어옴
    }, // 입력

    module: { // 모듈 설정
        rules: [    
            { // babel-loader 설정
                test: /\.jsx?/, // 정규표현식, js, jsx 파일을 찾음 
                exclude: /node_modules/, // node_modules 폴더는 제외
                use: [ // babel-loader를 사용
                    {
                        loader: require.resolve('babel-loader'), // babel-loader를 사용
                        options: { 
                            presets: [ 
                                ['@babel/preset-env', { 
                                    targets: { // 어떤 환경에서 사용할 것인지 설정
                                        browsers: ['> 5% in KR'], // 한국에서 5% 이상 사용되는 브라우저
                                    },
                                    debug: true, // 디버그 모드
                                }], 
                                '@babel/preset-react'
                            ],
                            plugins: [ // babel-plugin-react-refresh 설정
                                isDevelopment && require.resolve('@babel/plugin-proposal-class-properties'),
                                isDevelopment && require.resolve('react-refresh/babel'), 
                            ].filter(Boolean), // filter(Boolean) : false인 값은 제거
                        },
                    },
                ],
            },
        ],
    }, 
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(), // React Refresh Webpack Plugin
    ].filter(Boolean), // filter(Boolean) : false인 값은 제거
    output: {  
        path: path.join(__dirname, 'dist'), // __dirname : 현재 파일의 위치
        filename: 'app.js',
        publicPath: '/dist/', // 웹에서 접근할 수 있는 경로
    }, // 출력
    devServer: {
        devMiddleware: { // webpack-dev-middleware 설정
            publicPath: '/dist', // 웹에서 접근할 수 있는 경로
        },
        static: { // 정적 파일 제공 설정
            directory: path.resolve(__dirname), // 현재 디렉토리
        },
        hot: true, // 핫 리로딩 설정 (변경점 감지 - 페이지 새로고침 없이 변경된 부분만 업데이트)
        
    },
};