// ===================================================== //
// ======================== Api ======================== //
// ===================================================== //
export type { NextApiRequest as Req, NextApiResponse as Res } from 'next'

//
//
// ============================================================ //
// ======================== MyDocument ======================== //
// ============================================================ //
// prettier-ignore
export { default as Document, Html, Head, Main, NextScript as Script } from 'next/document'
export * as Doc from './Document'

//
//
// ======================================================= //
// ======================== MyApp ======================== //
// ======================================================= //
export type { AppProps } from 'next/app'
export type { NextRouter as Router } from 'next/router'

//
//
// ====================================================== //
// ======================== Page ======================== //
// ====================================================== //
export type { NextPage as Page } from 'next'

//
//
// ============================================================ //
// ======================== Components ======================== //
// ============================================================ //
export { default as HeadInject } from 'next/head'
export { default as Image } from 'next/image'

//
//
// ========================================================== //
// ======================== Features ======================== //
// ========================================================== //
export * as fonts_google from '@next/font/google'
