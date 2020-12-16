import os from 'os';
import stripAnsi from 'strip-ansi';


/**
 * Optional options object that may be passed as a second argument to
 * strip-indent.
 */
export interface StripIndentOptions {
  /**
   * If true, strip-indent will remove the first line of the provided string if
   * it contains whitespace only.
   */
  stripEmptyLeading?: boolean;

  /**
   * If true, strip-indent will remove the last line of the provided string if
   * it contains whitespace only.
   */
  stripEmptyTrailing?: boolean;
}


/**
 * Provided a multi-line string, reduces the leading whitespace of the first
 * non-empty line to zero, then reduces the leading whitespace of every
 * additional line by the same amount.
 */
export default function stripIndent(str: string, options: StripIndentOptions = {}) {
  const lines = str.split(os.EOL);

  // If the provided string is only 1 line, return.
  if (lines.length === 1) {
    return str;
  }

  // Find the first line that contains non-whitespace characters. When making
  // this determination, strip any ANSI escape sequences from the line.
  const firstNonEmptyLine = lines.find(line => /\S/g.test(stripAnsi(line)));

  // If all lines contain only whitespace characters, return.
  if (firstNonEmptyLine === undefined) {
    return str;
  }

  // Capture the amount of leading whitespace in the first non-empty line. When
  // computing leading whitespace, strip any ANSI escape sequences from the
  // line.
  const leadingWhitespaceInFirstNonEmptyLine = /^\s+/g.exec(stripAnsi(firstNonEmptyLine));

  // If there is no leading whitespace in the first non-empty line, return.
  if (leadingWhitespaceInFirstNonEmptyLine === null) {
    return str;
  }

  // Create a regular expression that will match the first occurance of the
  // desired amount of whitespace we want to strip from each line.
  const pattern = new RegExp(leadingWhitespaceInFirstNonEmptyLine[0]);

  // Remove leading whitespace from each line. Additionally, if the first and
  // last lines only contain whitespace, remove them.
  return lines.map((line, index) => {
    // Trim leading empty lines. When making this determination, strip any ANSI
    // escape sequences from the line.
    if (options.stripEmptyLeading && index === 0 && /^\s*$/.test(stripAnsi(line))) {
      return false;
    }

    // Trim trailing empty lines. When making this determination, strip any ANSI
    // escape sequences from the line.
    if (options.stripEmptyTrailing && index === lines.length - 1 && /^\s*$/.test(stripAnsi(line))) {
      return false;
    }

    return line.replace(pattern, '');
  }).filter(line => line !== false).join(os.EOL);
}
