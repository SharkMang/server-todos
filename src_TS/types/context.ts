import koa, { ParameterizedContext, Request, Context } from 'koa'
import { TODOS_STATUS } from '../constants'

// interface ContextCtx extends ParameterizedContext {}

// export interface StateCtx {
//   user: {
//     userId: number
//   }
// }


interface BodyCtx extends Request { updateStatus: TODOS_STATUS } /*| { name?: string; status?: TODOS_STATUS } | { delStatus: TODOS_STATUS }*/

// export interface ContextCTX {
//   query?: QueryCtx
//   // params?: ParamsCtx
//   body?: BodyCtx
// }

// export interface QueryCtx {
//   page: string
//   limit: string
//   filter: TODOS_STATUS
// }

// interface ParamsCtx {
//   id: number
// }

// export declare module "koa" {
//   interface Context {
//     state: {
//       user: {
//         userId: number
//       }
//     }
//     query: {
//       page: string
//       limit: string
//       filter: TODOS_STATUS
//     }

//     request: {
//       body: 
//         { updateStatus: TODOS_STATUS }
//         | { 
//             name?: string
//             status?: TODOS_STATUS
//           }
//         | { delStatus: TODOS_STATUS }
//     }

//     params: {
//       id: number
//     }
//   }
// }

// export interface Context extends Koa.Context {
//   state: {
//     user: {
//       userId: number
//     }
//   }
//   query: {
//     page: string
//     limit: string
//     filter: TODOS_STATUS
//   }
//   request: {
//     body:{
//       resp:number
//     }
//   }
// }

//  state: {
//   user: {
//     userId: number
//   }
// }

// query: {
//   page: string
//   limit: string
//   filter: TODOS_STATUS
// }

// request: {
//   body: 
//     { updateStatus: TODOS_STATUS }
//     | { 
//         name?: string
//         status?: TODOS_STATUS
//       }
//     | { delStatus: TODOS_STATUS }
// }

// params: {
//   id: number
// }


// interface KoaRequest<RequestBody = any> extends Request {
//   body?: RequestBody;
// }

export interface StateT {
  user: {
    userId: number
  }
}

// interface QueryCtx {
//   page: string
//   limit: string
//   filter: TODOS_STATUS
// }

// interface RequestCtx {
//   body: 
//     { updateStatus: TODOS_STATUS }
//     | { 
//         name?: string
//         status?: TODOS_STATUS
//       }
//     | { delStatus: TODOS_STATUS }
// }

// interface ParamsCtx {
//   id: number
// }

// interface OptionOne {
//   state: StateCtx
// }

// interface OptionTwo {
//   state: StateCtx
//   query: QueryCtx
// }

// interface OptionThree {
//   state:StateCtx
//   query: QueryCtx
//   request: RequestCtx
// }

// interface OptionFour {
//   state: StateCtx
//   query: QueryCtx
//   params: ParamsCtx
// }





// import { Context, Request } from 'koa';

// interface KoaRequest<RequestBody = any> extends Request {
//   body?: RequestBody;
// }

// export interface KoaContext<RequestBody = any, ResponseBody = any> extends Context {
//   request: KoaRequest<RequestBody>;
//   body: ResponseBody;
// }

// interface HelloWorldRequestDto {
//     name: string;
// }

// interface HelloWorldResponseDto {
//     message: string;
// }


// async (ctx: KoaContext<HelloWorldRequestDto, HelloWorldResponseDto>) => {
//     // Request body is now typed.
//     const { name } = ctx.req.body;
//     ctx.res.statusCode = 200;
//     // Response body is also typed.
//     ctx.body = {
//         message: `Hello ${name}!`,
//     };
// }

// interface KoaRequest<RequestBody = any> extends Request {
//   body?: RequestBody;
// }


// export interface KoaContext<RequestBody = any, Query = any> extends Context {
//   state: StateCtx
//   // query: Query
//   request: KoaRequest<RequestBody>
//   body: BodyCtx
// }