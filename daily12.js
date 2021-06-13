

function formatDate(date) {
   var d = new Date(date),
        month = '' + (d.getMonth()),
       day = '' + d.getDate(),
       year = '' + d.getFullYear();
    

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
console.log(formatDate(new Date(2020, 6, 4)));

//console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59)));

//--------------------------------------------------------------->
//OR

let date = new Date(Date.parse(2019, 11, 31, 23, 59, 59));
console.log(date);










