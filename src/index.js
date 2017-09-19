
module.exports = function zeros(expression) {
  var arr=expression.split("*");
  var num1=0;
  var num2=0;
  var l=0;
  var k1;
  var k2;
  for (var i=0; i<arr.length; i++) {
     if (arr[i].indexOf("!")==arr[i].lastIndexOf("!")) {
         k1=1; k2=1;  
     }
     if (arr[i].indexOf("!")!=arr[i].lastIndexOf("!")) {
          if (Number(arr[i].substring(0, arr[i].indexOf("!")))%2==0) {
             k1=2; k2=2;   
          }
          if (Number(arr[i].substring(0, arr[i].indexOf("!")))%2!=0) {
             k1=1; k2=2;
          }
     }
     for (var j=k1; j<=Number(arr[i].substring(0, arr[i].indexOf("!"))); j=j+k2) {
              l=j;
              while (l%2==0) {
                 l=l/2;
                 num1=num1+1;
              } 
              while (l%5==0) {
                 l=l/5;
                 num2=num2+1;
              }
          }
  }
  if (num2<num1) num1=num2;
  return num1;
}
