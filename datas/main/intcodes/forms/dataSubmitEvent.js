//Welcoming..
console.log(`Hello Putra!`);
let Username = document.getElementById("inputName");
let Story = document.getElementById("inputStory");
let Submit = getElementById("buttonSubmit");
let Refresh = document.getElementById("buttonReset");
let Form = document.getElementById("divWrapEvent0")

    console.log(Username.value);
    console.log(Story.value);
    localStorage.setItem("Name", Username.value);
    localStorage.setItem("Story", Story.value);
    window.location.assign = "/datas/main/intcodes/hall/hallEvents.html";

function buttonSubmit0() {
    if (Username.value && Story.value) {
        console.log(`Data Input Username : `, Username.value);
        console.log(`Data Input Story : `, Story.value);
        console.log(`Data Importing..`);
        localStorage.setItem("Name", Username.value);
        localStorage.setItem("Story" , Story.value);
        window.location.href = "/datas/main/intcodes/hall/hallEvents.html";
    }
    else {
        console.log(`Empty Data!`);
        return alert(`Fill The Form!`);
    }

    if (localStorage.getItem("Name") == Username.value && localStorage.getItem("Story") == Story.value) {
        console.log(`Data Processing..`);
        alert (`Welcome!`);
        Form.style.display = "none";
    }
}