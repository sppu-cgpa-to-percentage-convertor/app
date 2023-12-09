function convertCGPA() {
    var cgpa = document.getElementById("cgpa_input").value;
    if (cgpa == "") {
        document.getElementById("error_msg").innerHTML = "Please enter valid CGPA (i.e. between 0 & 10)";
        return;
    }
    var cgpa = Number(cgpa);
    var grade;
    var per;
    var cls;
    if (cgpa < 0 || cgpa > 10) {
        document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
        return;
    }
    else {
        document.getElementById("error_msg").innerHTML = "";
    }
    if (cgpa >= 9.00) {
        grade = "O";
        per = 20 * cgpa - 100;
    }
    else if (cgpa >= 8.50) {
        grade = "A+";
        per = 12 * cgpa - 25;
    }
    else if (cgpa >= 7.5) {
        grade = "A";
        per = 10 * cgpa - 7.5;
    }
    else if (cgpa >= 6.5) {
        grade = "B+";
        per = 5 * cgpa + 26.25;
    }
    else if (cgpa >= 5.5) {
        grade = "B";
        per = 10 * cgpa - 2.5;
    }
    else if (cgpa >= 4.25) {
        grade = "C";
        per = 10 * cgpa - 2.5;
    }
    else if (cgpa >= 4.00) {
        grade = "P";
        per = 6.6 * cgpa + 13.6;
    }
    else {
        grade = "F";
        per = 0;
    }
    if (cgpa >= 7.75)
        cls = "First Class With Distinction";
    else if (cgpa >= 6.75)
        cls = "First Class";
    else if (cgpa >= 6.25)
        cls = "Higher Second Class"
    else if (cgpa >= 5.5)
        cls = "Second Class";
    else
        cls = "Fail";
    per = per.toPrecision(5);
    document.getElementById("op_cgpa").innerHTML = cgpa;
    document.getElementById("op_grade").innerHTML = grade;
    document.getElementById("op_per").innerHTML = per;
    document.getElementById("op_class").innerHTML = cls;
}
document.getElementById("cgpa_input").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("convert_btn").click();
    }
});