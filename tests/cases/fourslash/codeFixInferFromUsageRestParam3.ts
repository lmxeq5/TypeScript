/// <reference path='fourslash.ts' />

// @noImplicitAny: true
////function f(a: number, [|...rest |]){
////    rest.push(22);
////}

verify.rangeAfterCodeFix("...rest: number[]");