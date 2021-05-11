//
// NOTE: DO NOT REPLACE THIS WITH THE DEFAULT custom.d.ts FILE. IF YOU ARE UPATING TO NEW VERSION
// OF CLIENT MAKE SURE TO COPY OVER CONTENTS from custom.d.ts TO custom.ts. OTHERWISE YOU WILL
// BREAK REFERENCES.
//
// Whats this file? https://microsoft.github.io/TypeScript-New-Handbook/chapters/type-declarations/
//
// the file has been renamed from custom.d.ts to custom.ts to get the build system to copy the file
// to lib dir so reference path works properly. ts compiler does not copy custom d.ts into output dir
// and manual copy will required all reference updates. This way its simpler.
declare module 'portable-fetch';
declare module 'url';