const employee = {
    name: "Jimmy",
    streetAddress: "319 Sycamore Drive",
};

function updateEmployeeWithKeyAndValue(emplyee, key, value) {

    const empl = { ...emplyee };
    empl[key] = value;

    return empl;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const empl = { ...employee };
    delete empl[key]
    return empl
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}