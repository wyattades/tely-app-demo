type MaybePromise<T> = PromiseLike<T> | T;

type InferPromiseReturn<Fn> = Fn extends (
  ...args: any[]
) => MaybePromise<infer D>
  ? D
  : never;
