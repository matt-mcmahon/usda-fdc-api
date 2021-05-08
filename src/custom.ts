// the file has been renamed from custom.d.ts to custom.ts to get the build system to copy the file
// to lib dir so reference path works properly. ts compiler does not copy custom d.ts into output dir
// and manual copy will required all reference updates. This way its simpler.
declare module 'portable-fetch';
declare module 'url';