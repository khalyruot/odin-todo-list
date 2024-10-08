// projectToDoList.js

export function toDoList(){


        const projectToDoList = document.createElement("div");
        projectToDoList.innerText = "Todo List";
        projectToDoList.setAttribute("class", "projectToDolist");
        document.getElementById("content_projectToDoList").appendChild(projectToDoList);

        const projectNameTask_input_1 = document.createElement("INPUT");
        projectNameTask_input_1.setAttribute("type", "text");
        projectNameTask_input_1.setAttribute('id','projectTask_Box_1');
        projectNameTask_input_1.setAttribute('placeholder','project title');
        document.getElementById("content_projectToDoList").appendChild(projectNameTask_input_1);

        const projectNameTask_input_2 = document.createElement("INPUT");
        projectNameTask_input_2.setAttribute("type", "text");
        projectNameTask_input_2.setAttribute('id','projectTask_Box_2');
        projectNameTask_input_2.setAttribute('placeholder','project description');
        document.getElementById("content_projectToDoList").appendChild(projectNameTask_input_2);
    
        const projectNameTask_input_3 = document.createElement("INPUT");
        projectNameTask_input_3.setAttribute("type", "text");
        projectNameTask_input_3.setAttribute('id','projectTask_Box_3');
        projectNameTask_input_3.setAttribute('placeholder','project due date');
        document.getElementById("content_projectToDoList").appendChild(projectNameTask_input_3);

        const projectNameTask_input_4 = document.createElement("INPUT");
        projectNameTask_input_4.setAttribute("type", "text");
        projectNameTask_input_4.setAttribute('id','projectTask_Box_4');
        projectNameTask_input_4.setAttribute('placeholder','project priority');
        document.getElementById("content_projectToDoList").appendChild(projectNameTask_input_4);

        const projectNameTask_input_5 = document.createElement("INPUT");
        projectNameTask_input_5.setAttribute("type", "text");
        projectNameTask_input_5.setAttribute('id','projectTask_Box_5');
        projectNameTask_input_5.setAttribute('placeholder','project note');
        document.getElementById("content_projectToDoList").appendChild(projectNameTask_input_5);

        
    
}








    




