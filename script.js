// نص التهنئة
const message = "كل عام وانتي بخير يا نور ظلامي، كل عام وانتي بأسعد بسمة يا بسمت حياتي، كل عام وانتي اجمل ملكة يا مليكة قلبي، كل عام وانتي روحي، وقلبي، وجسدي، ودنياي، يا ريم عمري. انا رضا، اعهد لك وفي هذا يومك المميز بحبي الأبدي، اعهد لك بحب يدوم، بحب... يدوم، احبك، وبسمتك، وقلبك، وروحك، وعيونك، وشفتيك، وجسمك، احبك، احبك، احبك، فهل تقبلين حبي؟ هل تقبلين أن أكون لك حبيب؟ هل تقبلين أن نقضي ما تبقى من حياتنا معا؟ جنب الى جنب؟ نسعد معا؟ نضحك معا؟ نأكل معا؟ نشرب معا؟ نحزن معا؟ ندعم بعضنا الآخر";
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
        btn.textContent = 'play the song';
    } else {
        audio.pause();
        btn.textContent = 'stop the song';
    }
}

// تشغيل الموسيقى تلقائياً عند الوصول للصفحة الثانية (اختياري)
document.getElementById('page2').addEventListener('transitionend', function() {
    if (this.classList.contains('active')) {
        // يمكنك إلغاء التعليق عن السطر التالي لتشغيل الموسيقى تلقائياً
        // toggleMusic();
    }
});
