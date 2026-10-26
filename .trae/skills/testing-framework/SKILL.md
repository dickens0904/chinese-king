---
name: "testing-framework"
description: "搭建完整的前端/Electron项目测试规范（ESLint + Prettier + Jest + Playwright + Husky）。当用户要求搭建测试环境、配置代码检查、创建单元测试或E2E测试时触发。"
---

# 测试规范框架

适用于 Electron、Node.js、前端项目的完整测试规范。一键搭建，开箱即用。

## 触发条件

当用户提出以下需求时调用本技能：
- "搭建测试环境" / "配置测试"
- "添加 ESLint" / "代码检查"
- "写单元测试" / "写E2E测试"
- "配置 Prettier" / "代码格式化"
- "配置 Git hooks" / "提交前检查"
- "测试规范" / "代码质量"

## 框架组成

| 工具 | 用途 | 优先级 |
|------|------|--------|
| ESLint | 静态代码分析 | 必须 |
| Prettier | 代码格式化 | 推荐 |
| Jest | 单元测试 | 推荐 |
| Playwright | E2E 测试 | 可选 |
| Husky + lint-staged | Git hooks | 推荐 |
| npm audit | 依赖安全 | 推荐 |

## 搭建流程

按以下步骤执行，每步完成后再进入下一步。

### 第一步：检测项目类型

读取 `package.json` 判断项目类型：
- 有 `electron` 依赖 → Electron 项目
- 有 `react` / `vue` / `angular` → 前端框架项目
- 有 `express` / `koa` / `fastify` → 后端项目
- 其他 → 通用 Node.js 项目

根据类型调整配置（主要是 globals 和环境变量）。

### 第二步：安装依赖

```bash
# 核心
npm install --save-dev eslint @eslint/js prettier

# Jest 单元测试
npm install --save-dev jest

# Playwright E2E（可选，Electron 项目推荐）
npm install --save-dev @playwright/test

# Git hooks
npm install --save-dev husky lint-staged
```

> 注意：如果网络慢，使用 `npm install --save-dev --registry=https://registry.npmmirror.com`

### 第三步：创建配置文件

按顺序创建以下文件：

#### 3.1 eslint.config.js

根据项目类型生成。通用模板：

```javascript
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        // 根据项目类型添加 globals
        // Electron: require, module, __dirname, process, console
        // Browser: window, document, navigator, fetch, localStorage
        // 测试: describe, it, expect, test, beforeEach, afterEach, jest
      }
    },
    rules: {
      'no-unused-vars': ['warn', { args: 'none', varsIgnorePattern: '^_' }],
      'no-empty': 'warn',
      'no-debugger': 'warn',
      'no-undef': 'error',
      'no-redeclare': 'warn',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-unreachable': 'warn',
      'no-constant-condition': 'warn',
      'no-extra-semi': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-unexpected-multiline': 'error',
      'no-sparse-arrays': 'error',
      'no-func-assign': 'warn',
      'no-dupe-else-if': 'error',
      'no-loss-of-precision': 'warn',
      'no-self-assign': 'warn',
      'no-self-compare': 'warn',
      'eqeqeq': ['warn', 'smart'],
      'no-eval': 'warn',
      'no-implied-eval': 'warn',
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**']
  }
];
```

**Electron 项目额外 globals：**
```javascript
require: 'readonly', module: 'readonly', exports: 'readonly',
__dirname: 'readonly', process: 'readonly', Buffer: 'readonly',
```

**Browser 项目额外 globals：**
```javascript
window: 'readonly', document: 'readonly', navigator: 'readonly',
fetch: 'readonly', localStorage: 'readonly', setTimeout: 'readonly',
setInterval: 'readonly', clearTimeout: 'readonly', clearInterval: 'readonly',
```

**Jest 测试文件额外 globals（用 overrides）：**
```javascript
{
  files: ['**/*.test.js', '**/*.spec.js', '**/tests/**/*.js'],
  languageOptions: {
    globals: {
      describe: 'readonly', it: 'readonly', test: 'readonly',
      expect: 'readonly', beforeEach: 'readonly', afterEach: 'readonly',
      beforeAll: 'readonly', afterAll: 'readonly', jest: 'readonly',
    }
  }
}
```

#### 3.2 .prettierrc.json

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

#### 3.3 .prettierignore

```
node_modules
dist
build
coverage
app-data
*.min.js
```

#### 3.4 jest.config.js

```javascript
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js', '**/__tests__/**/*.js'],
  collectCoverageFrom: [
    'renderer/scripts/**/*.js',
    '!renderer/scripts/app.js',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true,
};
```

**Electron 项目注意：** 由于渲染进程代码依赖 DOM，测试纯逻辑函数时用 `testEnvironment: 'node'`。如果需要测试 DOM 操作，用 Playwright E2E。

#### 3.5 playwright.config.js（可选）

```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});
```

**Electron 项目 E2E 配置：**
```javascript
// e2e/fixtures.js
const { _electron: electron } = require('@playwright/test');

async function launchApp() {
  const app = await electron.launch({ args: ['.'] });
  const window = await app.firstWindow();
  return { app, window };
}

module.exports = { launchApp };
```

### 第四步：创建测试目录和示例

创建目录结构：
```
tests/
  unit/           # 单元测试
    example.test.js
e2e/              # E2E 测试（可选）
  example.spec.js
```

#### 单元测试示例 tests/unit/example.test.js：

```javascript
// 示例：测试纯函数
describe('示例测试', () => {
  test('1 + 1 应该等于 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('字符串拼接', () => {
    const result = '语文' + '小霸王';
    expect(result).toBe('语文小霸王');
  });
});
```

#### E2E 测试示例 e2e/example.spec.js：

```javascript
const { test, expect } = require('@playwright/test');

test('应用标题正确', async ({ page }) => {
  await page.goto('file:///path/to/index.html');
  await expect(page).toHaveTitle(/语文小霸王/);
});

test('模块自检通过', async ({ page }) => {
  await page.goto('file:///path/to/index.html');
  await page.waitForTimeout(2000);
  const status = await page.evaluate(() => {
    return typeof CONTENT_DATA !== 'undefined';
  });
  expect(status).toBe(true);
});
```

### 第五步：配置 Git hooks

#### 5.1 初始化 Husky

```bash
npx husky init
```

#### 5.2 配置 lint-staged（package.json 中添加）

```json
{
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

#### 5.3 pre-commit hook

```bash
echo "npx lint-staged" > .husky/pre-commit
```

### 第六步：添加 npm scripts（package.json）

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "npx playwright test",
    "test:all": "npm run lint && npm run test && npm run test:e2e",
    "audit": "npm audit --production",
    "precommit": "lint-staged"
  }
}
```

### 第七步：运行验证

```bash
# 验证 ESLint
npm run lint

# 验证 Prettier
npm run format:check

# 验证 Jest
npm test

# 验证全部
npm run test:all
```

## 项目类型适配指南

### Electron 项目
- 测试纯逻辑函数（游戏引擎、数据处理）用 Jest
- 测试 UI 交互用 Playwright + Electron
- 渲染进程代码需 mock DOM 环境
- 注意 `nodeIntegration` 和 `contextIsolation` 设置

### React/Vue 项目
- 组件测试用 `@testing-library/react` 或 `@vue/test-utils`
- E2E 用 Playwright 访问 dev server
- 添加 `jsdom` 测试环境

### Node.js 后端项目
- API 测试用 `supertest`
- 数据库测试用内存数据库
- Mock 外部依赖用 `jest.mock()`

## 常见问题

### Q: ESLint 和 Prettier 冲突怎么办？
A: ESLint 负责代码质量规则，Prettier 负责格式化。不要在 ESLint 中启用格式化规则（如 `indent`、`quotes`）。

### Q: 测试覆盖率多少合适？
A: 核心逻辑模块 80%+，工具函数 90%+，UI 组件 50%+。不要盲目追求 100%。

### Q: Electron E2E 测试很慢怎么办？
A: 只对关键用户流程做 E2E 测试，大部分逻辑用单元测试覆盖。E2E 测试控制在 10 个以内。

### Q: 如何测试有副作用的函数？
A: 使用 Jest 的 `jest.mock()` 和 `jest.spyOn()` 来 mock 外部依赖。

## 快速命令参考

```bash
# 一键搭建（在项目根目录执行）
npm install --save-dev eslint @eslint/js prettier jest husky lint-staged

# 初始化
npx husky init
echo "npx lint-staged" > .husky/pre-commit

# 运行检查
npm run lint          # ESLint 检查
npm run lint:fix      # ESLint 自动修复
npm run format        # Prettier 格式化
npm test              # 运行单元测试
npm run test:coverage # 测试覆盖率报告
```
