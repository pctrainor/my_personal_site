const educationSection = document.getElementById('education');
const experienceSection = document.getElementById('experience');

function handleSectionClick(section) {
  const content = section.querySelector('.education-content, .experience-content');

  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  content.style.fontSize = content.style.fontSize === '1.05em' ? 'initial' : '1.05em'; // Adjust font size as needed
}

educationSection.addEventListener('click', () => handleSectionClick(educationSection));
experienceSection.addEventListener('click', () => handleSectionClick(experienceSection));
