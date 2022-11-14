const form = document.querySelector("#formQuestion");
const question = document.querySelector("#question");
const container = document.querySelector("#container");
const content = document.querySelector("#content");

const getDecision = async () => {
  return await fetch("https://yesno.wtf/api").then((res) => res.json());
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log(question.value);

  const questionValue = question.value.trim();
  if (questionValue.length === 0) return;
  if (questionValue.charAt(questionValue.length - 1) != "?") return;

  const decision = await getDecision();
  container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${decision.image})`;

  let html = `<h1>${question.value}</h1>`;
  html += `<h1 class="decision">${decision.answer}</h1>`;
  content.innerHTML = html;
  question.value = "";
});
