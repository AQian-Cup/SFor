module.exports = {
  extends: ["@commitlint/config-conventional", "cz"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 增加新特征
        "fix", // 修复bug
        "docs", // 文档变更
        "style", // 不影响代码含义的修改
        "perf", // 性能优化
        "refactor", // 重构
        "release", // 发布
        "test", // 增加测试
        "revert", // 撤销之前的commit
        "build", // 对构建系统或者外部依赖项进行了修改
      ],
    ],
    // <type> 格式 小写
    "type-case": [2, "always", "lower-case"],
    // <type> 不能为空
    "type-empty": [2, "never"],
    // <scope> 范围不能为空
    "scope-empty": [2, "never"],
    // <scope> 范围格式
    "scope-case": [0],
    // <subject> 主要 message 不能为空
    "subject-empty": [2, "never"],
    // <subject> 以什么为结束标志，禁用
    "subject-full-stop": [0, "never"],
    // <subject> 格式，禁用
    "subject-case": [0, "never"],
    // <body> 以空行开头
    "body-leading-blank": [1, "always"],
    "header-max-length": [0, "always", 72],
  },
};
