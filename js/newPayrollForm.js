window.addEventListener('DOMContentLoaded',(event) =>{
    const text=document.querySelector('#name');
            const textError=document.querySelector('.text-error');
            text.addEventListener('input',function(){
                if(text.value.length == 0){
                    textError.textContent="";
                    return;
                }try{
                    (new EmployeePayrollData()).name=text.value;;
                    textError.textContent="";
                }catch (e){
                    textError.textContent=e;
                }
            });
    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
    });

    // for uc3 day44
    const save = () => {
        try{
            let employeePayrollData=createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
        } catch (e){
            return;
        }
    }

    function createAndUpdateStorage(employeePayrollData){
        let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList != undefined){
            employeePayrollList.push(employeePayrollData);
        }else{
            employeePayrollList=[employeePayrollData]
        }
        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
    }

    const createEmployeePayroll = () => {
        let employeePayrollData=new EmployeePayrollData();
        try{
            employeePayrollData.name=getInputValueById('#name');
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
        employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
        employeePayrollData.department=getSelectedValues('[name=department]');
        employeePayrollData.salary=getInputValueById('#salary');
        employeePayrollData.note=getInputValueById('#notes');
        let date=getInputValueById('#days')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        employeePayrollData.date=Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }
    const getSelectedValues=(propertyValues) => {
        let allItems=document.querySelectorAll(propertyValues);
        let setItems=[];
        allItems.forEach(item =>{
            if(item.checked) 
            setItems.push(item.value);
        });
        return setItems;
    }
    const getInputValueById=(id) => {
        let value=document.querySelector(id).value;
        return value;
    }
    const resetForm = () =>{
        setValue("#name", "");
        unsetSelectedValues("[name=profile]");
        unsetSelectedValues("[name=gender]");
        unsetSelectedValues("[name=department]");
        setValue("#salary", "");
        setValue("#notes", "");
        setValue("#day", "1");
        setValue("#month", "January");
        setValue("#year", "2021");
    }
    
    const unsetSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        allItems.forEach(item => {
            item.checked = false;
        });
    }
    
    const setValue = (id, value) => {
        const element = document.querySelector(id);
        element.value = value;
    } 
