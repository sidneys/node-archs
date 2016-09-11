# node-archs [![Build Status](https://travis-ci.org/sidneys/node-archs.svg?branch=v1.0.0)](https://travis-ci.org/sidneys/node-archs) [![Issues](https://img.shields.io/github/issues/sidneys/node-archs.svg)](https://github.com/sidneys/node-archs/issues) [![Chat](https://badges.gitter.im/sidneys/node-archs.svg)](https://gitter.im/sidneys/node-archs)

**List all [cpu architectures](https://nodejs.org/api/process.html#process_process_arch) currently supported by NodeJS.**

---

## Installation

```shell
$ npm install --save node-archs
```

## API

### Integration

```js
const nodeArchs = require('node-archs')
```

### Usage

The module exports an Array:

```js
console.log(nodeArchs)
['arm', 'arm64', 'ia32', ...]
```

## Content

This module reports the currently supported NodeJS architectures:
`arm`, `arm64`, `ia32`, `mips`, `mipsel`, `ppc`, `ppc64`, `s390`, `s390x`, `x32`, `x64`, `x86`


## License

MIT © [sidneys](http://sidneys.github.io)


## Related

Inspired by [node-platforms](https://github.com/sindresorhus/node-platforms)
