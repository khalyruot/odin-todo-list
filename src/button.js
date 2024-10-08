

export function projectNameButton(input_0, input_1, input_2, input_3, input_4, input_5){

    this.input_0 = input_0
    this.input_1 = input_1
    this.input_2 = input_2
    this.input_3 = input_3
    this.input_4 = input_4

    this.sayProjectNameButton = function(){
        


        // Add Row
        var projectTable = document.getElementById('text_project');
        var rowCnt = projectTable.rows.length;;
        var tr = projectTable.insertRow(rowCnt);
        tr = projectTable.insertRow(rowCnt);


        for (var c = 0; c < 3; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);
            td.setAttribute('id','td');

            if (c == 0) {           // FIRST COLUMN.
                // ADD A BUTTON.
                var button = document.createElement('input');

                // SET INPUT ATTRIBUTE.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');
                button.setAttribute('id', 'rm');


                // ADD THE BUTTON's 'onclick' EVENT.
                button.setAttribute('onclick', 'removeRow(this)');
                
                td.appendChild(button);
            }

            else if(c==2){
                var x = document.createElement("INPUT");
                const status_text = document.createElement("p");
                status_text.innerText = "STATUS";
                x.setAttribute("type", "checkbox");
                x.setAttribute('id', 'checkBox');
                td.appendChild(status_text);
                td.appendChild(x);
            }

            else if(c==1) {
                // CREATE AND ADD TEXTBOX IN EACH CELL.
                var ele = document.createElement("TD");
    

                const displayProject = document.createElement("p");
                displayProject.innerHTML = "The project name: " + input_0;
                displayProject.setAttribute('id','displayProject');
                ele.appendChild(displayProject);

                let myArrayFooter = [" Here is the Project Description: " + input_1, 
                                    " Here is the project Due Date: " + input_2,
                                    " Here is the project priority: " + input_3,
                                    " Here is the project Note: " + input_4,
                                    " Here is the project Priority: " + input_5

                                ];

                 //create textnode
                for(let i = 0; i < 5; i++){
                    var listArray = document.createElement("li");
                    const textToBeAdded = document.createTextNode(myArrayFooter[i]);
                    listArray.appendChild(textToBeAdded);
                    listArray.setAttribute('id','project_area');
                    ele.appendChild(listArray);
                }

                td.appendChild(ele);

              
            }
            
        }
    }

    function removeRow(oButton) {
        var projectTable = document.getElementById('text_project');
        projectTable.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
    }
    
     
}


