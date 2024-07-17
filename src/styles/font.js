const fontGenerator = (size, lineHeight) =>
  `
  font-size: ${size}px;
  line-height: ${lineHeight}px;
`;

export const font = {
  display: fontGenerator(45, 52),
  headLine: fontGenerator(28, 36),
  title: fontGenerator(16, 24),
  label: fontGenerator(12, 16),
  body: fontGenerator(14, 20),
};
