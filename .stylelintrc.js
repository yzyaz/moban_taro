module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  rules: {
    'unit-no-unknown': [
      true,
      {
        ignoreFunctions: ['image-set', 'X'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
};
