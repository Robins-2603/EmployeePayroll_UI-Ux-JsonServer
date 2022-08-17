window.addEventListener('DOMContentLoaded',(even) => {
    createInnerHtml();
    });
    const createInnerHtml=() =>{
        const innerHtml=`
        <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                <tr>
                <td><img class="profile" alt="" src="profilePic/Ellipse -6.png"></td>
                <td>Sneha Pal</td>
                <td>Female</td>
                <td><div class="dept-label">HR</div>
                <div class="dept-label">Engineers</div></td>
                <td>300000</td>
                <td>1 Nov 2020</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="profilePic/delete-black-18dp.svg">
                    <img id="1" onclick="update(this)" alt="edit" src="profilePic/create-black-18dp.svg">
                </td>
                </tr>
        `;
        document.querySelector('#display').innerHTML=innerHtml;
    }

    const createEmployeePayrollJSON=()=>{
        let empPayrollList =[
            {
                _name: "Robins",
                _gender:"Male",
                _department: ["ENGINEER","HR"],
                _salary: "300000",
                _startDate: "3 Jun 2022",
                _notes: "",
                _profilePic: "\assets\profile-images\Ellipse -1.png"
            },
            {
                _name: "Shweta",
                _gender:"Female",
                _department: ["FINANCE","ENGINEER","HR"],
                _salary: "500000",
                _startDate: "22 May 2019",
                _notes: "",
                _profilePic: "\assets\profile-images\Ellipse -2.png"   
            },
            {
                _name: "Nilesh",
                _gender:"Male",
                _department: ["ENGINEER","HR"],
                _salary: "400000",
                _startDate: "9 Mar 2020",
                _notes: "",
                _profilePic: "\assets\profile-images\Ellipse -3.png.png"
            }
        ];
        return empPayrollList;
    }
    const getDeptHtml=(deptList) => {
        let deptHtml='';
        for(const dept of deptList){
            deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div`
        }
        return deptHtml;
    }