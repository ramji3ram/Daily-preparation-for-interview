var sum=0;
var f1=[];
 f1[1]=0,f1[2]=1;
for (i=3; i<4000000;i++)
{

f1[i]=f1[i-2]+f1[i-1];
if(f1[i]%2 == 0)
{
	sum += f1[i];
	console.log(f1[i]);
}


}
console.log("The sum is :"+sum);