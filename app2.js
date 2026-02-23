// Working with item bars
const profile = document.getElementById("profile");
const members = document.getElementById("members");
const signOut = document.getElementById("signOut");
const services = document.getElementById("services");
const contacts = document.getElementById("contacts");;
const conf = document.getElementById("conf");
const message = document.getElementById("message")

document.addEventListener("mouseover", () =>{
    if(profile.onclick){
        profile.className = "exibe";
        members.className = "oculta";
        services.className = "oculta";
        contacts.className = "oculta";
    } else if(members.onclick){
        profile.className = "oculta";
        members.className = "exibe";
        services.className = "oculta";
        contacts.className = "oculta";
    }
})

signOut.addEventListener("click", () =>{
    alert("You have sign out from the page!")
    window.location = "http://127.0.0.1:5500/index.html"
})

profile.addEventListener("click", () =>{
    const regist = document.getElementById("regist");
    regist.style.display = "flex";
});

close1.addEventListener("click", () =>{
    regist.style.display = "none"
})

members.addEventListener("click", () =>{
    const dat = document.getElementById("dat");
    dat.style.display = "flex";
});
close2.addEventListener("click", () =>{
    dat.style.display = "none";
});

// Working with register enter
let btnAddingMembers = document.getElementById("add");
let membersData = [];
btnAddingMembers.addEventListener("click", () =>{
    let memberName = document.getElementById("name").value;
    let memberAge = document.getElementById("age").value;
    let sexM = document.getElementById("sexM").checked;
    let sexF = document.getElementById("sexF").checked;
    let sex = document.getElementById("sex");
    
    switch(true){
        case memberName == "" || !isNaN(memberName):
            alert("Please, insert correctly new member name!");
            break;

        case memberAge == "" || isNaN(memberAge):
            alert("Please, insert correctly new member age!");
            break;
        default:
            alert("All new member information was sent.");
            break;
    }
    
    // Working with informations's buttons
    let btnS = document.getElementById("btnS1");
    btnS.addEventListener("click", () =>{
        let name1 = document.getElementById("name1");
        membersData.push({
        memberName: memberName,
        memberAge: memberAge,
        sex: sex
        });
    
        // Working with new members descriptions
        let joinData = "";
        for(let s = 0; s < membersData.length; s++){
            joinData += (s + 1) + " - " + "Name: " + membersData[s].memberName + ";" + " Age: " + membersData[s].memberAge + ";" + "\n\n";
        }
        if(!sexF.checked){
            sex = "male";
            name1.textContent = joinData + " Gender: " + sex;
        }
        if(!sexM.checked){
            sex = "female";
            name1.textContent = joinData + " Gender: " + sex;
        }
    });

    // Let fill field empty after register new member;

    document.getElementById("name").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById("sexF").checked = "";
    document.getElementById("sexM").checked = "";
    memberName.focus();
    return;
});

let notification = document.getElementById("not");
notification.addEventListener("click", () =>{
    alert("Hello World!")
})
