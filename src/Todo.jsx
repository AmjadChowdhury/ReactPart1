// conditional rendering option -> 1...
// export default function Todo({task,isDone}){
//     if(isDone){
//         return (
//             <li>Finished : {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Work on : {task}</li>
//         )
//     }
// }

// conditional rendering option -> 2...
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task}</li>;
//   }
//   return <li>Work on : {task}</li>;
// }

// conditional rendering option -> 3...ternary operator..
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )  
// }

// conditional rendering option -> 4...And operator..
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} : {isDone && 'Finished'}</li>
//     )
// }


// conditional rendering option -> 5...OR operator..
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} : {isDone || 'Still Working'}</li>
//     )
// }

// conditional rendering option -> 6...variable
export default function Todo({task,isDone}){
    let listItem
    if(isDone){
        listItem = <li>{task}, Complete</li>;
    }
    else{
        listItem = <li>{task}, incomplete</li>
    }
    return listItem
}
