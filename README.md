npm init 먼저 실행 (Author , License 만 입력하고 그 외 건너뛰기)

npm run dev 로 실행시킬거면 package.json 에 아래 항목 수정하기<br/>
```
"scripts": {
    "dev": "webpack serve --env development"
},
```

모듈 설치 <br/>
npm i react react-dom <br/>
npm i -D @babel/core @babel/preset-env @babel/preset-react <br/>
npm i -D @babel/plugin-proposal-class-properties <br/>
npm i -D @pmmmwh/react-refresh-webpack-plugin <br/>
npm i -D babel-loader <br/>
npm i -D react-refresh <br/>
npm i -D webpack webpack-cli webpack-dev-server <br/>
