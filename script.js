const allHeaders = document.querySelectorAll('.all-header');
const homePages = document.querySelectorAll('.home-page');

allHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    // Hide all home pages
    homePages.forEach((page) => {
      page.style.display = 'none';
    });

    // Show the corresponding home page
    homePages[index].style.display = 'flex';

    // Remove the 'active-header' class from all headers
    allHeaders.forEach((header) => {
      header.classList.remove('active-header');
    });

    // Add the 'active-header' class to the clicked header
    header.classList.add('active-header');
  });
});