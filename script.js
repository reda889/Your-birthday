// نص التهنئة
const message = "كل عام وانتي بخير يا وردة حياتي وقمر ليالي، انت هي سبب وهدف لأستمراري في هذه الحياة، قد اكون مزعج في بعض الأحيان، لذا اعتذر اشد الأعتذار، وارجو ان تسامحيني أن اسئت لك مرة يا ريم ودياني، احبك، فأنا لك من العاشقين، انا احبك، قد تتسائلين ما هو المميز فيك لكي يحبك شخص، لكني اراك ملاكا كاملا، من عينيك الساحرتين الى شفاهك فلونها كالورود، الى خديك الرقيقين، الى قلبك الطيب، الى روحك الساحرة، الى والى والى، فلن ننتهي، فلا حدود لجنالك، اعهد لك بحبي الأبدي، فهل تسمحين لي ان اكون لك حبيب؟";
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
