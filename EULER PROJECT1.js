/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/


var sum=0;
var n=1000;
for (var a=1; a<n; a++)
{		

	if((a%3 ==0 )|| (a%5 == 0))
	{
		var storenum3=[];
		sum += a;
	storenum3.push(a);
console.log(storenum3.toString());

}
}
console.log("the total count is " + sum);

	