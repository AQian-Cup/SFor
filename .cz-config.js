module.exports = {
  types: [
    { value: "feat", name: "feat: 增加新特征" },
    { value: "fix", name: "fix: 修复bug" },
    { value: "docs", name: "docs: 文档变更" },
    {
      value: "style",
      name: "style: 不影响代码含义的修改",
    },
    { value: "perf", name: "perf: 性能优化" },
    {
      value: "refactor",
      name: "refactor: 重构",
    },
    { value: "release", name: "release: 发布" },
    { value: "test", name: "test: 增加测试" },
    { value: "revert", name: "revert: 回退" },
    {
      value: "build",
      name: "build: 对构建系统或者外部依赖项进行了修改",
    },
  ],
  scopes: [
    {
      name: "core",
    },
    {
      name: "view",
    },
    {
      name: "control",
    },
    {
      name: "data",
    },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "请选择提交类型:",
    scope: "请选择您修改的范围:",
    customScope: "请输入您修改的范围:",
    subject: "请简要描述提交 message:",
    body: "请输入详细描述(可选，待优化去除，跳过即可):",
    footer: "请输入要关闭的issue(待优化去除，跳过即可):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
  },
  allowCustomScopes: true,
  skipQuestions: ["body", "footer"],
  subjectLimit: 72,
};
