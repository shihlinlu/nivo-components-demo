import { Action, Reducer } from 'redux';

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FluxStandardAction<Type extends string, Payload>
  extends Action<Type> {
  payload: Payload;
}

export interface ActionFunction<Type extends string> {
  (): FluxStandardAction<Type, undefined>;
  actionType: Type;
}

export interface ActionFunctionPayload<Type extends string, Input, Payload> {
  (payload: Input): FluxStandardAction<Type, Payload>;
  actionType: Type;
}

export type PayloadCreator<Input, Payload> = (input: Input) => Payload;

type ReducerFunctionSimple<StateType, TAction extends string> = (
  state: StateType
) => StateType;

type ReducerFunctionPayload<StateType, TAction extends string, Payload> = (
  state: StateType,
  action: FluxStandardAction<TAction, Payload>
) => StateType;

type ReducerFunction<StateType, TAction extends string, Payload> =
  | ReducerFunctionSimple<StateType, TAction>
  | ReducerFunctionPayload<StateType, TAction, Payload>;

type ReducerTupleSimple<StateType, TAction extends string> = [
  TAction,
  ReducerFunctionSimple<StateType, TAction>
];

type ReducerTuplePayload<StateType, TAction extends string, Payload> = [
  TAction,
  ReducerFunctionPayload<StateType, TAction, Payload>
];

type ReducerTuple<StateType, TAction extends string, Payload> =
  | ReducerTupleSimple<StateType, TAction>
  | ReducerTuplePayload<StateType, TAction, Payload>;

export type ReducerList<StateType> = Array<ReducerTuple<StateType, any, any>>;

function createAction<Type extends string>(type: Type): ActionFunction<Type>;
function createAction<Type extends string, Input, Payload>(
  type: Type,
  payloadCreator: PayloadCreator<Input, Payload>
): ActionFunctionPayload<Type, Input, Payload>;
function createAction<Type extends string, Input, Payload>(
  type: Type,
  payloadCreator?: PayloadCreator<Input, Payload>
): any {
  if (payloadCreator === undefined) {
    const simpleFunction: any = () => ({
      type,
      payload: undefined,
    });
    simpleFunction.actionType = type;
    return simpleFunction;
  }

  const payloadFunction: any = (input: Input) => ({
    type,
    payload: payloadCreator(input),
  });
  payloadFunction.actionType = type;
  return payloadFunction;
}

function createReducer<StateType, TAction extends string>(
  actionFunction: ActionFunction<TAction>,
  reducerFunction: ReducerFunctionSimple<StateType, TAction>
): ReducerTupleSimple<StateType, TAction>;
function createReducer<StateType, TAction extends string, Input, Payload>(
  actionFunction: ActionFunctionPayload<TAction, Input, Payload>,
  reducerFunction: ReducerFunctionPayload<StateType, TAction, Payload>
): ReducerTuplePayload<StateType, TAction, Payload>;
function createReducer<StateType, TAction extends string, Payload>(
  actionFunction: any,
  reducerFunction: ReducerFunction<StateType, TAction, Payload>
): any {
  return [actionFunction.actionType, reducerFunction];
}

const handleActions = <StateType extends {}>(
  reducerList: ReducerList<StateType>,
  initialState: StateType
): Reducer<StateType, any> => {
  const reducerMap: {
    [key: string]: ReducerFunction<StateType, string, any>;
  } = {};
  reducerList.forEach(item => {
    const [itemKey, itemValue] = item;
    reducerMap[itemKey] = itemValue;
  });
  return (inState: StateType | undefined, action: Action<string>) => {
    const state = inState || initialState;
    const { type } = action;
    const reducer: any = reducerMap[type];
    if (reducer) {
      return reducer(state, action);
    }
    return state;
  };
};

export type ActionType<TAction extends (...args: any[]) => any> = ReturnType<
  TAction
>;

export { createAction, createReducer, handleActions };
