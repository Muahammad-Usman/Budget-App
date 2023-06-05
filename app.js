let spend=[];
let limit=null;

let increase=0;
function def_limit(){
    let lim =document.getElementById("total-amount").value;
    if(lim ===""){
        alert("Enter budget value");
    }

    else{
        limit=lim;
        console.log(lim);
        document.getElementById("bud").innerHTML=lim;
        document.getElementById("total-amount").value=null;
    }
}

function Submission(event){
    event.preventDefault();

    let date=document.getElementById("due-date").value;
    let total=parseInt(document.getElementById("total-val").value);
    let category=document.getElementById("category").value;
    let description=document.getElementById("description").value;
    let pay_day=document.getElementById("payment-date").value;
    
   
    console.log(total);
    spend.push(total);
    console.log(spend);

    let tot=0;

    for(let i =0 ; i < spend.length ;i++){
        tot+=parseInt(spend[i]);
    }


    let left =limit-total;
    limit=left;

    if(limit >=0){
        //spend.push(total);
        console.log("working condition");
        //limit=left;
        document.getElementById("expense").innerHTML=tot;
        document.getElementById("bal").innerHTML=left;
        console.log("working",date,category,total);

        Node(date,total,category);

    }
    else{
        alert("sadas");
        spend.pop();
        limit+=total;
    }
    
}   



function Node(date,total,category){
    var upper_divison =document.getElementById("expense-list"); 

    let span1=document.createElement("span");
    let span2= document.createElement("span");
    let cat= document.createElement("span");
    let img=document.createElement("img");
    let img2=document.createElement("img")
    img2.src="./pictures/icons8-delete-64.png";

    if(category === "movie"){
        img.src="./pictures/watching-a-movie.png";
    }
    else if(category === "food"){
        img.src="./pictures/icons8-burger-48.png";
    }
    else if(category === "grocery"){
        img.src="./pictures/icons8-grocery-48.png";
    }
    else{
        alert("DEFINE CATEGORY");
    }

    img.setAttribute('class',"pic");
    img2.setAttribute('class',"delete_pic");
    cat.appendChild(document.createTextNode(category));
    cat.setAttribute("class","spend_item");

    span1.appendChild(document.createTextNode(date));
    span1.setAttribute("class","date");

    span2.appendChild(document.createTextNode("-"+total+"$"));
    span2.setAttribute("class","spend");


    var para = document.createElement("p");

    console.log(total);
    
    para.appendChild(span1);
    para.appendChild(span2);
    para.appendChild(cat);
    para.appendChild(img);
    para.appendChild(img2);
    increase++;
    para.setAttribute("class","List_generation1")
    para.setAttribute("id","para"+increase);

    upper_divison.appendChild(para);

}

let submit = document.getElementById("submit");
submit.addEventListener('click',Submission);

let delete_button;
setInterval(function() {

    delete_button= document.getElementsByTagName("img");
    console.log(delete_button.length);
    for (var i = 0; i < delete_button.length; i++) {
        delete_button[i].addEventListener("click", deleteFunc);
    }
}, 1000);

function deleteFunc(e){
    console.log("hello");
    //document.getElementById("spend").textContent
    let ele=e.currentTarget;
    ele=ele.parentNode;
    console.log("answer: ",ele.getAttribute("id"));

    let point=ele.getAttribute("id");
    console.log("id",point);

    let select_value=0;
    select_p= document.getElementsByTagName("p");


    console.log(select_p.length);
    for (var i = 0; i < select_p.length; i++) {
        if(point === select_p[i].getAttribute("id") ){
            console.log("In if",point," index: ",i,"  ",select_p[i]);
            if(e.currentTarget.getAttribute("src") === "./pictures/icons8-delete-64.png"){
                let index=i-2;

                select_value=spend.splice(index, 1);
                select_value=parseInt(select_value);

                limit+=select_value;

            
                let tot_Exp=0;
                for(let j =0 ; j < spend.length ;j++){
                    tot_Exp+=parseInt(spend[j]);
                }
                limit-tot_Exp;


                let bud=parseInt(document.getElementById("bud").textContent);
                document.getElementById("bal").innerHTML=(bud-tot_Exp);

                document.getElementById("expense").innerHTML=tot_Exp;
                console.log("clicked :",spend,"index: ",i,"selected val: ",select_value);
                console.log("Target: ",e.currentTarget.getAttribute("src"));

                var paragraph = e.currentTarget.parentNode; 

                paragraph.remove(paragraph.children[i]);
            }
        
        }

    }
      
}   


