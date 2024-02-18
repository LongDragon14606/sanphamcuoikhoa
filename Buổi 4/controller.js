const controller = {}

controller.register = (data) => {
    if (data.firstName === "") {
        // alert("Please input your first name");
        document.getElementById("first-name-error").innerText = "Please input your first name"
    }
}