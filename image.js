const imageSources = ['bck3.jpg','bus1.jpg','a1.jpg','a3.jpg','a2.jpg','bus2.jpg','bus3.jpg','s1.jpg','s2.jpeg','s3.jpeg','s4.jpg','b01.jpg','b02.jpg','b04.jpg','b03.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);