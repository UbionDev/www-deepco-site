const fs = require('fs');
const path = require('path');

let localesRootPath = _base + '/locales/';
let localesPathArray = [];

let files = fs.readdirSync(localesRootPath);
for (let i in files){
    if (fs.statSync(localesRootPath + files[i]).isDirectory()){
        localesPathArray.push(files[i]);
    }
}

// console.error(localesPathArray);

let localesJson = {};
if( localesPathArray != null && localesPathArray != undefined && localesPathArray.length > 0 ){

    for( let i in localesPathArray ){

        let localesFileArray = _commonUtil.getFiles( localesRootPath + localesPathArray[i] + '/' );
        
        if( localesFileArray != null && localesFileArray != undefined && localesFileArray.length > 0 ){
            
            for( let j in localesFileArray ){
                let localesFile = localesFileArray[j];
                if( localesFile.endsWith( '.js' ) ){
                    // console.error( localesFile );
                    let locale = localesFile.substring(localesFile.lastIndexOf('_') + 1, localesFile.lastIndexOf('.js'));
                    if( !localesJson[locale] ){
                        localesJson[locale] = {};
                    }
                    Object.assign( localesJson[locale], require(localesFile) );
                }
            }
            
        }

    }

}

// console.error(localesJson);

let basePath = path.resolve(_base, 'public', 'locales');
let jsonBasePath = path.resolve(basePath, 'json');
let jsBasePath = path.resolve(basePath, 'js');

//  public/locales 경로에 접근. 접근 에러나는 경우 (public/locales 경로가 없는 경우) 폴더 생성
try {
    fs.accessSync(basePath);
} catch (error) {
    fs.mkdirSync( basePath, { recursive: true } );
}

try {
    fs.accessSync(jsonBasePath);
} catch (error) {
    fs.mkdirSync( jsonBasePath, { recursive: true } );
}

try {
    fs.accessSync(jsBasePath);
} catch (error) {
    fs.mkdirSync( jsBasePath, { recursive: true } );
}

// /public/locales/json 하위경로 모든 파일 삭제 (*.json)
let publicLocalesJsonFiles = fs.readdirSync(jsonBasePath);
if( publicLocalesJsonFiles && publicLocalesJsonFiles.length > 0 ){
    for( let publicLocalesJsonFile of publicLocalesJsonFiles ){
        fs.unlinkSync( path.resolve( jsonBasePath, publicLocalesJsonFile ) );
    }
}

// /public/locales/js 하위경로 모든 파일 삭제 (*.js)
let publicLocalesJsFiles = fs.readdirSync(jsBasePath);
if( publicLocalesJsFiles && publicLocalesJsFiles.length > 0 ){
    for( let publicLocalesJsFile of publicLocalesJsFiles ){
        fs.unlinkSync( path.resolve( jsBasePath, publicLocalesJsFile ) );
    }
}

if( localesJson ){
    for( let locale in localesJson ){
        fs.writeFileSync( path.resolve(jsonBasePath, locale + '.json'), JSON.stringify( localesJson[locale], null, 4 ), { encoding : 'utf8' });
        fs.writeFileSync( path.resolve(jsBasePath, locale + '.js'), 'var localeJson = ' + JSON.stringify( localesJson[locale], null, 4 ), { encoding : 'utf8' });
    }
}
