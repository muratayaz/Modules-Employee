export class UI {
    constructor() {
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmenInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    addAllEmployeeToUI(employees){
        let result = "";

        employees.forEach(employee => {
            result += `
            <tr class="list-employees-item">
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>            
            <td><a href="#" id = "update-employee" class="btn btn-primary">Güncelle</a></td> 
            <td><a href="#" id = "delete-employee" class="btn btn-danger">Sil</a></td>
            </tr>
            `;
        });

        this.employeesList.innerHTML = result;
    }
    addEmployeeToUI(employee){
        this.employeesList.innerHTML +=`
        <tr class="list-employees-item">
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>            
        <td><a href="#" id = "update-employee" class="btn btn-primary">Güncelle</a></td> 
        <td><a href="#" id = "delete-employee" class="btn btn-danger">Sil</a></td>
        </tr>
        `;  
    }
    deleteEmployeeFromUI(element){
        element.remove();
    }
    toggleUpdateButton(target){
        if(this.updateButton.style.display === "none"){
            this.updateButton.style.display = "block";
            this.addEmployeeInfoToInputs(target);
        }
        else {
            this.updateButton.style.display = "none"
            this.clearInputs();
        }
    }
    addEmployeeInfoToInputs(target){
        const children = target.children;
        this.nameInput.value = children[1].textContent;
        this.departmenInput.value = children[2].textContent;
        this.salaryInput.value = children[3].textContent;
    }
    clearInputs(){
        this.nameInput.value = "";
        this.departmenInput.value = "";
        this.salaryInput.value = "";
    }
    updateEmployeeOnUI(employee,parent){
        parent.innerHTML = `
        <tr class="list-employees-item">
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>            
        <td><a href="#" id = "update-employee" class="btn btn-primary">Güncelle</a></td> 
        <td><a href="#" id = "delete-employee" class="btn btn-danger">Sil</a></td>
        </tr>
        `;
        this.clearInputs();
    }
    filterEmployeesList(value,list){

        list.forEach((listItem)=>{

            const text = listItem.children[1].textContent.toLowerCase();
        
            console.log(text);
            
            if (text.indexOf(value)) {
                    listItem.setAttribute("style","display : none !important");
            }
            else {
                    listItem.setAttribute("style","display : block");
            }
        });
    }
}