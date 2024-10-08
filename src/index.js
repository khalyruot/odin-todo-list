// index.js
import "./styles.css";
import { projectName } from "./projectName.js";
import { toDoList } from "./projectToDoList.js";
import { projectNameButton } from "./button.js";

const btn_btn = document.createElement("BUTTON");
btn_btn.innerText = "Add ToDo List";
document.getElementById("btn").appendChild(btn_btn);

btn_btn.onclick = function(){
    const input_0 = document.getElementById('projectName_Box');
    const input_1 = document.getElementById('projectTask_Box_1');
    const input_2 = document.getElementById('projectTask_Box_2');
    const input_3 = document.getElementById('projectTask_Box_3');
    const input_4 = document.getElementById('projectTask_Box_4');
    const input_5 = document.getElementById('projectTask_Box_5');
    
    const sayProjectNameButton_1 = new projectNameButton(input_0.value, input_1.value, input_2.value, input_3.value, input_4.value, input_5.value);
    sayProjectNameButton_1.sayProjectNameButton();

    document.getElementById('projectName_Box').value = '';
    document.getElementById('projectTask_Box_1').value='';
    document.getElementById('projectTask_Box_2').value='';
    document.getElementById('projectTask_Box_3').value='';
    document.getElementById('projectTask_Box_4').value='';
    document.getElementById('projectTask_Box_5').value='';
    
    
}

const projectName_1 = new projectName();
projectName_1.sayname_Project();
//projectToDoList()


toDoList();











