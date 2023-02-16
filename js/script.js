let video = document.querySelector('#cameraVideo');
let cameraErrorMessage = document.querySelector('#cameraErrorMessage');
let clickPhotoButton = document.querySelector('#clickPhotoButton');

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.play();
    cameraErrorMessage.classList.add('hidden');
    clickPhotoButton.classList.remove('hidden');
})
.catch(() => {
    cameraErrorMessage.classList.remove('hidden')
    clickPhotoButton.classList.add('hidden')
});

clickPhotoButton.addEventListener('click', () => {
    let canvas = document.querySelector('#canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    let context = canvas.getContext('2d');
    let photoDisplay = document.querySelector('#photoDisplay');
    let downloadPhotoContainer = document.querySelector('#downloadPhotoContainer');
    let downloadPhotoButton = document.querySelector('#downloadPhotoButton');
    
    context.drawImage(video, 0, 0);
    photoDisplay.classList.remove('hidden');
    downloadPhotoContainer.classList.remove('hidden');
    downloadPhotoButton.href = canvas.toDataURL('image/png');
});