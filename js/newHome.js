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