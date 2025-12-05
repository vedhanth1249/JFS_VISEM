
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

    alert(
        "Registration Successful!\n" +
        "Name: " + name + "\n" +
        "Selected Subjects:\n- " + selectedSubjects.join("\n- ") + "\n" +
        "Total Fee: $" + totalFee
    );
});