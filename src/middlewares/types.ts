// libs
import type { Mid } from '~/src/libs/packages/Express'
// app
import type { E } from '~/src'

//
//
// ========================================= //
// ================ HANDLER ================ //
// ========================================= //
export type Handler = Mid.Handler

// ========================================= //
// ================ REQUEST ================ //
// ========================================= //
export type Req = Mid.Req

// ========================================== //
// ================ RESPONSE ================ //
// ========================================== //
// prettier-ignore
export type Res<Body = any> = Mid.Res<Body, {
    errors: E.Locals
}>

// ====================================== //
// ================ NEXT ================ //
// ====================================== //
export type Next = Mid.Next
