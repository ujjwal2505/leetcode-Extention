const func = () => {
  console.log("running");

  var div = document.createElement("div");
  div.setAttribute("id", "run-testcase");
  div.style.cursor = "pointer";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.marginRight = "12px";
  div.style.border = "1px solid #b0bec5";
  div.style.borderRadius = "3px";
  div.style.padding = "5px";
  div.innerHTML = "Run Example TestCase";

  document.querySelector(".action__38Xc >div").prepend(div);

  document
    .querySelector("#run-testcase")
    .addEventListener("click", function () {
      document
        .querySelector(
          ".action__38Xc > div > span > button > span:nth-child(3) > a"
        )
        .click();

      document.querySelector(".dropdown-item__xPI6").click();
      //   document
      //     .querySelector(".ant-dropdown")
      //     .classList.add("ant-dropdown-hidden");
    });
};

setTimeout(func, 5000);
