
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");

subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;
        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });
        totalBox.innerText = "$" + total;
    });
});

document.getElementById("regform").addEventListener("submit", function(e) {
    e.preventDefault();

    let selectedSubjects = [];
    let totalFee = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            selectedSubjects.push(sub.parentElement.innerText.trim());
            totalFee += parseInt(sub.value);
        }
    });
    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject.");
        return;
    }
   let messageBox = document.getElementById("messageBox");
    if (!messageBox) {
    messageBox = document.createElement("div");
    messageBox.id = "messageBox";   
    document.getElementById("regform").appendChild(messageBox);
    }
    messageBox = document.getElementById("messageBox");
    messageBox.style.display = "block"; 
    messageBox.innerHTML = `
    <strong>Registration Successful!</strong><br>
    Name: ${name}<br>
    Selected Subjects:<br>- ${selectedSubjects.join("<br>- ")}<br>
    Total Fee: $${totalFee}
`;
});