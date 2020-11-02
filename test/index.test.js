const { TestScheduler } = require("jest");

describe('Sum two numbers', () => {
  test('pass: a + b = c', ()=> {
    const a = 5;
    const b = 5;
    const c = 10;
    expect(a+b).toBe(c);
  })
});