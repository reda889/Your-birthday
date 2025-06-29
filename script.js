// نص التهنئة
const message = "كل عام وأنت بألف خير! أتمنى لك يوم ميلاد سعيد مليء بالفرح والضحك والحب. 🎉🎂🎈";
let currentChar = 0;
let typingInterval;
const audio = document.getElementById('birthday-audio');

// الانتقال للصفحة الثانية
function nextPage() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
    startTyping();
}

// تأثير الكتابة
function startTyping() {
    const messageElement = document.getElementById('typed-message');
    messageElement.innerHTML = '';
    currentChar = 0;
    
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
        if (currentChar < message.length) {
            messageElement.innerHTML += message[currentChar];
            currentChar++;
        } else {
            clearInterval(typingInterval);
        }
    }, 70);
}

// تشغيل/إيقاف الموسيقى
function toggleMusic() {
    const btn = document.querySelector('.music-btn');
    
    if (audio.paused) {
        audio.play();
        btn.textContent = 'إيقاف الموسيقى';
    } else {
        audio.pause();
        btn.textContent = 'تشغيل الموسيقى';
    }
}

// تشغيل الموسيقى تلقائياً عند الوصول للصفحة الثانية (اختياري)
document.getElementById('page2').addEventListener('transitionend', function() {
    if (this.classList.contains('active')) {
        // يمكنك إلغاء التعليق عن السطر التالي لتشغيل الموسيقى تلقائياً
        // toggleMusic();
    }
});
