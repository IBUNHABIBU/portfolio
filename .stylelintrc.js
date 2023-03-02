{
    "extends": ["stylelint-config-standard"],
    "plugins": ["stylelint-scss", "stylelint-csstree-validator"],
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen"]
        }
      ],
      "scss/at-rule-no-unknown":  [
        true,
        {
          "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen"]
        }
      ],
      "csstree/validator": true
    },
    "ignoreFiles": ["build/**", "dist/**", "**/reset*.css", "**/bootstrap*.css", "**/*.js", "**/*.jsx"]
  }