document.addEventListener("DOMContentLoaded", function () {
  // Chevron click logic
  const allChevrons = document.querySelectorAll('.chevron-event');
  const allCareerItems = document.querySelectorAll('.career-item');
  
  // Remove all active classes and activate the first item by default
  allCareerItems.forEach(item => item.classList.remove('active'));
  if (allCareerItems.length) allCareerItems[0].classList.add('active');

  // Set first chevron as selected by default
  allChevrons.forEach((chev, idx) => {
    chev.classList.remove('selected');
    if (idx === 0) chev.classList.add('selected');
    
    // Click event for each chevron
    chev.addEventListener('click', function () {
      // Remove selected from all chevrons
      allChevrons.forEach(ce => ce.classList.remove('selected'));
      this.classList.add('selected');
      
      // Remove active from all career items
      allCareerItems.forEach(item => item.classList.remove('active'));
      
      // Add active to the corresponding career item by index
      if (allCareerItems[idx]) {
        allCareerItems[idx].classList.add('active');
      }
    });
    
    // Keyboard navigation support
    chev.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === " ") {
        e.preventDefault();
        chev.click();
      }
    });
  });

  // Tab switching logic
  function activateTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="' + tabId + '"]').classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      activateTab(btn.getAttribute('data-tab'));
    });
  });
});
