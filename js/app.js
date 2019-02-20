function showPasswordField() {
    var passwordField = document.getElementById("password-field");
    var changePassword = document.getElementById("change-password");

    passwordField.classList.remove("hidden");
    changePassword.classList.add("hidden");
}

function editFeeStructureItem(data) {
    var modal = $('#item-edit-modal');
    modal.on('show.bs.modal', function (event) {
        var imodal = $(this);
        imodal.find('#fee-structure-item-id').val(data.id);
        imodal.find('#name').val(data.name);
        imodal.find('#amount').val(data.amount);
    });
    modal.modal('show');
}

function classOnChange(selectClass) {
    var selectType = document.getElementById("studentType");
    var studentClass = selectClass.options[selectClass.selectedIndex].value;

    if (studentClass < 4) {
        selectType.value = "DAY-SCHOLAR";
        selectType.setAttribute("readonly", "readonly");
    } else {
        selectType.options[0].selected = true;
        selectType.removeAttribute("readonly");
    }
}

function isPaymentParametersFilled() {
    var term = document.getElementById("term");
    var date = document.getElementById("date");
    var type = document.getElementById("type");
    var parameterFieldset = document.getElementById("parameter-fieldset");

    if (term.selectedIndex !== 0 && date.value !== "" && type.selectedIndex !== 0) {
        fetchBalances();
        parameterFieldset.classList.remove("hidden");
    } else {
        parameterFieldset.classList.add("hidden");
    }
}

function fetchBalances() {
    var studentId = document.getElementById("student-id").value;
    var termSelect = document.getElementById("term");
    var termId = termSelect.options[termSelect.selectedIndex].value;
    var parameterItems = document.getElementById("parameter-items");

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                while (parameterItems.firstChild) {
                    parameterItems.removeChild(parameterItems.firstChild);
                }

                var response = JSON.parse(httpRequest.responseText);
                response.forEach(function (element) {
                    var label = document.createElement("label");
                    label.setAttribute("for", element.name);
                    label.setAttribute("class", "control-label");
                    label.innerHTML = element.name + " <span class='text-danger'><small>(Paid: " + parseFloat(element.total).toLocaleString() + " Balance: " + element.balance.toLocaleString() + ")</small></span>";

                    var input = document.createElement("input");
                    input.setAttribute("type", "number");
                    input.setAttribute("class", "form-control");
                    input.setAttribute("name", "items[" + element.id + "]");
                    input.setAttribute("id", element.name);
                    input.setAttribute("value", "0.00");
                    input.setAttribute("required", "required");
                    input.setAttribute("max", element.balance);

                    var div = document.createElement("div");
                    div.setAttribute("class", "form-group");

                    div.appendChild(label);
                    div.appendChild(input);
                    parameterItems.appendChild(div);
                });
            } else {
                alert('There was a problem with the request.');
            }
        }
    };

    httpRequest.open("GET", "get-balances.php?student_id=" + encodeURIComponent(studentId) + "&term_id=" + encodeURIComponent(termId));
    httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    httpRequest.send(null);
}