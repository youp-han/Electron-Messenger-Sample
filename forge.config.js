// forge.config.js
const isMac = process.platform === 'darwin';

// 환경변수 있으면 서명/노타라이즈, 없으면 생략
const hasCodeSign =
  !!process.env.CSC_NAME &&
  !!process.env.APPLE_ID &&
  !!process.env.APPLE_APP_SPECIFIC_PW &&
  !!process.env.APPLE_TEAM_ID;

module.exports = {
  packagerConfig: {
    icon: "assets/icon",  // mac: .icns, win: .ico (확장자 없이)
    asar: true,
    appBundleId: "com.jjst.electronmessenger",
    ...(isMac && hasCodeSign
      ? {
          osxSign: {
            identity: process.env.CSC_NAME,
            hardenedRuntime: true,
            entitlements: "entitlements.plist",
            entitlementsInherit: "entitlements.plist",
            gatekeeperAssess: false
          },
          osxNotarize: {
            appleId: process.env.APPLE_ID,
            appleIdPassword: process.env.APPLE_APP_SPECIFIC_PW,
            teamId: process.env.APPLE_TEAM_ID
          }
        }
      : {})
  },
  makers: [
    { name: "@electron-forge/maker-dmg", platforms: ["darwin"] },
    { name: "@electron-forge/maker-zip", platforms: ["darwin"] },
    { name: "@electron-forge/maker-squirrel", platforms: ["win32"] },
    { name: "@electron-forge/maker-deb", platforms: ["linux"] },
    { name: "@electron-forge/maker-rpm", platforms: ["linux"] }
  ]
};
