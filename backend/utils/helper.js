// module.exports = function formatDate(date) {
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   return `${date.getDate().toString().padStart(2, '0')}-${months[date.getMonth()]}-${date.getFullYear()}`;
// };


// // /backend/utils/helpers.js

export default function formatDate(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${date.getDate().toString().padStart(2, '0')}-${months[date.getMonth()]}-${date.getFullYear()}`;
}
