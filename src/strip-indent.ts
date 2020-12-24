import { EOL } from 'os';
import stripAnsi from 'strip-ansi';


/**
 * Provided a multi-line string, reduces the leading whitespace of the first
 * non-empty line to zero, then reduces the leading whitespace of every
 * additional line by the same amount.
 */
export default function stripIndent(str: string) {
  const lines = str.split(EOL);

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
  return lines.map(line => line.replace(pattern, '')).join(EOL);
}
