const educationSection = document.getElementById('education');
const experienceSection = document.getElementById('experience');
const pdfSection = document.getElementById('pdf-section');

function handleSectionClick(section) {
  const content = section.querySelector('.education-content, .experience-content, .pdf-content');
  
  if (content) {
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    content.style.fontSize = content.style.fontSize === '1.05em' ? 'initial' : '1.05em'; // Adjust font size as needed
  }
}

if (educationSection) {
  educationSection.addEventListener('click', () => handleSectionClick(educationSection));
}
if (experienceSection) {
  experienceSection.addEventListener('click', () => handleSectionClick(experienceSection));
}
if (pdfSection) {
  pdfSection.addEventListener('click', () => handleSectionClick(pdfSection));
}