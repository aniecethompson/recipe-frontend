// export const createUser = (newUser) => {
//     return {
//       type: "CREATE_USER",
//       payload: newUser
//     }
//   }

//   export const saveNewUser = (userObj) => dispatch =>{
//     const config = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userObj)
//       };
//       fetch("http://localhost:3001/users", config)
//         .then(r => r.json())
//         .then(data => {
//           dispatch(createUser(data.user));
//         });
//   }

//   export const collectSearchData = (data) => {
//     return {
//       type: "COLLECT_SEARCH_DATA",
//       payload: data
//     }
//   }
