const profile = document.getElementById("profile");
const members = document.getElementById("members");

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
})
