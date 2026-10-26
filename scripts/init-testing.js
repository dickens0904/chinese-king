#!/usr/bin/env node
/**
 * testing-framework 初始化脚本
 * 自动为项目搭建完整测试规范：ESLint + Prettier + Jest + Husky + lint-staged
 *
 * 用法：
 *   node init-testing.js          # 完整初始化
 *   node init-testing.js --check  # 仅检查当前状态
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const projectDir = process.cwd();
const pkgPath = path.join(projectDir, 'package.json');

// ============ 工具函数 ============
function log(icon, msg) {
  console.log(`  ${icon} ${msg}`);
}

function fileExists(p) {
  return fs.existsSync(path.join(projectDir, p));
}

function writeFile(relPath, content) {
  const absPath = path.join(projectDir, relPath);
  const dir = path.dirname(absPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function readPkg() {
  if (!fs.existsSync(pkgPath)) return null;
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

function run(cmd) {
  try {
    execSync(cmd, { cwd: projectDir, stdio: 'inherit' });
    return true;
  } catch {
    return false;
  }
}

// ============ 检测项目类型 ============
function detectProjectType(pkg) {
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  if (allDeps.electron) return 'electron';
  if (allDeps.react || allDeps['react-dom']) return 'react';
  if (allDeps.vue) return 'vue';
  if (allDeps.express || allDeps.koa || allDeps.fastify) return 'backend';
  return 'generic';
}

// ============ 状态检查 ============
function checkStatus() {
  console.log('\n=== 测试框架状态检查 ===\n');

  const pkg = readPkg();
  if (!pkg) {
    log('X', '未找到 package.json');
    return;
  }

  const type = detectProjectType(pkg);
  log('[项目类型]', type);
  log('[项目名称]', pkg.name);

  console.log('\n  依赖检查:');
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  const required = ['eslint', '@eslint/js', 'prettier', 'jest', 'husky', 'lint-staged'];
  for (const dep of required) {
    if (deps[dep]) {
      log('[OK]', `${dep} (${deps[dep]})`);
    } else {
      log('[--]', `${dep} - 未安装`);
    }
  }

  console.log('\n  配置文件:');
  const configs = {
    'eslint.config.js': 'ESLint',
    '.prettierrc.json': 'Prettier',
    '.prettierignore': 'Prettier忽略',
    'jest.config.js': 'Jest',
    '.husky/pre-commit': 'Git hooks',
  };
  for (const [file, label] of Object.entries(configs)) {
    log(fileExists(file) ? '[OK]' : '[--]', `${label} (${file})`);
  }

  console.log('\n  测试文件:');
  if (fileExists('tests')) {
    log('[OK]', 'tests/ 目录存在');
  } else {
    log('[--]', 'tests/ 目录不存在');
  }

  console.log('\n  npm scripts:');
  const scripts = pkg.scripts || {};
  for (const name of ['lint', 'test', 'format']) {
    if (scripts[name]) {
      log('[OK]', `${name}: ${scripts[name]}`);
    } else {
      log('[--]', `${name} - 未配置`);
    }
  }
  console.log('');
}

// ============ 配置模板 ============
const TEMPLATES = {
  eslintConfig(type) {
    const browserGlobals = {
      window: 'readonly', document: 'readonly', navigator: 'readonly',
      fetch: 'readonly', alert: 'readonly', confirm: 'readonly',
      localStorage: 'readonly', setTimeout: 'readonly', setInterval: 'readonly',
      clearTimeout: 'readonly', clearInterval: 'readonly', URL: 'readonly',
      console: 'readonly', Image: 'readonly', Audio: 'readonly',
      MutationObserver: 'readonly', requestAnimationFrame: 'readonly',
      performance: 'readonly', crypto: 'readonly',
    };
    const nodeGlobals = {
      require: 'readonly', module: 'readonly', exports: 'readonly',
      __dirname: 'readonly', __filename: 'readonly', process: 'readonly',
      Buffer: 'readonly',
    };
    const testGlobals = {
      describe: 'readonly', it: 'readonly', test: 'readonly',
      expect: 'readonly', beforeEach: 'readonly', afterEach: 'readonly',
      beforeAll: 'readonly', afterAll: 'readonly', jest: 'readonly',
    };

    const globals = {};
    if (type === 'electron') Object.assign(globals, nodeGlobals, browserGlobals);
    else if (type === 'react' || type === 'vue') Object.assign(globals, browserGlobals);
    else if (type === 'backend') Object.assign(globals, nodeGlobals);
    else Object.assign(globals, nodeGlobals, browserGlobals);

    const g = (o) => Object.entries(o).map(([k, v]) => `        ${k}: '${v}',`).join('\n');

    return `const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
${g(globals)}
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
    files: ['**/*.test.js', '**/*.spec.js', '**/tests/**/*.js'],
    languageOptions: {
      globals: {
${g(testGlobals)}
      }
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', 'eslint.config.js', 'jest.config.js']
  }
];
`;
  },

  prettierRc: () => `{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
`,

  prettierIgnore: () => `node_modules
dist
build
coverage
app-data
*.min.js
`,

  jestConfig(type) {
    const env = (type === 'react' || type === 'vue') ? 'jsdom' : 'node';
    return `module.exports = {
  testEnvironment: '${env}',
  testMatch: ['**/tests/**/*.test.js', '**/__tests__/**/*.js'],
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true,
};
`;
  },

  exampleTest(projectName) {
    return `// 示例单元测试 - ${projectName}
describe('示例测试', () => {
  test('1 + 1 应该等于 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('字符串操作', () => {
    const result = 'hello' + ' ' + 'world';
    expect(result).toBe('hello world');
  });
});

describe('数组操作', () => {
  test('数组去重', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const unique = [...new Set(arr)];
    expect(unique).toEqual([1, 2, 3]);
  });

  test('数组过滤', () => {
    const arr = [1, 2, 3, 4, 5];
    const even = arr.filter(n => n % 2 === 0);
    expect(even).toEqual([2, 4]);
  });
});
`;
  },
};

// ============ 初始化流程 ============
function init() {
  console.log('\n=== 测试规范初始化 ===\n');

  const pkg = readPkg();
  if (!pkg) {
    log('X', '未找到 package.json，请先运行 npm init');
    process.exit(1);
  }

  const type = detectProjectType(pkg);
  log('[项目类型]', type);
  log('[项目名称]', pkg.name);

  // 1. 安装依赖
  console.log('\n--- 第一步：安装依赖 ---');
  const required = ['eslint', '@eslint/js', 'prettier', 'jest', 'husky', 'lint-staged'];
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  const missing = required.filter(d => !allDeps[d]);

  if (missing.length > 0) {
    log('[安装]', missing.join(', '));
    run(`npm install --save-dev ${missing.join(' ')}`);
  } else {
    log('[OK]', '所有依赖已安装');
  }

  // 2. 创建配置文件
  console.log('\n--- 第二步：创建配置文件 ---');
  const files = [
    ['eslint.config.js', () => TEMPLATES.eslintConfig(type)],
    ['.prettierrc.json', TEMPLATES.prettierRc],
    ['.prettierignore', TEMPLATES.prettierIgnore],
    ['jest.config.js', () => TEMPLATES.jestConfig(type)],
  ];
  for (const [file, gen] of files) {
    if (fileExists(file)) {
      log('[跳过]', file);
    } else {
      writeFile(file, gen());
      log('[创建]', file);
    }
  }

  // 3. 创建测试目录
  console.log('\n--- 第三步：创建测试文件 ---');
  const testFile = 'tests/unit/example.test.js';
  if (fileExists(testFile)) {
    log('[跳过]', '测试示例已存在');
  } else {
    writeFile(testFile, TEMPLATES.exampleTest(pkg.name));
    log('[创建]', testFile);
  }

  // 4. 配置 Husky
  console.log('\n--- 第四步：配置 Git hooks ---');
  if (fs.existsSync(path.join(projectDir, '.git'))) {
    if (!fileExists('.husky/pre-commit')) {
      run('npx husky init');
      writeFile('.husky/pre-commit', 'npx lint-staged\n');
      log('[创建]', 'Husky pre-commit hook');
    } else {
      log('[跳过]', 'pre-commit hook 已存在');
    }
  } else {
    log('[跳过]', '未初始化 Git 仓库（请先运行 git init）');
  }

  // 5. 更新 package.json
  console.log('\n--- 第五步：更新 package.json ---');
  const newPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  let changed = false;

  if (!newPkg.scripts) newPkg.scripts = {};
  const newScripts = {
    lint: 'npx eslint .',
    'lint:fix': 'npx eslint . --fix',
    format: 'npx prettier --write .',
    'format:check': 'npx prettier --check .',
    test: 'npx jest',
    'test:watch': 'npx jest --watch',
    'test:coverage': 'npx jest --coverage',
  };
  for (const [key, val] of Object.entries(newScripts)) {
    if (!newPkg.scripts[key]) { newPkg.scripts[key] = val; changed = true; }
  }

  if (!newPkg['lint-staged']) {
    newPkg['lint-staged'] = {
      '*.js': ['eslint --fix', 'prettier --write'],
      '*.{json,css,md}': ['prettier --write'],
    };
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(newPkg, null, 2) + '\n', 'utf8');
    log('[更新]', 'package.json');
  } else {
    log('[跳过]', 'package.json 已包含所有配置');
  }

  // 完成
  console.log('\n' + '='.repeat(50));
  console.log('[完成] 测试规范初始化成功！\n');
  console.log('  可用命令:');
  console.log('    npm run lint          ESLint 检查');
  console.log('    npm run lint:fix      ESLint 自动修复');
  console.log('    npm run format        Prettier 格式化');
  console.log('    npm run format:check  Prettier 检查');
  console.log('    npm test              运行单元测试');
  console.log('    npm run test:watch    监听模式');
  console.log('    npm run test:coverage 覆盖率报告');
  console.log('');
}

// ============ 主入口 ============
if (checkOnly) {
  checkStatus();
} else {
  init();
}
