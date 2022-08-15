// // for UC8

//         const salary = document.querySelector('#salary');
//         const output = document.querySelector('.salary-output');
//         output.textContent = salary.value;
//         salary.addEventListener('input',function() {
//             output.textContent = salary.value;
//         });

//         // for UC7
//         const text=document.querySelector('#name');
//         const textError=document.querySelector('.text-error');
//         text.addEventListener('input',function(){
//             let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
//             if (nameRegex.test(text.value))
//             textError.textContent="";
//             else textError.textContent="Name is Incorrect";
//         });

        window.addEventListener('DOMContentLoaded', (event) => {
            salaryOutput();
            validateName();
            //validateDate();
        
        });
        
        function salaryOutput() {
            const salary = document.querySelector('#salary');
            const output = document.querySelector('.salary-output');
            output.textContent = salary.value;
            salary.addEventListener('input', function() {
                output.textContent = salary.value;
        
            });
        }
        
        function validateName() {
            const name = document.querySelector('#name');
            const textError = document.querySelector('.text-error');
            name.addEventListener('input', function () {
                if (name.value.length == 0) {
                    textError.textContent = "";
                    return;
                }
                try {
                    (new EmployeePayrollData()).name = name.value;
                    textError.textContent = "";
                } catch (e) {
                    textError.textContent = e;
                }
            });
        }