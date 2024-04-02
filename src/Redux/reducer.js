
// const date = new Date();
// var initialMails = [
//   {
//     fromEmail: "Beata@gmail.com",
//     status: "Interested",
//     subject: "I've tried a lot and .",
//     sentAt: "Mar 7",
//     col: "#57E0A6",
//     secCol: "#2D3833",
//   },
//   {
//     fromEmail: "Sanya@gmail.com",
//     status: "Closed",
//     subject: "I've tried a lot and .",
//     sentAt: "Mar 7",
//     // col: "#626fe6",
//     col: "#626fe6",
//     // col: initialState.darkMode ? "#626fe6" : "#E6d162",

//     secCol: "#323440",
//   },
//   {
//     fromEmail: "William@gmail.com",
//     subject: "Payment not going through",
//     status: "Interested",
//     sentAt: "Mar 7",
//     col: "#57E0A6",
//     secCol: "#2D3833",
//   },
//   {
//     fromEmail: "johnson@gmail.com",
//     status: "Meeting Booked",
//     subject: "Could you tell me more about it",
//     sentAt: "Mar 7",
//     col: "#9c62e6",
//     secCol: "#352f3c",
//   },
//   {
//     fromEmail: "Sanya@gmail.com",
//     status: "Meeting Completed",
//     subject: "Hi, I am Interested",
//     sentAt: date,
//     // sentAt: "18:30",
//     // col: initialState.darkMode ? "#E6D162" : "#c7b34b",
//     col: "#E6D162",

//     secCol: "#444234",
//   },
// ];

const initialState = {
  isLoggedIn: false,
  darkMode: true,
  mails: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action);
      return { ...state, isLoggedIn: action.payload };

    case "MAILS":
        console.log(action.payload);
      return { ...state, mails: [...state.mails, ...action.payload] };
    
    case "THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};


export default reducer;
