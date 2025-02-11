const calculate = () => {
  if (manName.value === "" || womanName.value === "") {
    document.getElementById("alert").style.display = "block";
  } else {
    document.getElementById("alert").style.display = "none";
    // document.getElementById("manName").value = "";
    // document.getElementById("womanName").value = "";
    let answer = Math.round(Math.random() * 100);
    document.getElementById("show").innerHTML = `You're ${answer}% Compatible`;
  }
};
