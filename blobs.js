let windowCounter = 0; 

const APPS = { 
  'fern': () =>    `
        <!DOCTYPE html>    <html lang="en">    <head>    <meta charset="UTF-8">    <title>   FERN</title>    <style>    body { font-family: Arial, sans-serif; text-align: center; } button { font-size: 16px; cursor: pointer; margin-bottom: 20px; } #embedContainer { position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border: 1px solid #ccc; display: none; overflow: hidden; } iframe { width: 100%; height: 100%; border: none; overflow: hidden; } </style>    </head>    <body>    <button id="blankButton">   click to open prοxy</button>   <p id="status">  </p>   <div id="embedContainer">  </div>   <script>   document.getElementById('blankButton').addEventListener('click', () =>   { const statusEl = document.getElementById('status'); const containerEl = document.getElementById('embedContainer'); try { containerEl.innerHTML = ''; const iframe = document.createElement('iframe'); iframe.src = 'https://d1w7oj52hl4x53.cloudfront.net/'; iframe.title = 'Embedded Content'; containerEl.appendChild(iframe); containerEl.style.display = 'block'; } catch (error) { console.error(error); statusEl.textContent = 'Error: Could not embed the content.'; } }); <\/script>   </body>   </html>  `, 

  'appstore': () =>   `
    <!DOCTYPE html>  
    <html>  
    <body style="background: rgba(24, 17, 40, 0.5);">  
    <b>   
    <p style="color: #fff; font-family: Arial, sans-serif;">  REMEMBER TO FIX THIS!</p>  
    </b>  
    </body>  
    </html>   `,

  'ugs': () =>   
       ` <!DOCTYPE html>  
  <html>  
  <head>  
      <title>  UGS Files</title>  
      <style>  
          body {
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #2e3244 0%, #36224b 100%);
              min-height: 100vh;
              margin: 0;
              padding: 0;
              display: flex;
          }
  
          .sidebar {
              position: fixed;
              left: 0;
              top: 0;
              width: 80px;
              height: 100vh;
              background: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(10px);
              padding: 20px 10px;
              display: flex;
              flex-direction: column;
              gap: 8px;
              overflow-y: auto;
              box-shadow: 2px 0 10px rgba(0,0,0,0.3);
              z-index: 1000;
          }
  
          .sidebar::-webkit-scrollbar {
              width: 6px;
          }
  
          .sidebar::-webkit-scrollbar-track {
              background: rgba(255,255,255,0.1);
          }
  
          .sidebar::-webkit-scrollbar-thumb {
              background: rgba(255,255,255,0.3);
              border-radius: 3px;
          }
  
          .sidebar-btn {
              background: rgb(89, 134, 218);
              border: none;
              padding: 12px;
              font-size: 18px;
              font-weight: 700;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.2s ease;
              color: white;
              text-align: center;
              min-height: 45px;
          }
  
          .sidebar-btn:hover {
              background: #79aadb;
              transform: scale(1.05);
          }
  
          .sidebar-btn.empty {
              opacity: 0.4;
              cursor: default;
          }
  
          .sidebar-btn.empty:hover {
              transform: none;
              background: rgb(89, 134, 218);
          }
  
          .main-content {
              margin-left: 100px;
              flex: 1;
              padding: 20px;
          }
  
          h1 {
              color: white;
              text-align: center;
              margin-bottom: 30px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
  
          .letter-section {
              margin-bottom: 40px;
              padding: 0 20px;
              max-width: 900px;
              margin-left: auto;
              margin-right: auto;
              min-height: 100px;
          }
  
          .letter-section.empty {
              opacity: 0.5;
          }
  
          .letter-header {
              color: white;
              font-size: 32px;
              font-weight: bold;
              margin-bottom: 15px;
              padding-bottom: 10px;
              border-bottom: 3px solid rgba(255,255,255,0.3);
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
  
          .buttons-container {
              display: flex;
              flex-direction: column;
              gap: 10px;
              align-items: center;
          }
  
          .empty-message {
              color: rgba(255,255,255,0.6);
              font-style: italic;
              text-align: center;
              padding: 20px;
          }
  
          input[type="button"] {
              background: rgb(89, 134, 218);
              border: none;
              padding: 15px 30px;
              font-size: 16px;
              font-weight: 500;
              border-radius: 8px;
              cursor: pointer;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
              width: 100%;
              max-width: 600px;
              color: white;
              text-align: left;
          }
  
          input[type="button"]:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 12px rgba(0,0,0,0.2);
              background: #79aadb;
          }
  
          input[type="button"]:active {
              transform: translateY(0);
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
  
          @media (max-width: 768px) {
              .sidebar {
                  width: 60px;
                  padding: 15px 5px;
              }
              .sidebar-btn {
                  padding: 8px;
                  font-size: 16px;
              }
              .main-content {
                  margin-left: 70px;
              }
          }
      </style>  
  </head>  
  <body>  
      <div class="sidebar" id="sidebar">  
      </div>  
  
      <div class="main-content">  
          <h1>  UGS Files</h1>  
      <h2 style="color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;">  
      Files from 
      <a href="https://docs.google.com/document/d/1_FmH3BlSBQI7FGgAQL59-ZPe8eCxs35wel6JUyVaG8Q/" 
          target="_blank" 
          style="display: inline; color: #79aadb; text-decoration: none; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">  
          Ultimate Game Stash Google Doc
      </a>  
      <h2 style="color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;">  
          Alternative:
          <a href="https://docs.google.com/document/d/1DhIB1oGH8jckGgtKDrB7ReGzRMjSZERbSVml1gJfxWA/edit?usp=sharing" 
              target="_blank" 
              style="display: inline; color: #79aadb; text-decoration: none; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">  
              UGS alternative
          </a>  
      </h2>  
      <h2 style="color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;">  
      Discord Server:
      <a href="https://discord.gg/rmVsAqkpkA" 
          target="_blank" 
          style="display: inline; color: #79aadb; text-decoration: none; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">  
          https://discord.gg/rmVsAqkpkA
      </a>  
      <h2 style="color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;">  
          <input type="text" placeholder="Search..." id="searchInput" style="padding: 13px; width: 100%; max-width: 420px; border-radius: 8px; border: none; box-shadow: 0 2px 4px rgba(7, 105, 218, 0.1);">  
          <script src="https://cdn.jsdelivr.net/gh/mcgee1717/994894838923761723@main/searchbut.js">  </script>  
      <button id="lolbutton" onclick="const script = document.createElement('script');script.src = 'https://cdn.jsdelivr.net/gh/mcgee1717/994894838923761723@latest/games.js';document.body.appendChild(script);">  Click to load if it isnt loading</button>  
      </h2>  
  
          
          <div id="sections-container">   
          </div>  
      </div>  
      <script src="https://cdn.jsdelivr.net/gh/mcgee1717/994894838923761723@
  49119bc/games.js">  </script>  
     </body>  
     </html> `, 

   'cinera': () =>   `
   <iframe 
  src="https://cinera.marginaltax.com" 
  title="Classes and homework"
  width="100%" 
  height="100%" 
  style="border: none;"
  loading="lazy">
</iframe>

`,
'animekai': () =>   `
<iframe 
src="https://animekai.com.ro" 
title="Classes and homework"
width="100%" 
height="100%"
loading="lazy"
style="border:none;">
</iframe>
`,

'playlistsound': () =>   `
<iframe 
src="https://playlistsound.com" 
title="Classes and homework google classroom math algebra helpful study"
width="100%" 
height="100%"
style="border:none;">
</iframe>
`,

'gust': () =>   `
 <iframe src="https://cdn.jsdelivr.net/gh/nautilus-os/GUST@latest/svg/site.svg" title="Classes and homework google classroom math algebra helpful study" width="100%" height="100%" style="border:none;"> </iframe> 
`,
};

// Added `imgUrl` parameter to the function
function createAppWindow(containerId, appId, title, imgUrl) { 
  const container = document.getElementById(containerId); 
  if (!container) { 
    console.error('Container not found:', containerId); 
    return; 
  } 

  const htmlGenerator = APPS[appId]; 
  if (!htmlGenerator) { 
    console.error('Unknown app id:', appId); 
    return; 
  } 

  const htmlContent = htmlGenerator(); 
  const blob = new Blob([htmlContent], { type: 'text/html' }); 
  const blobUrl = URL.createObjectURL(blob); 

  const wrapper = document.createElement('div'); 
  wrapper.className = 'window'; 
  wrapper.id = 'window-' + (++windowCounter); 
  wrapper.style.left = (50 + (windowCounter - 1) * 30) + 'px'; 
  wrapper.style.top = (100 + (windowCounter - 1) * 30) + 'px'; 

  const handle = document.createElement('div'); 
  handle.className = 'window-header'; 
  handle.style.display = 'flex';
  handle.style.alignItems = 'center';
  handle.style.paddingLeft = '8px'; 
  // --- Added Image element handling ---
  if (imgUrl) {
    const icon = document.createElement('img');
    icon.src = imgUrl;
    icon.style.width = '16px';
    icon.style.height = '16px';
    icon.style.flexShrink = '0px'
    icon.style.marginRight = '4px';
    icon.style.marginTop = '2px';
    icon.style.display = 'block';
    icon.style.verticalAlign = 'middle';
    handle.appendChild(icon);
  }

  const titleSpan = document.createElement('span');
  titleSpan.textContent = title;
  titleSpan.style.flexGrow = '1'; // Pushes title text and subsequent buttons out nicely
  handle.appendChild(titleSpan);

// ------------------------------------
const closeBtn = document.createElement('button');
closeBtn.className = 'window-close';
closeBtn.title = 'Close';
closeBtn.style.width = '20px';
closeBtn.style.height = '20px';
closeBtn.style.backgroundColor = 'rgba(0, 140, 255, 0.75)';
closeBtn.style.marginTop = '7px';
closeBtn.style.marginRight = '7px';
closeBtn.style.borderRadius = '20px';
closeBtn.style.border = '2px solid rgba(0, 0, 52, 0.25)';
closeBtn.addEventListener('click', (e) =>    {
e.stopPropagation();
wrapper.remove();
windowCounter -= 1;
});
handle.appendChild(closeBtn);
const fullscrnBtn = document.createElement('button');
fullscrnBtn.className = 'window-fullscreen';
fullscrnBtn.title = 'Fullscreen';
fullscrnBtn.style.width = '20px';
fullscrnBtn.style.height = '20px';
fullscrnBtn.style.backgroundColor = 'rgba(23, 235, 243, 0.75)';
fullscrnBtn.style.borderRadius = '20px';
fullscrnBtn.style.border = '2px solid rgba(24, 129, 133, 0.75)';
fullscrnBtn.style.marginTop = '7px';
fullscrnBtn.addEventListener('click', (e) =>    {
e.stopPropagation();
if (document.fullscreenElement === wrapper) {
document.exitFullscreen();
} else {
    wrapper.requestFullscreen().catch(err => console.error(err));
}});


handle.appendChild(fullscrnBtn);
wrapper.appendChild(handle);
const iframe = document.createElement('iframe');
iframe.src = blobUrl;
iframe.setAttribute('allow', 'fullscreen');
wrapper.appendChild(iframe);
container.appendChild(wrapper);
adddrag(wrapper, handle);
iframe.onload = () =>    {
if (appId === 'appstore') {
try {
const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
const appContainer = iframeDoc.querySelector('.app-img');
if (appContainer) {
appContainer.addEventListener('click', (e) =>    {
if (e.target.tagName === 'IMG') {
const targetAppId = e.target.id.toLowerCase();
if (targetAppId && targetAppId !== 'appstore') {
// If App Store triggers an app creation, you might want to pass its src as the icon too
createAppWindow(containerId, targetAppId, e.target.id, e.target.src);
}
}
});
}
} catch (err) {
console.error("Layout context binding failed:", err);
}
}
};
}
// Initializer configuration array (added a 5th column index for image url strings)
[
['APPSTORE', 'container', 'appstore', 'App Store', 'images/App-Logo/APPSTORE.png'],
['FERN', 'container', 'fern', 'prοxy 1 | Fern', 'images/App-Logo/FERN.png'],
['UGS', 'container', 'ugs', 'Games | Ultimate Gαme Stash', 'images/App-Logo/UGS.png'],
['CINERA', 'container', 'cinera', 'Media | Cinera', 'images/App-Logo/CINERA.png'],
['ANIMEKAI', 'container', 'animekai', 'Anime | AnimeKai', 'images/App-Logo/ANIMEKAI.png'],
['PLAYLISTSOUND', 'container', 'playlistsound', 'Music', 'images/App-Logo/PLAYLISTSOUND.png'],
['GUST', 'container', 'gust', 'prοxy 2 | Gust', 'images/App-Logo/GUST.png'],
].forEach(([elId, containerId, appId, title, imgUrl]) =>    {
const btn = document.getElementById(elId);
if (!btn) {
console.warn('Launcher button not found:', elId);
return;
}
// Added imgUrl to the app event listener call
btn.addEventListener('click', () =>    createAppWindow(containerId, appId, title, imgUrl));
});
function adddrag(dragElement, handle) {
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
handle.addEventListener('mousedown', (e) =>    {
if (e.target.closest('.window-close') || e.target.closest('.window-fullscreen')) return;
isDragging = true;
dragElement.style.zIndex = 10000 + (++windowCounter);
offsetX = e.clientX - dragElement.offsetLeft;
offsetY = e.clientY - dragElement.offsetTop;
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
e.preventDefault();
});
function mouseMoveHandler(e) {
if (!isDragging) return;
dragElement.style.left = (e.clientX - offsetX) + 'px';
dragElement.style.top = (e.clientY - offsetY) + 'px';
}
function mouseUpHandler() {
isDragging = false;
document.removeEventListener('mousemove', mouseMoveHandler);
document.removeEventListener('mouseup', mouseUpHandler);
}
}