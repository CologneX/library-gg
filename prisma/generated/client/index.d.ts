
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>
/**
 * Model LoanItem
 * 
 */
export type LoanItem = $Result.DefaultSelection<Prisma.$LoanItemPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoanStatus: {
  ongoing: 'ongoing',
  returned: 'returned',
  overdue: 'overdue'
};

export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus]

}

export type LoanStatus = $Enums.LoanStatus

export const LoanStatus: typeof $Enums.LoanStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.member.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Members
   * const members = await prisma.member.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs>;

  /**
   * `prisma.loanItem`: Exposes CRUD operations for the **LoanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanItems
    * const loanItems = await prisma.loanItem.findMany()
    * ```
    */
  get loanItem(): Prisma.LoanItemDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Member: 'Member',
    Collection: 'Collection',
    Loan: 'Loan',
    LoanItem: 'LoanItem',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "member" | "collection" | "loan" | "loanItem" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      LoanItem: {
        payload: Prisma.$LoanItemPayload<ExtArgs>
        fields: Prisma.LoanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          findFirst: {
            args: Prisma.LoanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          findMany: {
            args: Prisma.LoanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>[]
          }
          create: {
            args: Prisma.LoanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          createMany: {
            args: Prisma.LoanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          update: {
            args: Prisma.LoanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          deleteMany: {
            args: Prisma.LoanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanItemPayload>
          }
          aggregate: {
            args: Prisma.LoanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanItem>
          }
          groupBy: {
            args: Prisma.LoanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanItemCountArgs<ExtArgs>
            result: $Utils.Optional<LoanItemCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    loans: number
    sessions: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | MemberCountOutputTypeCountLoansArgs
    sessions?: boolean | MemberCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    loanItems: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanItems?: boolean | CollectionCountOutputTypeCountLoanItemsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountLoanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanItemWhereInput
  }


  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    loanItems: number
  }

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanItems?: boolean | LoanCountOutputTypeCountLoanItemsArgs
  }

  // Custom InputTypes
  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountLoanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    isAdmin: number
    createdAt: number
    editedAt: number
    deletedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    isAdmin: boolean
    createdAt: Date
    editedAt: Date | null
    deletedAt: Date | null
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    loans?: boolean | Member$loansArgs<ExtArgs>
    sessions?: boolean | Member$sessionsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>


  export type MemberSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | Member$loansArgs<ExtArgs>
    sessions?: boolean | Member$sessionsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      loans: Prisma.$LoanPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      isAdmin: boolean
      createdAt: Date
      editedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loans<T extends Member$loansArgs<ExtArgs> = {}>(args?: Subset<T, Member$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends Member$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Member$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly username: FieldRef<"Member", 'String'>
    readonly passwordHash: FieldRef<"Member", 'String'>
    readonly isAdmin: FieldRef<"Member", 'Boolean'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly editedAt: FieldRef<"Member", 'DateTime'>
    readonly deletedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }

  /**
   * Member.loans
   */
  export type Member$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Member.sessions
   */
  export type Member$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    yearPublished: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type CollectionSumAggregateOutputType = {
    yearPublished: number | null
    totalCopies: number | null
    availableCopies: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    publisher: string | null
    yearPublished: number | null
    isbn: string | null
    totalCopies: number | null
    availableCopies: number | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    publisher: string | null
    yearPublished: number | null
    isbn: string | null
    totalCopies: number | null
    availableCopies: number | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    title: number
    author: number
    publisher: number
    yearPublished: number
    isbn: number
    totalCopies: number
    availableCopies: number
    createdAt: number
    editedAt: number
    deletedAt: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    yearPublished?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type CollectionSumAggregateInputType = {
    yearPublished?: true
    totalCopies?: true
    availableCopies?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    yearPublished?: true
    isbn?: true
    totalCopies?: true
    availableCopies?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    yearPublished?: true
    isbn?: true
    totalCopies?: true
    availableCopies?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    yearPublished?: true
    isbn?: true
    totalCopies?: true
    availableCopies?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    title: string
    author: string | null
    publisher: string | null
    yearPublished: number | null
    isbn: string | null
    totalCopies: number
    availableCopies: number
    createdAt: Date
    editedAt: Date | null
    deletedAt: Date | null
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    yearPublished?: boolean
    isbn?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    loanItems?: boolean | Collection$loanItemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>


  export type CollectionSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    yearPublished?: boolean
    isbn?: boolean
    totalCopies?: boolean
    availableCopies?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanItems?: boolean | Collection$loanItemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      loanItems: Prisma.$LoanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string | null
      publisher: string | null
      yearPublished: number | null
      isbn: string | null
      totalCopies: number
      availableCopies: number
      createdAt: Date
      editedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanItems<T extends Collection$loanItemsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$loanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly title: FieldRef<"Collection", 'String'>
    readonly author: FieldRef<"Collection", 'String'>
    readonly publisher: FieldRef<"Collection", 'String'>
    readonly yearPublished: FieldRef<"Collection", 'Int'>
    readonly isbn: FieldRef<"Collection", 'String'>
    readonly totalCopies: FieldRef<"Collection", 'Int'>
    readonly availableCopies: FieldRef<"Collection", 'Int'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly editedAt: FieldRef<"Collection", 'DateTime'>
    readonly deletedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection.loanItems
   */
  export type Collection$loanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    where?: LoanItemWhereInput
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    cursor?: LoanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanItemScalarFieldEnum | LoanItemScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    loanDate: Date | null
    returnDueDate: Date | null
    returnDate: Date | null
    status: $Enums.LoanStatus | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    loanDate: Date | null
    returnDueDate: Date | null
    returnDate: Date | null
    status: $Enums.LoanStatus | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    memberId: number
    loanDate: number
    returnDueDate: number
    returnDate: number
    status: number
    createdAt: number
    editedAt: number
    deletedAt: number
    _all: number
  }


  export type LoanMinAggregateInputType = {
    id?: true
    memberId?: true
    loanDate?: true
    returnDueDate?: true
    returnDate?: true
    status?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    memberId?: true
    loanDate?: true
    returnDueDate?: true
    returnDate?: true
    status?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    memberId?: true
    loanDate?: true
    returnDueDate?: true
    returnDate?: true
    status?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: string
    memberId: string
    loanDate: Date
    returnDueDate: Date
    returnDate: Date | null
    status: $Enums.LoanStatus
    createdAt: Date
    editedAt: Date | null
    deletedAt: Date | null
    _count: LoanCountAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    loanDate?: boolean
    returnDueDate?: boolean
    returnDate?: boolean
    status?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    loanItems?: boolean | Loan$loanItemsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>


  export type LoanSelectScalar = {
    id?: boolean
    memberId?: boolean
    loanDate?: boolean
    returnDueDate?: boolean
    returnDate?: boolean
    status?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
  }

  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    loanItems?: boolean | Loan$loanItemsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      loanItems: Prisma.$LoanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      loanDate: Date
      returnDueDate: Date
      returnDate: Date | null
      status: $Enums.LoanStatus
      createdAt: Date
      editedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    loanItems<T extends Loan$loanItemsArgs<ExtArgs> = {}>(args?: Subset<T, Loan$loanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Loan model
   */ 
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'String'>
    readonly memberId: FieldRef<"Loan", 'String'>
    readonly loanDate: FieldRef<"Loan", 'DateTime'>
    readonly returnDueDate: FieldRef<"Loan", 'DateTime'>
    readonly returnDate: FieldRef<"Loan", 'DateTime'>
    readonly status: FieldRef<"Loan", 'LoanStatus'>
    readonly createdAt: FieldRef<"Loan", 'DateTime'>
    readonly editedAt: FieldRef<"Loan", 'DateTime'>
    readonly deletedAt: FieldRef<"Loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
  }

  /**
   * Loan.loanItems
   */
  export type Loan$loanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    where?: LoanItemWhereInput
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    cursor?: LoanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanItemScalarFieldEnum | LoanItemScalarFieldEnum[]
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
  }


  /**
   * Model LoanItem
   */

  export type AggregateLoanItem = {
    _count: LoanItemCountAggregateOutputType | null
    _min: LoanItemMinAggregateOutputType | null
    _max: LoanItemMaxAggregateOutputType | null
  }

  export type LoanItemMinAggregateOutputType = {
    id: string | null
    loanId: string | null
    collectionId: string | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type LoanItemMaxAggregateOutputType = {
    id: string | null
    loanId: string | null
    collectionId: string | null
    createdAt: Date | null
    editedAt: Date | null
    deletedAt: Date | null
  }

  export type LoanItemCountAggregateOutputType = {
    id: number
    loanId: number
    collectionId: number
    createdAt: number
    editedAt: number
    deletedAt: number
    _all: number
  }


  export type LoanItemMinAggregateInputType = {
    id?: true
    loanId?: true
    collectionId?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type LoanItemMaxAggregateInputType = {
    id?: true
    loanId?: true
    collectionId?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
  }

  export type LoanItemCountAggregateInputType = {
    id?: true
    loanId?: true
    collectionId?: true
    createdAt?: true
    editedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LoanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanItem to aggregate.
     */
    where?: LoanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanItems to fetch.
     */
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanItems
    **/
    _count?: true | LoanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanItemMaxAggregateInputType
  }

  export type GetLoanItemAggregateType<T extends LoanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanItem[P]>
      : GetScalarType<T[P], AggregateLoanItem[P]>
  }




  export type LoanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanItemWhereInput
    orderBy?: LoanItemOrderByWithAggregationInput | LoanItemOrderByWithAggregationInput[]
    by: LoanItemScalarFieldEnum[] | LoanItemScalarFieldEnum
    having?: LoanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanItemCountAggregateInputType | true
    _min?: LoanItemMinAggregateInputType
    _max?: LoanItemMaxAggregateInputType
  }

  export type LoanItemGroupByOutputType = {
    id: string
    loanId: string
    collectionId: string
    createdAt: Date
    editedAt: Date | null
    deletedAt: Date | null
    _count: LoanItemCountAggregateOutputType | null
    _min: LoanItemMinAggregateOutputType | null
    _max: LoanItemMaxAggregateOutputType | null
  }

  type GetLoanItemGroupByPayload<T extends LoanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanItemGroupByOutputType[P]>
            : GetScalarType<T[P], LoanItemGroupByOutputType[P]>
        }
      >
    >


  export type LoanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    loan?: boolean | LoanDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanItem"]>


  export type LoanItemSelectScalar = {
    id?: boolean
    loanId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    editedAt?: boolean
    deletedAt?: boolean
  }

  export type LoanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | LoanDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $LoanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanItem"
    objects: {
      loan: Prisma.$LoanPayload<ExtArgs>
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanId: string
      collectionId: string
      createdAt: Date
      editedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["loanItem"]>
    composites: {}
  }

  type LoanItemGetPayload<S extends boolean | null | undefined | LoanItemDefaultArgs> = $Result.GetResult<Prisma.$LoanItemPayload, S>

  type LoanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoanItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoanItemCountAggregateInputType | true
    }

  export interface LoanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanItem'], meta: { name: 'LoanItem' } }
    /**
     * Find zero or one LoanItem that matches the filter.
     * @param {LoanItemFindUniqueArgs} args - Arguments to find a LoanItem
     * @example
     * // Get one LoanItem
     * const loanItem = await prisma.loanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanItemFindUniqueArgs>(args: SelectSubset<T, LoanItemFindUniqueArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoanItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoanItemFindUniqueOrThrowArgs} args - Arguments to find a LoanItem
     * @example
     * // Get one LoanItem
     * const loanItem = await prisma.loanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemFindFirstArgs} args - Arguments to find a LoanItem
     * @example
     * // Get one LoanItem
     * const loanItem = await prisma.loanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanItemFindFirstArgs>(args?: SelectSubset<T, LoanItemFindFirstArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemFindFirstOrThrowArgs} args - Arguments to find a LoanItem
     * @example
     * // Get one LoanItem
     * const loanItem = await prisma.loanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanItems
     * const loanItems = await prisma.loanItem.findMany()
     * 
     * // Get first 10 LoanItems
     * const loanItems = await prisma.loanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanItemWithIdOnly = await prisma.loanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanItemFindManyArgs>(args?: SelectSubset<T, LoanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoanItem.
     * @param {LoanItemCreateArgs} args - Arguments to create a LoanItem.
     * @example
     * // Create one LoanItem
     * const LoanItem = await prisma.loanItem.create({
     *   data: {
     *     // ... data to create a LoanItem
     *   }
     * })
     * 
     */
    create<T extends LoanItemCreateArgs>(args: SelectSubset<T, LoanItemCreateArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoanItems.
     * @param {LoanItemCreateManyArgs} args - Arguments to create many LoanItems.
     * @example
     * // Create many LoanItems
     * const loanItem = await prisma.loanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanItemCreateManyArgs>(args?: SelectSubset<T, LoanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoanItem.
     * @param {LoanItemDeleteArgs} args - Arguments to delete one LoanItem.
     * @example
     * // Delete one LoanItem
     * const LoanItem = await prisma.loanItem.delete({
     *   where: {
     *     // ... filter to delete one LoanItem
     *   }
     * })
     * 
     */
    delete<T extends LoanItemDeleteArgs>(args: SelectSubset<T, LoanItemDeleteArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoanItem.
     * @param {LoanItemUpdateArgs} args - Arguments to update one LoanItem.
     * @example
     * // Update one LoanItem
     * const loanItem = await prisma.loanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanItemUpdateArgs>(args: SelectSubset<T, LoanItemUpdateArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoanItems.
     * @param {LoanItemDeleteManyArgs} args - Arguments to filter LoanItems to delete.
     * @example
     * // Delete a few LoanItems
     * const { count } = await prisma.loanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanItemDeleteManyArgs>(args?: SelectSubset<T, LoanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanItems
     * const loanItem = await prisma.loanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanItemUpdateManyArgs>(args: SelectSubset<T, LoanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoanItem.
     * @param {LoanItemUpsertArgs} args - Arguments to update or create a LoanItem.
     * @example
     * // Update or create a LoanItem
     * const loanItem = await prisma.loanItem.upsert({
     *   create: {
     *     // ... data to create a LoanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanItem we want to update
     *   }
     * })
     */
    upsert<T extends LoanItemUpsertArgs>(args: SelectSubset<T, LoanItemUpsertArgs<ExtArgs>>): Prisma__LoanItemClient<$Result.GetResult<Prisma.$LoanItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemCountArgs} args - Arguments to filter LoanItems to count.
     * @example
     * // Count the number of LoanItems
     * const count = await prisma.loanItem.count({
     *   where: {
     *     // ... the filter for the LoanItems we want to count
     *   }
     * })
    **/
    count<T extends LoanItemCountArgs>(
      args?: Subset<T, LoanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanItemAggregateArgs>(args: Subset<T, LoanItemAggregateArgs>): Prisma.PrismaPromise<GetLoanItemAggregateType<T>>

    /**
     * Group by LoanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanItemGroupByArgs['orderBy'] }
        : { orderBy?: LoanItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanItem model
   */
  readonly fields: LoanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends LoanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanDefaultArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanItem model
   */ 
  interface LoanItemFieldRefs {
    readonly id: FieldRef<"LoanItem", 'String'>
    readonly loanId: FieldRef<"LoanItem", 'String'>
    readonly collectionId: FieldRef<"LoanItem", 'String'>
    readonly createdAt: FieldRef<"LoanItem", 'DateTime'>
    readonly editedAt: FieldRef<"LoanItem", 'DateTime'>
    readonly deletedAt: FieldRef<"LoanItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanItem findUnique
   */
  export type LoanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter, which LoanItem to fetch.
     */
    where: LoanItemWhereUniqueInput
  }

  /**
   * LoanItem findUniqueOrThrow
   */
  export type LoanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter, which LoanItem to fetch.
     */
    where: LoanItemWhereUniqueInput
  }

  /**
   * LoanItem findFirst
   */
  export type LoanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter, which LoanItem to fetch.
     */
    where?: LoanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanItems to fetch.
     */
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanItems.
     */
    cursor?: LoanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanItems.
     */
    distinct?: LoanItemScalarFieldEnum | LoanItemScalarFieldEnum[]
  }

  /**
   * LoanItem findFirstOrThrow
   */
  export type LoanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter, which LoanItem to fetch.
     */
    where?: LoanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanItems to fetch.
     */
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanItems.
     */
    cursor?: LoanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanItems.
     */
    distinct?: LoanItemScalarFieldEnum | LoanItemScalarFieldEnum[]
  }

  /**
   * LoanItem findMany
   */
  export type LoanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter, which LoanItems to fetch.
     */
    where?: LoanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanItems to fetch.
     */
    orderBy?: LoanItemOrderByWithRelationInput | LoanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanItems.
     */
    cursor?: LoanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanItems.
     */
    skip?: number
    distinct?: LoanItemScalarFieldEnum | LoanItemScalarFieldEnum[]
  }

  /**
   * LoanItem create
   */
  export type LoanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanItem.
     */
    data: XOR<LoanItemCreateInput, LoanItemUncheckedCreateInput>
  }

  /**
   * LoanItem createMany
   */
  export type LoanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanItems.
     */
    data: LoanItemCreateManyInput | LoanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanItem update
   */
  export type LoanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanItem.
     */
    data: XOR<LoanItemUpdateInput, LoanItemUncheckedUpdateInput>
    /**
     * Choose, which LoanItem to update.
     */
    where: LoanItemWhereUniqueInput
  }

  /**
   * LoanItem updateMany
   */
  export type LoanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanItems.
     */
    data: XOR<LoanItemUpdateManyMutationInput, LoanItemUncheckedUpdateManyInput>
    /**
     * Filter which LoanItems to update
     */
    where?: LoanItemWhereInput
  }

  /**
   * LoanItem upsert
   */
  export type LoanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanItem to update in case it exists.
     */
    where: LoanItemWhereUniqueInput
    /**
     * In case the LoanItem found by the `where` argument doesn't exist, create a new LoanItem with this data.
     */
    create: XOR<LoanItemCreateInput, LoanItemUncheckedCreateInput>
    /**
     * In case the LoanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanItemUpdateInput, LoanItemUncheckedUpdateInput>
  }

  /**
   * LoanItem delete
   */
  export type LoanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
    /**
     * Filter which LoanItem to delete.
     */
    where: LoanItemWhereUniqueInput
  }

  /**
   * LoanItem deleteMany
   */
  export type LoanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanItems to delete
     */
    where?: LoanItemWhereInput
  }

  /**
   * LoanItem without action
   */
  export type LoanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanItem
     */
    select?: LoanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanItemInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    memberId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    memberId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    memberId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    memberId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    memberId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    memberId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    memberId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>


  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    memberId?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      memberId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly memberId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MemberScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    publisher: 'publisher',
    yearPublished: 'yearPublished',
    isbn: 'isbn',
    totalCopies: 'totalCopies',
    availableCopies: 'availableCopies',
    createdAt: 'createdAt',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    loanDate: 'loanDate',
    returnDueDate: 'returnDueDate',
    returnDate: 'returnDate',
    status: 'status',
    createdAt: 'createdAt',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const LoanItemScalarFieldEnum: {
    id: 'id',
    loanId: 'loanId',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt'
  };

  export type LoanItemScalarFieldEnum = (typeof LoanItemScalarFieldEnum)[keyof typeof LoanItemScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    memberId: 'memberId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MemberOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const CollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    publisher: 'publisher',
    isbn: 'isbn'
  };

  export type CollectionOrderByRelevanceFieldEnum = (typeof CollectionOrderByRelevanceFieldEnum)[keyof typeof CollectionOrderByRelevanceFieldEnum]


  export const LoanOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId'
  };

  export type LoanOrderByRelevanceFieldEnum = (typeof LoanOrderByRelevanceFieldEnum)[keyof typeof LoanOrderByRelevanceFieldEnum]


  export const LoanItemOrderByRelevanceFieldEnum: {
    id: 'id',
    loanId: 'loanId',
    collectionId: 'collectionId'
  };

  export type LoanItemOrderByRelevanceFieldEnum = (typeof LoanItemOrderByRelevanceFieldEnum)[keyof typeof LoanItemOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'LoanStatus'
   */
  export type EnumLoanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    username?: StringFilter<"Member"> | string
    passwordHash?: StringFilter<"Member"> | string
    isAdmin?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    editedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    loans?: LoanListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    loans?: LoanOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    passwordHash?: StringFilter<"Member"> | string
    isAdmin?: BoolFilter<"Member"> | boolean
    createdAt?: DateTimeFilter<"Member"> | Date | string
    editedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    loans?: LoanListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "username">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    username?: StringWithAggregatesFilter<"Member"> | string
    passwordHash?: StringWithAggregatesFilter<"Member"> | string
    isAdmin?: BoolWithAggregatesFilter<"Member"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    editedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    title?: StringFilter<"Collection"> | string
    author?: StringNullableFilter<"Collection"> | string | null
    publisher?: StringNullableFilter<"Collection"> | string | null
    yearPublished?: IntNullableFilter<"Collection"> | number | null
    isbn?: StringNullableFilter<"Collection"> | string | null
    totalCopies?: IntFilter<"Collection"> | number
    availableCopies?: IntFilter<"Collection"> | number
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    editedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    loanItems?: LoanItemListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    yearPublished?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    loanItems?: LoanItemOrderByRelationAggregateInput
    _relevance?: CollectionOrderByRelevanceInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    isbn?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    title?: StringFilter<"Collection"> | string
    author?: StringNullableFilter<"Collection"> | string | null
    publisher?: StringNullableFilter<"Collection"> | string | null
    yearPublished?: IntNullableFilter<"Collection"> | number | null
    totalCopies?: IntFilter<"Collection"> | number
    availableCopies?: IntFilter<"Collection"> | number
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    editedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    loanItems?: LoanItemListRelationFilter
  }, "id" | "isbn">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    yearPublished?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    title?: StringWithAggregatesFilter<"Collection"> | string
    author?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    yearPublished?: IntNullableWithAggregatesFilter<"Collection"> | number | null
    isbn?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    totalCopies?: IntWithAggregatesFilter<"Collection"> | number
    availableCopies?: IntWithAggregatesFilter<"Collection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    editedAt?: DateTimeNullableWithAggregatesFilter<"Collection"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Collection"> | Date | string | null
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: StringFilter<"Loan"> | string
    memberId?: StringFilter<"Loan"> | string
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    editedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    loanItems?: LoanItemListRelationFilter
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    loanDate?: SortOrder
    returnDueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
    loanItems?: LoanItemOrderByRelationAggregateInput
    _relevance?: LoanOrderByRelevanceInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    memberId?: StringFilter<"Loan"> | string
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    editedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    loanItems?: LoanItemListRelationFilter
  }, "id">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    loanDate?: SortOrder
    returnDueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LoanCountOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Loan"> | string
    memberId?: StringWithAggregatesFilter<"Loan"> | string
    loanDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    returnDueDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusWithAggregatesFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    editedAt?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Loan"> | Date | string | null
  }

  export type LoanItemWhereInput = {
    AND?: LoanItemWhereInput | LoanItemWhereInput[]
    OR?: LoanItemWhereInput[]
    NOT?: LoanItemWhereInput | LoanItemWhereInput[]
    id?: StringFilter<"LoanItem"> | string
    loanId?: StringFilter<"LoanItem"> | string
    collectionId?: StringFilter<"LoanItem"> | string
    createdAt?: DateTimeFilter<"LoanItem"> | Date | string
    editedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }

  export type LoanItemOrderByWithRelationInput = {
    id?: SortOrder
    loanId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    loan?: LoanOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
    _relevance?: LoanItemOrderByRelevanceInput
  }

  export type LoanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanItemWhereInput | LoanItemWhereInput[]
    OR?: LoanItemWhereInput[]
    NOT?: LoanItemWhereInput | LoanItemWhereInput[]
    loanId?: StringFilter<"LoanItem"> | string
    collectionId?: StringFilter<"LoanItem"> | string
    createdAt?: DateTimeFilter<"LoanItem"> | Date | string
    editedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }, "id">

  export type LoanItemOrderByWithAggregationInput = {
    id?: SortOrder
    loanId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LoanItemCountOrderByAggregateInput
    _max?: LoanItemMaxOrderByAggregateInput
    _min?: LoanItemMinOrderByAggregateInput
  }

  export type LoanItemScalarWhereWithAggregatesInput = {
    AND?: LoanItemScalarWhereWithAggregatesInput | LoanItemScalarWhereWithAggregatesInput[]
    OR?: LoanItemScalarWhereWithAggregatesInput[]
    NOT?: LoanItemScalarWhereWithAggregatesInput | LoanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanItem"> | string
    loanId?: StringWithAggregatesFilter<"LoanItem"> | string
    collectionId?: StringWithAggregatesFilter<"LoanItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoanItem"> | Date | string
    editedAt?: DateTimeNullableWithAggregatesFilter<"LoanItem"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"LoanItem"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    memberId?: StringFilter<"Session"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    memberId?: SortOrder
    member?: MemberOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    memberId?: StringFilter<"Session"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    memberId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    memberId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type MemberCreateInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loans?: LoanCreateNestedManyWithoutMemberInput
    sessions?: SessionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loans?: LoanUncheckedCreateNestedManyWithoutMemberInput
    sessions?: SessionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loans?: LoanUpdateManyWithoutMemberNestedInput
    sessions?: SessionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loans?: LoanUncheckedUpdateManyWithoutMemberNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollectionCreateInput = {
    id?: string
    title: string
    author?: string | null
    publisher?: string | null
    yearPublished?: number | null
    isbn?: string | null
    totalCopies?: number
    availableCopies?: number
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loanItems?: LoanItemCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    title: string
    author?: string | null
    publisher?: string | null
    yearPublished?: number | null
    isbn?: string | null
    totalCopies?: number
    availableCopies?: number
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loanItems?: LoanItemUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loanItems?: LoanItemUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loanItems?: LoanItemUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    title: string
    author?: string | null
    publisher?: string | null
    yearPublished?: number | null
    isbn?: string | null
    totalCopies?: number
    availableCopies?: number
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanCreateInput = {
    id?: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutLoansInput
    loanItems?: LoanItemCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateInput = {
    id?: string
    memberId: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loanItems?: LoanItemUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutLoansNestedInput
    loanItems?: LoanItemUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loanItems?: LoanItemUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanCreateManyInput = {
    id?: string
    memberId: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemCreateInput = {
    id?: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loan: LoanCreateNestedOneWithoutLoanItemsInput
    collection: CollectionCreateNestedOneWithoutLoanItemsInput
  }

  export type LoanItemUncheckedCreateInput = {
    id?: string
    loanId: string
    collectionId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: LoanUpdateOneRequiredWithoutLoanItemsNestedInput
    collection?: CollectionUpdateOneRequiredWithoutLoanItemsNestedInput
  }

  export type LoanItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemCreateManyInput = {
    id?: string
    loanId: string
    collectionId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    member: MemberCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    memberId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    memberId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LoanItemListRelationFilter = {
    every?: LoanItemWhereInput
    some?: LoanItemWhereInput
    none?: LoanItemWhereInput
  }

  export type LoanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelevanceInput = {
    fields: CollectionOrderByRelevanceFieldEnum | CollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    yearPublished?: SortOrder
    isbn?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    yearPublished?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    yearPublished?: SortOrder
    isbn?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    yearPublished?: SortOrder
    isbn?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    yearPublished?: SortOrder
    totalCopies?: SortOrder
    availableCopies?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[]
    notIn?: $Enums.LoanStatus[]
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type LoanOrderByRelevanceInput = {
    fields: LoanOrderByRelevanceFieldEnum | LoanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    loanDate?: SortOrder
    returnDueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    loanDate?: SortOrder
    returnDueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    loanDate?: SortOrder
    returnDueDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[]
    notIn?: $Enums.LoanStatus[]
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type LoanScalarRelationFilter = {
    is?: LoanWhereInput
    isNot?: LoanWhereInput
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type LoanItemOrderByRelevanceInput = {
    fields: LoanItemOrderByRelevanceFieldEnum | LoanItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoanItemCountOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LoanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LoanItemMinOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    memberId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    memberId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    memberId?: SortOrder
  }

  export type LoanCreateNestedManyWithoutMemberInput = {
    create?: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput> | LoanCreateWithoutMemberInput[] | LoanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutMemberInput | LoanCreateOrConnectWithoutMemberInput[]
    createMany?: LoanCreateManyMemberInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutMemberInput = {
    create?: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput> | SessionCreateWithoutMemberInput[] | SessionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMemberInput | SessionCreateOrConnectWithoutMemberInput[]
    createMany?: SessionCreateManyMemberInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput> | LoanCreateWithoutMemberInput[] | LoanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutMemberInput | LoanCreateOrConnectWithoutMemberInput[]
    createMany?: LoanCreateManyMemberInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput> | SessionCreateWithoutMemberInput[] | SessionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMemberInput | SessionCreateOrConnectWithoutMemberInput[]
    createMany?: SessionCreateManyMemberInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LoanUpdateManyWithoutMemberNestedInput = {
    create?: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput> | LoanCreateWithoutMemberInput[] | LoanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutMemberInput | LoanCreateOrConnectWithoutMemberInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutMemberInput | LoanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: LoanCreateManyMemberInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutMemberInput | LoanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutMemberInput | LoanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput> | SessionCreateWithoutMemberInput[] | SessionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMemberInput | SessionCreateOrConnectWithoutMemberInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutMemberInput | SessionUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: SessionCreateManyMemberInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutMemberInput | SessionUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutMemberInput | SessionUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput> | LoanCreateWithoutMemberInput[] | LoanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutMemberInput | LoanCreateOrConnectWithoutMemberInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutMemberInput | LoanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: LoanCreateManyMemberInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutMemberInput | LoanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutMemberInput | LoanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput> | SessionCreateWithoutMemberInput[] | SessionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMemberInput | SessionCreateOrConnectWithoutMemberInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutMemberInput | SessionUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: SessionCreateManyMemberInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutMemberInput | SessionUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutMemberInput | SessionUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LoanItemCreateNestedManyWithoutCollectionInput = {
    create?: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput> | LoanItemCreateWithoutCollectionInput[] | LoanItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutCollectionInput | LoanItemCreateOrConnectWithoutCollectionInput[]
    createMany?: LoanItemCreateManyCollectionInputEnvelope
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
  }

  export type LoanItemUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput> | LoanItemCreateWithoutCollectionInput[] | LoanItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutCollectionInput | LoanItemCreateOrConnectWithoutCollectionInput[]
    createMany?: LoanItemCreateManyCollectionInputEnvelope
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LoanItemUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput> | LoanItemCreateWithoutCollectionInput[] | LoanItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutCollectionInput | LoanItemCreateOrConnectWithoutCollectionInput[]
    upsert?: LoanItemUpsertWithWhereUniqueWithoutCollectionInput | LoanItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: LoanItemCreateManyCollectionInputEnvelope
    set?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    disconnect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    delete?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    update?: LoanItemUpdateWithWhereUniqueWithoutCollectionInput | LoanItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: LoanItemUpdateManyWithWhereWithoutCollectionInput | LoanItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
  }

  export type LoanItemUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput> | LoanItemCreateWithoutCollectionInput[] | LoanItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutCollectionInput | LoanItemCreateOrConnectWithoutCollectionInput[]
    upsert?: LoanItemUpsertWithWhereUniqueWithoutCollectionInput | LoanItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: LoanItemCreateManyCollectionInputEnvelope
    set?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    disconnect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    delete?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    update?: LoanItemUpdateWithWhereUniqueWithoutCollectionInput | LoanItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: LoanItemUpdateManyWithWhereWithoutCollectionInput | LoanItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutLoansInput = {
    create?: XOR<MemberCreateWithoutLoansInput, MemberUncheckedCreateWithoutLoansInput>
    connectOrCreate?: MemberCreateOrConnectWithoutLoansInput
    connect?: MemberWhereUniqueInput
  }

  export type LoanItemCreateNestedManyWithoutLoanInput = {
    create?: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput> | LoanItemCreateWithoutLoanInput[] | LoanItemUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutLoanInput | LoanItemCreateOrConnectWithoutLoanInput[]
    createMany?: LoanItemCreateManyLoanInputEnvelope
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
  }

  export type LoanItemUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput> | LoanItemCreateWithoutLoanInput[] | LoanItemUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutLoanInput | LoanItemCreateOrConnectWithoutLoanInput[]
    createMany?: LoanItemCreateManyLoanInputEnvelope
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
  }

  export type EnumLoanStatusFieldUpdateOperationsInput = {
    set?: $Enums.LoanStatus
  }

  export type MemberUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<MemberCreateWithoutLoansInput, MemberUncheckedCreateWithoutLoansInput>
    connectOrCreate?: MemberCreateOrConnectWithoutLoansInput
    upsert?: MemberUpsertWithoutLoansInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutLoansInput, MemberUpdateWithoutLoansInput>, MemberUncheckedUpdateWithoutLoansInput>
  }

  export type LoanItemUpdateManyWithoutLoanNestedInput = {
    create?: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput> | LoanItemCreateWithoutLoanInput[] | LoanItemUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutLoanInput | LoanItemCreateOrConnectWithoutLoanInput[]
    upsert?: LoanItemUpsertWithWhereUniqueWithoutLoanInput | LoanItemUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: LoanItemCreateManyLoanInputEnvelope
    set?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    disconnect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    delete?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    update?: LoanItemUpdateWithWhereUniqueWithoutLoanInput | LoanItemUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: LoanItemUpdateManyWithWhereWithoutLoanInput | LoanItemUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
  }

  export type LoanItemUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput> | LoanItemCreateWithoutLoanInput[] | LoanItemUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: LoanItemCreateOrConnectWithoutLoanInput | LoanItemCreateOrConnectWithoutLoanInput[]
    upsert?: LoanItemUpsertWithWhereUniqueWithoutLoanInput | LoanItemUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: LoanItemCreateManyLoanInputEnvelope
    set?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    disconnect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    delete?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    connect?: LoanItemWhereUniqueInput | LoanItemWhereUniqueInput[]
    update?: LoanItemUpdateWithWhereUniqueWithoutLoanInput | LoanItemUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: LoanItemUpdateManyWithWhereWithoutLoanInput | LoanItemUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
  }

  export type LoanCreateNestedOneWithoutLoanItemsInput = {
    create?: XOR<LoanCreateWithoutLoanItemsInput, LoanUncheckedCreateWithoutLoanItemsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutLoanItemsInput
    connect?: LoanWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutLoanItemsInput = {
    create?: XOR<CollectionCreateWithoutLoanItemsInput, CollectionUncheckedCreateWithoutLoanItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutLoanItemsInput
    connect?: CollectionWhereUniqueInput
  }

  export type LoanUpdateOneRequiredWithoutLoanItemsNestedInput = {
    create?: XOR<LoanCreateWithoutLoanItemsInput, LoanUncheckedCreateWithoutLoanItemsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutLoanItemsInput
    upsert?: LoanUpsertWithoutLoanItemsInput
    connect?: LoanWhereUniqueInput
    update?: XOR<XOR<LoanUpdateToOneWithWhereWithoutLoanItemsInput, LoanUpdateWithoutLoanItemsInput>, LoanUncheckedUpdateWithoutLoanItemsInput>
  }

  export type CollectionUpdateOneRequiredWithoutLoanItemsNestedInput = {
    create?: XOR<CollectionCreateWithoutLoanItemsInput, CollectionUncheckedCreateWithoutLoanItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutLoanItemsInput
    upsert?: CollectionUpsertWithoutLoanItemsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutLoanItemsInput, CollectionUpdateWithoutLoanItemsInput>, CollectionUncheckedUpdateWithoutLoanItemsInput>
  }

  export type MemberCreateNestedOneWithoutSessionsInput = {
    create?: XOR<MemberCreateWithoutSessionsInput, MemberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSessionsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<MemberCreateWithoutSessionsInput, MemberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutSessionsInput
    upsert?: MemberUpsertWithoutSessionsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSessionsInput, MemberUpdateWithoutSessionsInput>, MemberUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[]
    notIn?: $Enums.LoanStatus[]
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[]
    notIn?: $Enums.LoanStatus[]
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type LoanCreateWithoutMemberInput = {
    id?: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loanItems?: LoanItemCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateWithoutMemberInput = {
    id?: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loanItems?: LoanItemUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanCreateOrConnectWithoutMemberInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput>
  }

  export type LoanCreateManyMemberInputEnvelope = {
    data: LoanCreateManyMemberInput | LoanCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutMemberInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutMemberInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutMemberInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput>
  }

  export type SessionCreateManyMemberInputEnvelope = {
    data: SessionCreateManyMemberInput | SessionCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type LoanUpsertWithWhereUniqueWithoutMemberInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutMemberInput, LoanUncheckedUpdateWithoutMemberInput>
    create: XOR<LoanCreateWithoutMemberInput, LoanUncheckedCreateWithoutMemberInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutMemberInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutMemberInput, LoanUncheckedUpdateWithoutMemberInput>
  }

  export type LoanUpdateManyWithWhereWithoutMemberInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutMemberInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: StringFilter<"Loan"> | string
    memberId?: StringFilter<"Loan"> | string
    loanDate?: DateTimeFilter<"Loan"> | Date | string
    returnDueDate?: DateTimeFilter<"Loan"> | Date | string
    returnDate?: DateTimeNullableFilter<"Loan"> | Date | string | null
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    editedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Loan"> | Date | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutMemberInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutMemberInput, SessionUncheckedUpdateWithoutMemberInput>
    create: XOR<SessionCreateWithoutMemberInput, SessionUncheckedCreateWithoutMemberInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutMemberInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutMemberInput, SessionUncheckedUpdateWithoutMemberInput>
  }

  export type SessionUpdateManyWithWhereWithoutMemberInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutMemberInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    memberId?: StringFilter<"Session"> | string
  }

  export type LoanItemCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loan: LoanCreateNestedOneWithoutLoanItemsInput
  }

  export type LoanItemUncheckedCreateWithoutCollectionInput = {
    id?: string
    loanId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemCreateOrConnectWithoutCollectionInput = {
    where: LoanItemWhereUniqueInput
    create: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput>
  }

  export type LoanItemCreateManyCollectionInputEnvelope = {
    data: LoanItemCreateManyCollectionInput | LoanItemCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type LoanItemUpsertWithWhereUniqueWithoutCollectionInput = {
    where: LoanItemWhereUniqueInput
    update: XOR<LoanItemUpdateWithoutCollectionInput, LoanItemUncheckedUpdateWithoutCollectionInput>
    create: XOR<LoanItemCreateWithoutCollectionInput, LoanItemUncheckedCreateWithoutCollectionInput>
  }

  export type LoanItemUpdateWithWhereUniqueWithoutCollectionInput = {
    where: LoanItemWhereUniqueInput
    data: XOR<LoanItemUpdateWithoutCollectionInput, LoanItemUncheckedUpdateWithoutCollectionInput>
  }

  export type LoanItemUpdateManyWithWhereWithoutCollectionInput = {
    where: LoanItemScalarWhereInput
    data: XOR<LoanItemUpdateManyMutationInput, LoanItemUncheckedUpdateManyWithoutCollectionInput>
  }

  export type LoanItemScalarWhereInput = {
    AND?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
    OR?: LoanItemScalarWhereInput[]
    NOT?: LoanItemScalarWhereInput | LoanItemScalarWhereInput[]
    id?: StringFilter<"LoanItem"> | string
    loanId?: StringFilter<"LoanItem"> | string
    collectionId?: StringFilter<"LoanItem"> | string
    createdAt?: DateTimeFilter<"LoanItem"> | Date | string
    editedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"LoanItem"> | Date | string | null
  }

  export type MemberCreateWithoutLoansInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutLoansInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutLoansInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutLoansInput, MemberUncheckedCreateWithoutLoansInput>
  }

  export type LoanItemCreateWithoutLoanInput = {
    id?: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    collection: CollectionCreateNestedOneWithoutLoanItemsInput
  }

  export type LoanItemUncheckedCreateWithoutLoanInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemCreateOrConnectWithoutLoanInput = {
    where: LoanItemWhereUniqueInput
    create: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput>
  }

  export type LoanItemCreateManyLoanInputEnvelope = {
    data: LoanItemCreateManyLoanInput | LoanItemCreateManyLoanInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutLoansInput = {
    update: XOR<MemberUpdateWithoutLoansInput, MemberUncheckedUpdateWithoutLoansInput>
    create: XOR<MemberCreateWithoutLoansInput, MemberUncheckedCreateWithoutLoansInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutLoansInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutLoansInput, MemberUncheckedUpdateWithoutLoansInput>
  }

  export type MemberUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type LoanItemUpsertWithWhereUniqueWithoutLoanInput = {
    where: LoanItemWhereUniqueInput
    update: XOR<LoanItemUpdateWithoutLoanInput, LoanItemUncheckedUpdateWithoutLoanInput>
    create: XOR<LoanItemCreateWithoutLoanInput, LoanItemUncheckedCreateWithoutLoanInput>
  }

  export type LoanItemUpdateWithWhereUniqueWithoutLoanInput = {
    where: LoanItemWhereUniqueInput
    data: XOR<LoanItemUpdateWithoutLoanInput, LoanItemUncheckedUpdateWithoutLoanInput>
  }

  export type LoanItemUpdateManyWithWhereWithoutLoanInput = {
    where: LoanItemScalarWhereInput
    data: XOR<LoanItemUpdateManyMutationInput, LoanItemUncheckedUpdateManyWithoutLoanInput>
  }

  export type LoanCreateWithoutLoanItemsInput = {
    id?: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutLoanItemsInput = {
    id?: string
    memberId: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanCreateOrConnectWithoutLoanItemsInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutLoanItemsInput, LoanUncheckedCreateWithoutLoanItemsInput>
  }

  export type CollectionCreateWithoutLoanItemsInput = {
    id?: string
    title: string
    author?: string | null
    publisher?: string | null
    yearPublished?: number | null
    isbn?: string | null
    totalCopies?: number
    availableCopies?: number
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CollectionUncheckedCreateWithoutLoanItemsInput = {
    id?: string
    title: string
    author?: string | null
    publisher?: string | null
    yearPublished?: number | null
    isbn?: string | null
    totalCopies?: number
    availableCopies?: number
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CollectionCreateOrConnectWithoutLoanItemsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutLoanItemsInput, CollectionUncheckedCreateWithoutLoanItemsInput>
  }

  export type LoanUpsertWithoutLoanItemsInput = {
    update: XOR<LoanUpdateWithoutLoanItemsInput, LoanUncheckedUpdateWithoutLoanItemsInput>
    create: XOR<LoanCreateWithoutLoanItemsInput, LoanUncheckedCreateWithoutLoanItemsInput>
    where?: LoanWhereInput
  }

  export type LoanUpdateToOneWithWhereWithoutLoanItemsInput = {
    where?: LoanWhereInput
    data: XOR<LoanUpdateWithoutLoanItemsInput, LoanUncheckedUpdateWithoutLoanItemsInput>
  }

  export type LoanUpdateWithoutLoanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutLoanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollectionUpsertWithoutLoanItemsInput = {
    update: XOR<CollectionUpdateWithoutLoanItemsInput, CollectionUncheckedUpdateWithoutLoanItemsInput>
    create: XOR<CollectionCreateWithoutLoanItemsInput, CollectionUncheckedCreateWithoutLoanItemsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutLoanItemsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutLoanItemsInput, CollectionUncheckedUpdateWithoutLoanItemsInput>
  }

  export type CollectionUpdateWithoutLoanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CollectionUncheckedUpdateWithoutLoanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    totalCopies?: IntFieldUpdateOperationsInput | number
    availableCopies?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberCreateWithoutSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loans?: LoanCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    loans?: LoanUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutSessionsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSessionsInput, MemberUncheckedCreateWithoutSessionsInput>
  }

  export type MemberUpsertWithoutSessionsInput = {
    update: XOR<MemberUpdateWithoutSessionsInput, MemberUncheckedUpdateWithoutSessionsInput>
    create: XOR<MemberCreateWithoutSessionsInput, MemberUncheckedCreateWithoutSessionsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSessionsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSessionsInput, MemberUncheckedUpdateWithoutSessionsInput>
  }

  export type MemberUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loans?: LoanUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loans?: LoanUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type LoanCreateManyMemberInput = {
    id?: string
    loanDate: Date | string
    returnDueDate: Date | string
    returnDate?: Date | string | null
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SessionCreateManyMemberInput = {
    id: string
    expiresAt: Date | string
  }

  export type LoanUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loanItems?: LoanItemUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loanItems?: LoanItemUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanItemCreateManyCollectionInput = {
    id?: string
    loanId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loan?: LoanUpdateOneRequiredWithoutLoanItemsNestedInput
  }

  export type LoanItemUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    loanId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemCreateManyLoanInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LoanItemUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    collection?: CollectionUpdateOneRequiredWithoutLoanItemsNestedInput
  }

  export type LoanItemUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoanItemUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}