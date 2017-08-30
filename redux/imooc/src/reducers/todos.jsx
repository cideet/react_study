/**
 * Created by Administrator on 2017/8/30 0030.
 */

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, {id: action.id, text: action.text, completed: false}];
//         case 'TOGGLE_TODO':
//             return state.map(todo =>(todo.id === action.id) ? {...todo, completed: !todo.completed} : todo);
//         default:
//             return state
//     }
// };
//
// export default todos;


const todo = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {id: action.id, text: action.text, completed: false};
        case "TOGGLE_TODO":
            if (state.id !== action.id) {
                return state;
            } else {
                return Object.assign({}, state, {completed: !state.completed});
            }
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, todo(undefined, action)];
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;
