var surNameEl = document.querySelector("#sur_name"),
	givenNameEl = document.querySelector("#given_name"),
	birthDateEl = document.querySelector("#birth_date"),
	countryEl = document.querySelector("#country"),
	resideEl = document.getElementById("residence"),
	phoneEl = document.getElementById("phone"),
	emailEl = document.getElementById("email"),
	submitButton = document.getElementById("submit"),
	formEl = document.getElementById("student");

formEl.addEventListener("submit", (Event) => {

	let validSurName = surNameEl.value !== "";
	Event.preventDefault();
	if (!validSurName) {
		surNameEl.focus();
		document.getElementById("sn-error").innerHTML = "Sur name is required";
		return false;
	}
	let validGivenName = givenNameEl.value !== "";
	if (!validGivenName) {
		givenNameEl.focus();
		document.getElementById("gn-error").innerHTML = "Given Name required.";
		return false;
	}

	//validate phone
	let validPhone = phoneEl.value !== "" && /^\d+$/;
	if (!validPhone) {
		validPhone.focus();
		document.getElementById("phone-error").innerHTML = "This field is required.";
		return false;
	}

	//validate place of residence 
	let validPlace = resideEl.value !== "";
	if (!validPlace) {
		validPhone.focus();
		document.getElementById("residence").innerHTML = "This field is required.";
		return false;
	}

	//validate place of date of birth
	let validBirthDate = birthDateEl.value !== "";
	if (!validBirthDate) {
		birthDateEl.focus();
		document.getElementById("Birthdate").innerHTML = "This field is required.";
		return false;
	}
	//validate email 
	let validEmail = emailEl.value !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!validEmail) {
		emailEl.focus();
		document.getElementById("e-error").innerHTML = "This field is required.";
		return false;
	}
});
