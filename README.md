# HAMAYA-vite-2.0

### 前言
[HAMAYA MUSIC](https://github.com/TSENG-TZU-YU/MFEE27-HAMAYA)
這是一個之前資策會小組專題的升級版。  
給自己在正式上班後，用學到的技術做一個大挑戰，不知道何時完成先立flag :triangular_flag_on_post:  
希望今年可以完成!今天(2023/3/17)  


### 專案指令
nodejs 版本 `19.1.0`  
開發環境  
```shell
npm run dev
```

### Commit Rule

Git Commit 需依照下方 style guide，Commit 規則可以參考 [commitlint](https://commitlint.js.org/#/)

```shell
- feat: 新增/修改功能 (feature)。

- ci: 部屬 (ci/cd)

- fix: 修補 bug (bug fix)。

- docs: 文件 (documentation)。

- style: 格式 (不影響程式碼運行的變動 white-space, formatting, missing semi colons, etc)。

- refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。

- perf: 改善效能 (A code change that improves performance)。

- test: 增加測試 (when adding missing tests)。

- chore: 建構程序或輔助工具的變動 (maintain)。

- revert: 撤銷回覆先前的 commit 例如：revert: type(scope): subject (回覆版本：xxxx)。
```
### 專案相關

- 專案架構

  ```
  project
  └─── src
  |   └─ images   // 存放圖片 , svg
  |   └─ interface  // 型別
  |   └─ pages    // 頁面
  |   └─ redux  // slice , saga
  |   └─ routes  // 路由設定
  |   └─ server   // API 相關設置
  |   └─ stories  // component , module
  |   └─ utils    // 共用 function
  |
  └─── antd.config.js  // antd 主題樣式
  └─── tailwind.config.js  // tailwind 設定
  ...
  ```

- 專案套件

    - 使用 Ant design Library，若是要更改元件樣式主題顏色/樣式，可以在 `antd.config.js` 設置，可參考[官方文件](https://github.com/ant-design/ant-design/blob/master/docs/react/customize-theme.zh-CN.md)
    
    - 盡量使用 TailwindCSS，另外在 `tailwind.config.js` 有統一規範專案使用到的色碼
    - storybook
    - 使用Github Pages [HAMAYA-vite-2.0](https://youjenwen.github.io/HAMAYA-vite-2.0/) (deploy.sh 為vite官方提供 版本v3文件)