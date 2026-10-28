function setFavicon(url) {
    // Find the existing favicon link element
    let link = document.querySelector("link[rel*='icon']");
    
    // If it doesn't exist, create a new one
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    // Update the image source URL
    link.href = url;
  }
  


function changeFavicon() {

    const imageUrl = document.getElementById('favicon-input').value;
    

    const titleText = document.getElementById('title-input').value;


    const favicon = document.getElementById('dynamic-favicon');


    if (imageUrl.trim() !== "") {
        favicon.href = imageUrl;
        alert("New cloak added");
    } else {
        alert("Please enter a valid image URL");
        return; 
    }


    if (titleText.trim() !== "") {
        document.title = titleText;
    } else {
        alert("Please enter a valid page title");
    }
}


const container = document.getElementById('fullscreen-container');
const btn = document.getElementById('fullscreen-btn');


document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    btn.textContent = 'Exit Fullscreen';
  } else {
    btn.textContent = 'Go Fullscreen';
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('tabImage');

    // Check if the image actually exists to prevent crashes
    if (!img) {
        console.error("Could not find an element with id='tabImage'");
        return;
    }

    // Listen for visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            img.style.display = 'block';
            setFavicon('images/GC-cloak2.png')
            document.title = 'Google Classroom - To-Do';
        }
    });
});

function reopenweb(img) {
    img.style.display = 'none';
    setFavicon('Sea-angel-fav.png')
    document.title = 'Sea Angel OS';
}