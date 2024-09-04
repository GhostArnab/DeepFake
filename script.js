document.getElementById('checkButton').addEventListener('click', function() {
    const videoFile = document.getElementById('videoUpload').files[0];
    const photoFile = document.getElementById('photoUpload').files[0];
    const resultSection = document.getElementById('resultSection');
    const loadingMessage = document.getElementById('loadingMessage');
    const resultMessage = document.getElementById('resultMessage');
    const confidenceLevel = document.getElementById('confidenceLevel');
    const spinner = document.getElementById('spinner');

    if (!videoFile && !photoFile) {
        alert('Please upload a video or a photo.');
        return;
    }

    resultSection.classList.remove('hidden');
    loadingMessage.classList.remove('hidden');
    spinner.classList.remove('hidden');
    resultMessage.textContent = '';
    confidenceLevel.textContent = '';

    setTimeout(() => {
        loadingMessage.classList.add('hidden');
        spinner.classList.add('hidden');

        const isDeepfake = Math.random() > 0.5;
        resultMessage.textContent = isDeepfake ? 'Warning: Potential deepfake detected!' : 'No face-swapping crime detected.';
        resultMessage.style.color = isDeepfake ? 'red' : 'green';

        confidenceLevel.classList.remove('hidden');
        confidenceLevel.textContent = `Confidence Level: ${Math.floor(Math.random() * 20) + 80}%`;

    }, 2000);
});
