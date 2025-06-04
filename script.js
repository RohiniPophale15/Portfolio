const skills = [
  "Full Stack Developer",
  "Frontend Designer",
  "Backend Developer",
  "JavaScript Programmer"
];

const skillElement = document.getElementById("dynamic-skill");
const typingSpeed = 150; // ms per char
const delayAfterTyping = 2000; // time to keep the full skill visible

let skillIndex = 0;
let charIndex = 0;

function type() {
  const currentSkill = skills[skillIndex];
  if (charIndex < currentSkill.length) {
    skillElement.textContent += currentSkill.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    // After typing complete skill, wait delayAfterTyping, then switch to next skill
    setTimeout(() => {
      skillElement.textContent = "";  // instantly clear all text
      skillIndex = (skillIndex + 1) % skills.length;
      charIndex = 0;
      type();
    }, delayAfterTyping);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
