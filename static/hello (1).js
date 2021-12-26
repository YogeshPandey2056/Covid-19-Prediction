var a=[
  {
      "q":"In which age group do you belong",
      "op1":"0-15",
      "op2":"15-25",
      "op3":"25-50",
      "op4":"50+"
  },
  {
      "q":"Which of the following illness do you have?",
      "op1":"Chest pain",
      "op2":"Difficulty in breathing",
      "op3":"rashes",
      "op4":"cough",
  },
  
  {
      "q":"Which of the following illness do you have?",
      "op1":"Throat Pain",
      "op2":"Fever",
      "op3":"headache",
      "op4":"sweating"
  },
  {
      "q":"Which of the following illness do you have?",
      "op1":"Sustained loss of smell,taste,or appetite",
      "op2":"Vomiting or diarrhea",
      "op3":"Severe, constant lightheadedness",
      "op4":"Serious disorientation or unresponsiveness"
  },
]
var i =0;
selected = [[0,0,0,0],[0,0,0,0],[0,0,0,0]];

function start(x)
{
    document.getElementById("question").innerHTML=a[x].q;
    document.getElementById("o1").innerHTML=a[x].op1;
    document.getElementById("o2").innerHTML=a[x].op2;
    document.getElementById("o3").innerHTML=a[x].op3;
    document.getElementById("o4").innerHTML=a[x].op4;
}

function next()
{
  if(document.getElementById('op1').checked)
      {selected[i][0]=1;
        document.getElementById('op1').checked=false;
      }
      if(document.getElementById('op2').checked)
      {selected[i][1]=1;
        document.getElementById('op2').checked=false;}
      if(document.getElementById('op3').checked)
      {selected[i][2]=1;
        document.getElementById('op3').checked=false;}
      if(document.getElementById('op4').checked)
      {selected[i][3]=1;
        document.getElementById('op4').checked=false;}
  console.log(selected)
  i=i+1
  start(i)
}