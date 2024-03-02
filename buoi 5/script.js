console.log(5+6);
document.write(3+4);
window.alert(20+30);
var ten ="quan";
var so = 5;
var dungsai = true;

document.writeln(ten);
document.write(so);

var so1="100";
var so2="10";
z=so1/so2;
document.write(z);

var hienthi = "xin chao";
var hienthi2= hienthi.toUpperCase();
document.write(hienthi2);

function Student(id1,name1,age1){
    this.id = id1;
    this.name=name1;
    this.age=age1;
}
var Std1 = new Student(1,"minh",20);
document.write(Std1.name);
var person=["a","b","c"];
document.write(person[0]);
person[5]="e";
document.write(person[5]);
//local scope
local2="hoang"
function local(){
    var local1="quan"
    document.write(local1);
    document.write(local2);
}
local();
// khong duoc
document.write(local1);
