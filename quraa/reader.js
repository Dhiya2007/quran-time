// reader.js

let audio = new Audio();
let isPlaying = false;
let currentIndex = 0;
const suraList = [
    // أضف هنا روابط السور المتاحة بالترتيب
    'https://server10.mp3quran.net/minsh/001.mp3',
    '2.m4a',
    '3.m4a',
    '4.m4a',
    '5.m4a',
    // ... أضف باقي روابط السور
    'sura114.mp3'
];


// وظيفة لتغيير إلى السورة السابقة
function prevTrack() {
    if (currentIndex > 0) {
        currentIndex--;
        playAudio(suraList[currentIndex], `سورة ${currentIndex + 1}`);
    }
}

// وظيفة لتغيير إلى السورة التالية
function nextTrack() {
    if (currentIndex < suraList.length - 1) {
        currentIndex++;
        playAudio(suraList[currentIndex], `سورة ${currentIndex + 1}`);
    }
}

// وظيفة لتبديل القائمة المنسدلة
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// وظيفة لتشغيل الصوت
function playAudio(audioFile, suraName) {
    if (isPlaying) {
        audio.pause();
    }

    audio.src = audioFile;
    document.getElementById('currentSura').textContent = suraName;
    document.getElementById('currentSuraFullScreen').textContent = suraName;
    audio.play();
    isPlaying = true;

    document.getElementById('musicPlayer').classList.remove('hidden');
    document.getElementById('fullScreenPlayer').classList.add('hidden');
    document.getElementById('playPauseButton').textContent = 'إيقاف';
    document.getElementById('playPauseButtonFullScreen').textContent = 'إيقاف';
}

// وظيفة لتبديل التشغيل والإيقاف
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('playPauseButton').textContent = 'تشغيل';
    } else {
        audio.play();
        document.getElementById('playPauseButton').textContent = 'إيقاف';
    }
    isPlaying = !isPlaying;
}

// وظيفة لتبديل التشغيل والإيقاف في وضع ملء الشاشة
function togglePlayFullScreen() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('playPauseButtonFullScreen').textContent = 'تشغيل';
    } else {
        audio.play();
        document.getElementById('playPauseButtonFullScreen').textContent = 'إيقاف';
    }
    isPlaying = !isPlaying;
}

// وظيفة لتبديل وضع ملء الشاشة للمشغل الكامل
function showFullScreenPlayer() {
    document.getElementById('fullScreenPlayer').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.add('hidden');
}

// وظيفة لإغلاق وضع ملء الشاشة
function closeFullScreenPlayer() {
    document.getElementById('fullScreenPlayer').classList.add('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
}


// تحديث شريط التقدم مع الوقت الحالي
audio.addEventListener('timeupdate', () => {
    const progressBar = document.getElementById('seekBar');
    if (progressBar) {
        progressBar.value = audio.currentTime;
        progressBar.max = audio.duration;
    }
    const progressBarFullScreen = document.getElementById('seekBarFullScreen');
    if (progressBarFullScreen) {
        progressBarFullScreen.value = audio.currentTime;
        progressBarFullScreen.max = audio.duration;
    }
});

// تغيير وقت التشغيل عند تحريك شريط التقدم
document.getElementById('seekBar').addEventListener('input', (event) => {
    audio.currentTime = event.target.value;
});

// تغيير وقت التشغيل عند تحريك شريط التقدم في وضع ملء الشاشة
document.getElementById('seekBarFullScreen').addEventListener('input', (event) => {
    audio.currentTime = event.target.value;
});

// ضبط مستوى الصوت
document.getElementById('volumeControl').addEventListener('input', (event) => {
    audio.volume = event.target.value;
});

// ضبط مستوى الصوت في وضع ملء الشاشة
document.getElementById('volumeControlFullScreen').addEventListener('input', (event) => {
    audio.volume = event.target.value;
});
// وظيفة لإغلاق Music Player
function closeMusicPlayer() {
    document.getElementById('musicPlayer').classList.add('hidden');
}
