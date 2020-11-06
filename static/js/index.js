const unfinished_task_links = document.querySelectorAll(".unfinished_task a");
const className = "animate";

unfinished_task_links.forEach((task) => {
  task.addEventListener("mouseover", (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("hover");
  });
  task.addEventListener("mouseout", (e) => {
    const parent = e.target.parentNode;
    parent.classList.remove("hover");
  });
});

unfinished_task_links.forEach(function (task) {
  task.addEventListener("click", (e) => {
    e.preventDefault();
    checkmark = e.target.parentNode.querySelector(".checkmark");
    if (!checkmark.classList.contains(className)) {
      checkmark.classList.add(className);

      setTimeout(() => {
        checkmark.classList.remove(className);
        document.location.href = e.target.href;
      }, 900);
    }
  });
});
