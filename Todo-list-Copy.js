/*  STEPS 
        Get the value from the input
        insert it in the ul
        add a remove button to each ul
        store it in a local storage
*/

let taskInpu=document.querySelector('#task-input');
let addButtom=document.querySelector('button');
let unOrderlist=document.querySelector('ul');


function toDOList(){
    if(taskInpu.value!==""){

        // getting the input value and removing white space 
        let taskInput=taskInpu.value.trim();

        //creating list elements and Text  
        let list=document.createElement('li');
        let listText=document.createTextNode(taskInput);
        let removeButton=document.createElement('button');
        let removeBtnText=document.createTextNode('❌');

        // styling the list elements
        list.style.padding = "10px";
        list.style.margin = "10px 0";
        list.style.backgroundColor = "#cceeff";
        list.style.border = "1px solid #0099cc";
        list.style.borderRadius = "5px";
        
        // styling the removeButton
        removeButton.style.marginLeft = "10px";
    
        //Appending elemnts to there parents
        
        removeButton.appendChild(removeBtnText);
        list.appendChild(listText);
        list.appendChild(removeButton);
        unOrderlist.appendChild(list)

        
        //adding eentlisterner to the button so as to remove task onClick
        removeButton.addEventListener('click', function(){
            list.remove();
        })
    }else{
        alert('Please input a task')
    }
    taskInpu.value="";
}

addButtom.addEventListener('click', (m)=>{
    m.preventDefault();
    toDOList();
    
})