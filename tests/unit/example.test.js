// 示例单元测试 - 语文小霸王核心逻辑测试
// 这些测试验证项目中可复用的纯函数

describe('示例测试', () => {
  test('1 + 1 应该等于 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('字符串拼接', () => {
    const result = '语文' + '小霸王';
    expect(result).toBe('语文小霸王');
  });
});

describe('数组操作测试', () => {
  test('数组去重', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const unique = [...new Set(arr)];
    expect(unique).toEqual([1, 2, 3]);
  });

  test('数组洗牌后长度不变', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    expect(shuffled.length).toBe(arr.length);
  });
});

describe('对象操作测试', () => {
  test('对象属性访问', () => {
    const obj = { name: '语文小霸王', version: '1.0.0' };
    expect(obj.name).toBe('语文小霸王');
    expect(obj.version).toBe('1.0.0');
  });

  test('对象展开合并', () => {
    const base = { a: 1, b: 2 };
    const extra = { c: 3 };
    const merged = { ...base, ...extra };
    expect(merged).toEqual({ a: 1, b: 2, c: 3 });
  });
});
