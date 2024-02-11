const circle1=document.querySelector("#circle-1")
const circle2=document.querySelector("#circle-2")
const circle3=document.querySelector("#circle-3")
const circle4=document.querySelector("#circle-4")
const content=document.querySelector("#content")
content.addEventListener("mouseenter",move())
const width=content.getBoundingClientRect().width;
const height=content.getBoundingClientRect().height;
function move(){
    content.addEventListener("mousemove",function(dets){
        // console.log((dets.x-(width/2))/(width/100))
        // console.log(((dets.y - 450) - (35/2))/(3.84)/2)
        circle1.style.transform=`translate(${(dets.x-(width/2))/(width/100)}%,${((dets.y - 450) - (35/2))/(3.84)/2}%)`
        circle2.style.transform=`translate(${-(dets.x-(width/2))/(width/100)}%,${-((dets.y - 450) - (35/2))/(3.84)/2}%)`
        circle3.style.transform=`translate(${-(dets.x-(width/2))/(width/100)}%,${((dets.y - 450) - (35/2))/(3.84)/2}%)`
        circle4.style.transform=`translate(${(dets.x-(width/2))/(width/100)}%,${-((dets.y - 450) - (35/2))/(3.84)/2}%)`
       
    })

}
var cursor =document.querySelector("#cursor");
window.addEventListener("mousemove",function(e){
    cursor.style.top=e.pageY-10+"px"
    cursor.style.left=e.pageX-10+"px"
})