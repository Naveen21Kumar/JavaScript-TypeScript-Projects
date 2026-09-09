// ************ Method 1: using selectors inside the element **********

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// ************ Method 1: using selectors inside the element **********

// Method 2: traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// const questions2 = document.querySelectorAll(".question");

// btns.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     questions2.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
