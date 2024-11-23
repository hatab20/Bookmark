var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteUrl");
var sitebtnInput=document.getElementById("btoon");


siteList=[];



function addSite() {
    if (validationNameInput() === true && validationUrlInput() === true) {
        var sites = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value,
        };
        
        siteList.push(sites);
        displaySites();
        clear();

        // SweetAlert Success
        // Swal.fire({
        //     title: 'Success!',
        //     text: 'Site has been added successfully.',
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // });

        return;
    } else {
        // SweetAlert Custom Alert
        Swal.fire({
            html: `
                <div style="display: flex; gap: 5px; justify-content: start; margin-bottom: 10px;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: red;"></div>
                    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: yellow;"></div>
                    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: green;"></div>
                </div>
                <h3 style="color: #333; font-weight: bold;">Site Name or URL is not valid</h3>
                <p style="margin: 10px 0; color: #555;">Please follow the rules below:</p>
                <ul style="text-align: left; list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 8px;">&#8594; <strong>Site name</strong> must contain at least <strong>3 characters</strong>.</li>
                    <li>&#8594; <strong>Site URL</strong> must be a valid one.</li>
                </ul>
            `,
            showConfirmButton: true,
        });
    }
}










// function addSite() {
//     if (validationNameInput() === true && validationUrlInput() === true) {
//         var sites = {
//             siteName: siteNameInput.value,
//             siteUrl: siteUrlInput.value,
//         };
        
//         siteList.push(sites);
//         console.log(siteList);
//         displaySites();
//         clear();
        
//         // SweetAlert for Success
//         Swal.fire({
//             title: 'Success!',
//             text: 'Site has been added successfully.',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });

//         return;
//     } else {
//         // SweetAlert for Validation Error
//         Swal.fire({
//             title: 'Error!',
//             text: 'Please make sure all fields are valid.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// }






// function addSite() {
//     if (validationNameInput() === true &&  validationUrlInput() === true) {

//         var sites={
//             siteName:siteNameInput.value,
//             siteUrl:siteUrlInput.value,
//         };
        
//         siteList.push(sites);
//         console.log(siteList);
//         displaySites()
//         clear()
//         return;
//     }



// }

function displaySites() {
    cartona="";
    for (var i = 0; i < siteList.length; i++) {
        cartona += `<tr><td>${i+1}</td><td>${siteList[i].siteName}</td><td><a href="${siteList[i].siteUrl}" class="btn btn-outline-primary" >visit</a></td><td><button class="btn btn-outline-danger" onclick="deleteItem(${i})">delete</button></td></tr>`
}

document.getElementById("tableContent").innerHTML = cartona;
}

function deleteItem(index) {
    siteList.splice(index, 1);
    localStorage.setItem("tableContent", JSON.stringify)
    displaySites();
    document.getElementById("tableContent").innerHTML = cartona;
}

function validationNameInput() {
  
    var name = siteNameInput.value.trim();
    var regex = /^[A-Z][a-z]{2,10}$/;
    var msgName = document.getElementById('msgName');



    if (regex.test(name)) {
        siteNameInput.classList.add("is-valid");
        siteNameInput.classList.remove("is-invalid");
        msgName.classList.add("d-none");
        return true;
    } else {
        siteNameInput.classList.add("is-invalid");
        siteNameInput.classList.remove("is-valid");
        msgName.textContent = "Name must start with a capital letter and be 3 to 11 characters long.";
        msgName.classList.remove("d-none");
        return false;
    }
}

function validationUrlInput() {
  
    var Url = siteUrlInput.value.trim();
    var regex = /^(https?|ftp):\/\/([^\s$.?#].[^\s]*)(\.com|\.org|\.edu|\.net|\.info|\.gov|\.eg)$/i;
    var msgUrl = document.getElementById('msgUrl');



    if (regex.test(Url)) {
        siteUrlInput.classList.add("is-valid");
        siteUrlInput.classList.remove("is-invalid");
        msgUrl.classList.add("d-none");
        return true;
    } else {
        siteUrlInput.classList.add("is-invalid");
        siteUrlInput.classList.remove("is-valid");
        msgUrl.textContent = `Please enter your Site url The first thing you must enter
                (https, http and ftp) and enter (://) and then enter from two
                letters up to 15 and must end with
                (.com|.org|.edu|.net|.info|.gov|.eg )`;
        msgUrl.classList.remove("d-none");
        return false;
    }
}




// function validationNameInput(){
//     var name = siteNameInput.value;
//     var regex = /^[A-Z][a-z]{2,10}$/;
//     var msgName = document.getElementById('msgName');

//     if (regex.test(name)) {
//         siteNameInput.classList.add("is-valid");
//         siteNameInput.classList.remove("is-invalid");
//         msgName.classList.add("d-none");
//         return true
// }else{
//     siteNameInput.classList.add("is-invalid");
//     siteNameInput.classList.remove("is-valid");
//     msgName.classList.remove("d-none");
//     return false;
// }

// }

function clear() {
    siteNameInput.value = null;
    siteUrlInput.value = null;
}

