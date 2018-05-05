module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        // browser グローバル変数を使用する
        "browser": true,
    },
    "globals": {
        "window": true,
        "module": true
    },
    "rules": {
        // インデントスタイルは3スペースに強制
        "indent": ["error", 3],
        // 改行コードはWindows
        "linebreak-style": ["error", "windows"],
        //演算子の前後にはスペースを強制
        "space-infix-ops": "error",
        //宣言されていない変数の使用を禁止
        "no-undef": "error",
        //アロー関数の矢印の前後にスペースを強制
        "arrow-spacing": "error",
        //未使用変数
        "no-unused-vars": "warn",
        //条件式で代入
        "no-cond-assign": "error",
        //keyの重複
        "no-dupe-keys": "error",
        /*** 鬱陶しいのでとりあえず無効追加 ***/
        "require-jsdoc" : "off",
        "space-before-blocks": "off",
        "keyword-spacing" : "off",
        "spaced-comment": "off"
    }
  };