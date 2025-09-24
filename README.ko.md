# Electron 메신저 샘플

[English Readme](./README.md)

단일 데스크톱 애플리케이션에서 웹 기반 메신저 앱을 실행하는 간단한 Electron 애플리케이션입니다. 이 프로젝트는 기본 데스크톱 클라이언트가 없거나 회사 PC에 설치가 차단된 메신저 애플리케이션의 웹 버전을 로드하기 위한 샘플 역할을 합니다.

[English Readme](./README.md)

## 포함된 메신저

*   텔레그램
*   디스코드
*   왓츠앱

## 작동 방식

이 애플리케이션은 Electron으로 빌드되었으며 간단한 아키텍처를 사용합니다.

1.  **메인 프로세스 (`main.js`):**
    *   메인 브라우저 창(`index.html`)을 생성합니다.
    *   렌더러 프로세스에서 오는 IPC(Inter-Process Communication) 이벤트(`'redirect-new'`)를 수신합니다.
    *   이벤트가 수신되면 새 `BrowserWindow`를 만들고 지정된 메신저 URL을 로드합니다.

2.  **렌더러 프로세스 (`index.js` & `index.html`):**
    *   각 메신저 서비스에 대한 버튼을 표시합니다.
    *   버튼을 클릭하면 `contextBridge` 및 `ipcRenderer` 모듈을 사용하여 해당 URL을 메인 프로세스로 보냅니다.

3.  **프리로드 스크립트 (`preload.js`):**
    *   `send` 메서드를 사용하여 `myapi` 객체를 렌더러 프로세스에 안전하게 노출합니다. 이를 통해 렌더러는 전체 `ipcRenderer` API를 노출하지 않고도 메인 프로세스와 통신할 수 있으며 이는 보안 모범 사례입니다.

## 사용 방법

### 전제 조건

*   Node.js 버전 16.10.0 이상.

### 설치

1.  저장소를 복제합니다.
    ```bash
    git clone https://github.com/youp-han/Electron-Messenger-Sample.git
    ```
2.  프로젝트 디렉토리로 이동합니다.
    ```bash
    cd Electron-Messenger-Sample
    ```
3.  필요한 패키지를 설치합니다.
    ```bash
    npm install
    ```

### 앱 실행

테스트 목적으로 애플리케이션을 실행하려면:

```bash
npm start
```

### 앱 빌드

애플리케이션을 실행 파일(`.exe` for Windows, `.dmg` for macOS)로 빌드하려면:

```bash
npm run make
```

출력 파일은 `out/make` 디렉토리에 있습니다.

**참고:** macOS 배포 빌드의 경우 `CSC_NAME`, `APPLE_ID`, `APPLE_APP_SPECIFIC_PW` 및 `APPLE_TEAM_ID` 환경 변수를 설정해야 합니다.

## 사용된 기술

*   [Electron](https://www.electronjs.org/)
*   [Node.js](https://nodejs.org/)
*   HTML
*   CSS
*   JavaScript

## 스크린샷

![image](https://github.com/youp-han/Electron-Messenger-Sample/assets/5876977/0a5fccdd-f0af-400d-9c84-3ecefe9bdbd6)
![image](https://github.com/youp-han/Electron-Messenger-Sample/assets/5876977/3b5adaff-a854-4353-ba3d-ef291af15525)
