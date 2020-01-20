
/* let year = "";
export const isLeap = (year) => {
 if(year % 100 === 0){
  return false;
}
if(year % 4 === 0 || year % 400 === 0){
   return true ;
 }else{
   return false;
 }

}; */
export const isLeap = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};
