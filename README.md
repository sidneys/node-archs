# node-archs [![Build Status](https://travis-ci.org/sidneys/node-archs.svg?branch=master)](https://travis-ci.org/sidneys/node-archs)

**List all [archs (cpu architectures)](https://nodejs.org/api/process.html#process_process_arch) currently supported by NodeJS.**


## Install

```
$ npm install --save node-archs
```


## API

The module exports itself as an Array.

```js
const nodeArchs = require('node-archs')
```

```js
console.log(nodeArchs)
['arm', 'arm64', 'ia32', ...]
```

## Reported architectures 

This module reports all architectures supported by NodeJS as of 08/2016:

- arm
- arm64
- ia32
- mips
- mipsel
- ppc
- ppc64
- s390
- s390x
- x32
- x64
- x86


## License

MIT © [sidneys](http://sidneys.github.io)


## Related

Inspired by Sindre Sorhus' [node-platforms](https://github.com/sindresorhus/node-platforms)
