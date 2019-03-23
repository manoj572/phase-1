function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  educational(data.educational);
  skills(data.skills);
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  right.appendChild(image);
  main.appendChild(right);
  var h3=document.createElement('h5');
  h3.textContent=pro.name;
  right.append(h3);
  main.append(right);
}
function career(c){
  var rh=document.createElement("hr");
  left.append(rh);
  var df=document.createElement("h5");
  df.textContent=c.info;
  left.append(df);

}
function educational(edu){
  var h2=document.createElement('h6');
  h2.textContent="edu details";
  left.append(h2);
  var hr=document.createElement('hr');
  left.append(hr);
  var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<th>"+"sno"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"ins"+"</th>"+
  "<th>"+"per"+"</th>"+
  "</tr>";

    for(i in edu){
    row +="<tr>"+"<td>"+edu[i].sno+"</td>"+
    "<td>"+edu[i].degree+"</td>"+
    "<td>"+edu[i].ins+"</td>"+
    "<td>"+edu[i].per+"</td>"+
    "</tr>";
  }
  table.innerHTML=row;
  left.appendChild(table);
  main.appendChild(left);

}
function skills(l){
  var hh=document.createElement("h2");
  hh.textContent="skills set";
  right.append(hh);
    var ul=document.createElement(ul);
    right.append(ul);
    for(i in l){
      var li=document.createElement("li");
      li.textContent=l[i].info;
      ul.append(li);
    }

}
