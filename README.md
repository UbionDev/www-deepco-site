# www-deepco-site

`https://www.deepco.co.kr` 웹 서버 소스입니다. 개편 사이트를 회사 서버에 올리기 전에, 각자의 PC에서 `http://localhost:3000`으로 열어 결과 화면을 확인할 때 이 안내를 따릅니다.

| 항목 | 값 |
|---|---|
| 저장소 | `https://github.com/UbionDev/www-deepco-site.git` (비공개) |
| 작업 브랜치 | `deepco-site` |
| 확인 주소 | `http://localhost:3000` |

---

## 1. 준비물 (처음 한 번)

| 준비물 | 확인 방법 | 없으면 |
|---|---|---|
| GitHub 저장소 권한 | 메일로 받은 GitHub 초대(collaborator)를 **수락**했는지 확인 | 초대 메일의 「Accept invitation」을 누른다 |
| Git | 터미널에서 `git --version` | https://git-scm.com 에서 설치 |
| Node.js 18 이상 | 터미널에서 `node -v` | https://nodejs.org 에서 LTS 버전 설치 |

- **터미널**: Windows는 「PowerShell」, Mac은 「터미널」 앱입니다.
- 비공개 저장소라서 처음 내려받을 때 GitHub 로그인 창이 뜹니다. 초대를 수락한 계정으로 로그인합니다.

## 2. 소스 내려받기

소스를 둘 폴더로 이동한 뒤 실행합니다.

```
git clone -b deepco-site https://github.com/UbionDev/www-deepco-site.git
cd www-deepco-site
```

이미 내려받았다면 최신 내용만 받습니다.

```
cd www-deepco-site
git pull
```

## 3. 로컬 확인용 설정 파일 2개 만들기 (처음 한 번)

서버는 시작할 때 아래 두 파일을 읽습니다. 실제 값은 보안상 저장소에 없으므로, **화면 확인용 임시 내용**으로 직접 만듭니다. 로그인이 필요 없는 공개 페이지를 볼 때는 이 임시 내용으로 충분합니다.

메모장이나 VS Code로 새 파일을 만들고, 아래 내용을 그대로 붙여 넣어 저장합니다.

**① `config/dev/keycloak.json`** — `config` 폴더 안에 `dev` 폴더를 새로 만들고 그 안에 저장

```json
{
  "realm": "aikit",
  "auth-server-url": "http://localhost:8080/auth/",
  "ssl-required": "external",
  "resource": "web.front",
  "credentials": {
    "secret": "local-only"
  },
  "confidential-port": 0
}
```

**② `config/temp-users.js`** — `config` 폴더 안에 저장

```js
module.exports = {
    UserList : []
}
```

- 메모장으로 저장할 때는 「파일 형식: 모든 파일」, 「인코딩: UTF-8」을 고릅니다. 그래야 파일 이름 끝에 `.txt`가 붙지 않습니다.
- 두 파일은 저장소에 올라가지 않게 설정되어 있습니다(`.gitignore`). 실제 인증 값으로 바꾸거나 저장소에 올리지 않습니다.

## 4. 설치하고 실행하기

```
npm install
npm start
```

- `npm install`은 처음 한 번, 그리고 `package.json`이 바뀌었을 때만 실행합니다. 몇 분 걸릴 수 있습니다. 끝에 나오는 `vulnerabilities` 안내는 무시해도 됩니다.
- 실행되면 터미널에 `Listening.. port: 3000`이 나옵니다.
- Windows에서는 그 위에 `'export'은(는) 내부 또는 외부 명령 … 이 아닙니다.`라는 문구가 먼저 나올 수 있습니다. 정상이며 무시합니다.

## 5. 브라우저에서 확인하기

| 주소 | 화면 |
|---|---|
| http://localhost:3000/ | 메인 |
| http://localhost:3000/about/ | 딥코 소개 |
| http://localhost:3000/products/ | 제품 (스튜디오 · 보드 · 이지 · 미니 · 딥코봇) |
| http://localhost:3000/curriculum/ | 커리큘럼 |
| http://localhost:3000/references/ | 교육 레퍼런스 (지역 지도 · 기관 상세) |
| http://localhost:3000/en/ | 영문 메인 |
| http://localhost:3000/deepcomini/privacy_policy.html | DeepCoMini 앱 개인정보 처리방침 (앱 스토어 등록 주소와 같은 경로) |

확인할 점:

- [ ] 상단 메뉴와 하단 링크가 열린다.
- [ ] 하단 「DeepCoMini 앱 개인정보 처리방침」을 누르면 새 창으로 방침이 열린다.
- [ ] 휴대폰 화면도 확인한다. 브라우저에서 `F12` → 기기 모양 아이콘을 누르면 휴대폰 크기로 볼 수 있다.

## 6. 종료하기

서버를 실행한 터미널에서 `Ctrl + C`를 누릅니다. 다시 볼 때는 `npm start`만 실행합니다.

---

## 문제가 생기면

| 증상 | 원인과 해결 |
|---|---|
| `Cannot find module '…/config/dev/keycloak.json'` | 3번의 ① 파일이 없거나 위치·이름이 다릅니다. `config/dev/keycloak.json`인지 확인합니다. |
| `Cannot find module './config/temp-users'` | 3번의 ② 파일이 없거나 이름 끝에 `.txt`가 붙었습니다. |
| `EADDRINUSE` … `3000` | 3000번 포트를 다른 프로그램이 쓰고 있습니다. 그 프로그램을 끄거나, 다른 포트로 실행합니다.<br>PowerShell: `$env:PORT=3001; npm start`<br>Mac: `PORT=3001 npm start` |
| `/`를 열자 터미널에 `RequestError` · `ECONNREFUSED`가 나오고 서버가 멈춤 | 받은 소스에 개편 사이트 파일(`public/www/`)이 아직 없는 상태입니다. 메인 주소가 이전 홈페이지 기능(내부 서버 조회)으로 연결되어 멈춥니다. `git pull`로 최신 소스를 받은 뒤 다시 실행하고, 그래도 같으면 개발 담당에게 알립니다. |
| 수정한 내용이 화면에 안 보임 | 브라우저에서 `Ctrl + F5`(Mac: `Cmd + Shift + R`)로 새로 고칩니다. `app.js`를 바꿨다면 서버를 껐다가 다시 실행합니다. |

## 소스 구성 (참고)

| 경로 | 내용 |
|---|---|
| `public/www/` | 개편 사이트(정적 파일). 페이지 · 이미지 · 데이터 수정은 이곳에서 합니다. |
| `public/www/assets/reference-data.json` | 교육 레퍼런스 데이터 |
| `public/www/deepcomini/privacy_policy.html` | DeepCoMini 앱 개인정보 처리방침 (본문 문장은 고치지 않음) |
| `app.js` · `www` | 웹 서버 시작 파일 |
| `routes/` · `views/` · `public/` (그 밖) | 이전 사이트와 블록코딩 · 학습 화면 |
| `config/properties-dev.js` | 로컬(`dev`) 실행 설정 |
