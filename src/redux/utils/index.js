import 'isomorphic-fetch';

const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
    return [ START, SUCCESS, FAILURE ].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}

export function createRequestAction(type) {
    return {
        start: createAction(type.START),
        success: createAction(type.SUCCESS),
        failure: createAction(type.FAILURE)
    };
}

export const createAction = (type) => (payload, meta) => {
    const action = {
        type
    };

    if (payload !== undefined) {
        action.payload = payload;
    }

    if (meta !== undefined) {
        action.meta = meta;
    }

    return action;
};

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
}

export function request(...args) {
    return fetch(...args)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            }

            const error = new Error(res.statusText);
            error.res = res;
            throw error;
        })
        .then((res) => res.json().then((body) => [ body, res ]))
        .catch((error) => error.res.json().then((body) => {
            error.body = body;
            throw error;
        }));

}
