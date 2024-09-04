/**
 * Removes line breaks and extra spaces from a template literal string.
 * Usage with template literals. To call the function, do not use parentheses.
 *
 * @param {TemplateStringsArray} strings - The template literal's string parts.
 * @param {...unknown[]} values - The values to interpolate into the template literal.
 * @returns {string} The string with line breaks and extra spaces removed.
 *
 * @example
 * const result = removeLineBreaks`This is a line
 * break example.   It will be cleaned.`;
 * result will be: "This is a line break example. It will be cleaned."
 */
const removeLineBreaks = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => {
  let result = '';

  for (let i = 0; i < strings.length; i += 1) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }

  // Remove line breaks and extra spaces
  result = result.replace(/\s+/g, ' ');

  return result;
};

export default removeLineBreaks;
