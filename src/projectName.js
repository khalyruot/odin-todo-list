// projectName.js
export function projectName(){


    this.sayname_Project = function(){

        const projectName = document.createElement("div");
        projectName.innerText = "Project";
        projectName.setAttribute("class", "projectName");
        document.getElementById("content_projectName").appendChild(projectName);
    
        const projectNameBox = document.createElement("INPUT");
        projectNameBox.setAttribute("type", "text");
        projectNameBox.setAttribute('id','projectName_Box');
        projectNameBox.setAttribute('placeholder','project name');
        document.getElementById("content_projectName").appendChild(projectNameBox);

    }

}

