var ht=0;
function Save()
{


var ti=document.getElementById('title').value;
var des=document.getElementById('descript').value;
var tags=document.getElementById('tag').value;
var url=document.getElementById('ur').value;

var mnf=document.getElementById('title').classList;
const elem=document.getElementById('fin');
const d=new Date();
elem.innerHTML+='<br>'+'<div class="tvd">'+'<h5>'+'<span id="tle">'+ti+'</span>'+'</h5>'+'<button onclick=update() class="ubtn">'+'Update'+'</button>'+'<h6>'+'<span id="Span">'+des+'</span>'+'<h6>'+'<h6>'+'<span id="tagg">'+tags+"</span>"+'</h6>'+'<h6>'+'<a href=`${url}`>'+'<span id="urll">'+url+'</span>'+'</a>'+'</h6>'+'Created On '+" "+d.getDate()+'-'+d.getMonth()+"-"+d.getFullYear()+'</div>'+'<br>'+'<br>';
// var conn=document.getElementById('con').style;
// conn.height+=200px;

ht=ht+360
document.getElementById('con').style.height=ht+'px';


window.alert("Successfully Added");



}

function trigger()
{
    const elem=document.getElementById('fin');
    elem.innerHTML="";
}

function update()
{


  window.alert("hjddgf");
  document.getElementById('tle').innerHTML=prompt("Enter the Title of the BookMark");
  document.getElementById('Span').innerHTML=prompt("Enter the Description");
  document.getElementById('tagg').innerHTML=prompt("Enter the Tags");
    document.getElementById('urll').innerHTML=prompt("Enter the URL");





}



const btn = document.getElementById('nms');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('tle');



  // 👇️ clear input field
  firstNameInput.value = '';
});
