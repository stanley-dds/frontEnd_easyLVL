
document.addEventListener("DOMContentLoaded", function() 
{
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    pages[0].style.display = 'block';
    setButtonStyle(1, true);
});

function onPageChange(pageNumber) 
{
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const nextPage = document.getElementById('page' + pageNumber);
    nextPage.style.display = 'block';

    const buttons = document.querySelectorAll('.navigation button');
    buttons.forEach(button => setButtonStyle(button.id.substring(7), false));

    setButtonStyle(pageNumber, true);
}

function setButtonStyle(buttonNumber, isActive = false) 
{
    const button = document.getElementById('btnPage' + buttonNumber);
    button.style.backgroundColor = isActive ? '#FFD700' : '#007BFF';
    button.style.color = isActive ? '#000' : '#fff';
}

function openImage() 
{
	var imgg = document.getElementById("imageID");
	imgg.style.display = "block";
}