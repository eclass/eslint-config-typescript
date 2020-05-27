# @eclass/eslint-config-typescript

[![npm](https://img.shields.io/npm/v/@eclass/eslint-config-typescript.svg)](https://www.npmjs.com/package/@eclass/eslint-config-typescript)
![Node.js CI](https://github.com/eclass/eslint-config-typescript/workflows/Node.js%20CI/badge.svg)
[![downloads](https://img.shields.io/npm/dt/@eclass/eslint-config-typescript.svg)](https://www.npmjs.com/package/@eclass/eslint-config-typescript)
[![dependencies Status](https://david-dm.org/eclass/eslint-config-typescript/status.svg)](https://david-dm.org/eclass/eslint-config-typescript)
[![devDependencies Status](https://david-dm.org/eclass/eslint-config-typescript/dev-status.svg)](https://david-dm.org/eclass/eslint-config-typescript?type=dev)
[![peerDependencies Status](https://david-dm.org/eclass/eslint-config-typescript/peer-status.svg)](https://david-dm.org/eclass/eslint-config-typescript?type=peer)

> This package provides eclass eslint shareable config for typescript.

## Plugins and Configuration included

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/about-npm/).

```
npm i -D eslint @eclass/eslint-config-typescript eslint-plugin-{array-func,eslint-comments,import,node,prettier,promise,security,sonarjs,standard} @typescript-eslint/{eslint-plugin,parser} prettier
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@eclass/eslint-config-typescript"
}
```

### Enable type checking with typescript (slow)

```json
"eslintConfig": {
  "extends": "@eclass/eslint-config-typescript/requiring-type-checking"
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
