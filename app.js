function getDataInForm() {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const father = document.getElementById("father").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const date_of_birth = document.getElementById("date_of_birth").value;
  const mobile = document.getElementById("mobile").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const female = document.getElementById("female").value;
  const male = document.getElementById("male").value;
  const other = document.getElementById("other").value;
  const dropDown = document.getElementById("drop_down").value;

  const userDetails = {
    first_name,
    last_name,
    father,
    email,
    password,
    date_of_birth,
    mobile,
    height,
    weight,
    female,
    male,
    other,
    dropDown,
  };
  console.log(userDetails);
}
