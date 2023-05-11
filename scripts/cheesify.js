function cheesify() {
  document.querySelectorAll('img').forEach((img) => {
    img.srcset = `https://source.unsplash.com/collection/8884129/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.src = img.srcset;
    console.log('cheesify function running...')
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // actions based on the request (which corresponds to the object we sent in our message)
  if (request.action === 'cheesify')
  cheesify();
});
