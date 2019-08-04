import os from 'os';
import chalk from 'chalk';
import stripIndent from './strip-indent';


describe('stripIndent', () => {
  describe('when provided a 1-line string', () => {
    it('should return the string', () => {
      const str = 'kittens';
      expect(stripIndent(str)).toBe(str);
    });
  });

  describe('when provided a string where all lines are whitespace', () => {
    it('should return the string', () => {
      const str = '\t\n\t\n\t\n';
      expect(stripIndent(str)).toBe(str);
    });
  });

  describe('when the first non-whitespace line contains no leading indent', () => {
    it('should return the string', () => {
      const str = [
        '\t',
        'kittens',
        '\t'
      ].join(os.EOL);

      expect(stripIndent(str)).toBe(str);
    });
  });

  describe('when the `stripEmptyLeading` option is set', () => {
    it('should remove the first line if it contains whitespace only', () => {
      const lines = ['kittens', 'rainbows', 'unicorns'];

      const str = [
        '\t\t',
        `\t${lines[0]}`,
        `\t${lines[1]}`,
        `\t${lines[2]}`
      ].join(os.EOL);

      const expected = [
        lines[0],
        lines[1],
        lines[2]
      ].join(os.EOL);

      expect(stripIndent(str, {stripEmptyLeading: true})).toBe(expected);
    });

    it('should not remove the first line if it contains non-whitespace', () => {
      const lines = ['kittens', 'rainbows', 'unicorns'];

      const str = [
        `\t${lines[0]}`,
        `\t${lines[1]}`,
        `\t${lines[2]}`
      ].join(os.EOL);

      const expected = [
        lines[0],
        lines[1],
        lines[2]
      ].join(os.EOL);

      expect(stripIndent(str, {stripEmptyLeading: true})).toBe(expected);
    });
  });

  describe('when the `stripEmptyTrailing` option is set', () => {
    it('should remove the last line if it contains whitespace only', () => {
      const lines = ['kittens', 'rainbows', 'unicorns'];

      const str = [
        `\t${lines[0]}`,
        `\t${lines[1]}`,
        `\t${lines[2]}`,
        '\t\t'
      ].join(os.EOL);

      const expected = [
        lines[0],
        lines[1],
        lines[2]
      ].join(os.EOL);

      expect(stripIndent(str, {stripEmptyTrailing: true})).toBe(expected);
    });

    it('should not remove the last line if it contains non-whitespace', () => {
      const lines = ['kittens', 'rainbows', 'unicorns'];

      const str = [
        `\t${lines[0]}`,
        `\t${lines[1]}`,
        `\t${lines[2]}`
      ].join(os.EOL);

      const expected = [
        lines[0],
        lines[1],
        lines[2]
      ].join(os.EOL);

      expect(stripIndent(str, {stripEmptyTrailing: true})).toBe(expected);
    });
  });

  describe('handing ANSI escape sequences', () => {
    it('should account for ANSI escape sequences when computing whitespace', () => {
      const lines = ['kittens', 'rainbows', 'unicorns'];

      const str = chalk.gray([
        `\t${lines[0]}`,
        `\t${lines[1]}`,
        `\t${lines[2]}`
      ].join(os.EOL));

      const expected = chalk.gray([
        lines[0],
        lines[1],
        lines[2]
      ].join(os.EOL));

      expect(stripIndent(str)).toBe(expected);

      const str2 = [
        chalk.gray(`\t${lines[0]}`),
        chalk.blue(`\t${lines[1]}`),
        chalk.underline(`\t${lines[2]}`)
      ].join(os.EOL);

      const expected2 = [
        chalk.gray(lines[0]),
        chalk.blue(lines[1]),
        chalk.underline(lines[2])
      ].join(os.EOL);

      expect(stripIndent(str2)).toBe(expected2);
    });
  });

  it('should reduce leading whitespace in the first non-whitespace line to zero and reduce whitespace in all other lines by the same amount', () => {
    const lines = ['kittens', 'rainbows', 'unicorns'];

    const str = [
      `\t${lines[0]}`,
      `\t\t${lines[1]}`,
      `\t\t${lines[2]}`
    ].join(os.EOL);

    const expected = [
      `${lines[0]}`,
      `\t${lines[1]}`,
      `\t${lines[2]}`
    ].join(os.EOL);

    expect(stripIndent(str)).toBe(expected);
  });
});
