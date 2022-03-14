let btn=document.querySelector('#btn1');

btn.addEventListener("click",function(){
  let inp1,inp2,inp3,inp4,res,n1,n2,n3,n4,percentage,totalnum,grade;
  inp1=document.querySelector('#wb-inp').value;
  inp2=document.querySelector('#ma-inp').value;
  inp3=document.querySelector('#co-inp').value;
  inp4=document.querySelector('#phy-inp').value;
  res=document.querySelector('#result');
  // conversion
  n1=parseInt(inp1);
  n2=parseInt(inp2);
  n3=parseInt(inp3);
  n4=parseInt(inp4);

  // console.log("clicked")
  totalnum=n1+n2+n3+n4;
  
  percentage=((totalnum)*100)/400;
  if(percentage>=85 && percentage<=100){
    grade="A";
    res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`;
  }else if(percentage>=70 && percentage<85){
    grade = "B";
    res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`;
  }
  else if(percentage>=60 && percentage<70){
    grade = "C";
    res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`;
  }
  else if(percentage>=50 && percentage<60){
    grade = "D";
    res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`;
  }else if(percentage<50){
    grade="E";
    res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. Sorry you are fail. Try again...`;
  }
  else{
    res.innerHTML=`Invalid Input`;
  }
  // res.innerHTML=`Out of 400 your total in ${totalnum} and percentage is ${percentage}%.<br> Your grade is ${grade}. You are Pass.`;



});