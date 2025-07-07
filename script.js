// نص التهنئة
const message = "كُلُّ عَامٍ وَأَنْتِ بِخَيْرٍ يَا نُورَ ظَلَامِي،  
كُلُّ عَامٍ وَأَنْتِ بِأَسْعَدِ بَسْمَةٍ يَا بَسْمَةَ حَيَاتِي،  
كُلُّ عَامٍ وَأَنْتِ أَجْمَلُ مَلِكَةٍ يَا مَلِيكَةَ قَلْبِي،  
كُلُّ عَامٍ وَأَنْتِ رُوحِي، وَقَلْبِي، وَجَسَدِي، وَدُنْيَايَ، يَا رِيمَ عُمْرِي.  

أَنَا رِضَا، أَعْهَدُ لَكِ فِي هَذَا يَوْمِكِ الْمُمَيَّزِ بِحُبِّيَ الأَبَدِيِّ،  
أَعْهَدُ لَكِ بِحُبٍّ يَدُومُ، بِحُبٍّ... يَدُومُ.  
أُحِبُّكِ، وَبَسْمَتَكِ، وَقَلْبَكِ، وَرُوحَكِ، وَعَيْنَيْكِ، وَشَفَتَيْكِ، وَجَسَدَكِ،  
أُحِبُّكِ، أُحِبُّكِ، أُحِبُّكِ.  

فَهَلْ تَقْبَلِينَ حُبِّي؟  
هَلْ تَقْبَلِينَ أَنْ أَكُونَ لَكِ حَبِيبًا؟  
هَلْ تَقْبَلِينَ أَنْ نَقْضِيَ مَا تَبَقَّى مِنْ حَيَاتِنَا مَعًا؟  
جَنْبًا إِلَى جَنْبٍ؟ نَسْعَدُ مَعًا؟ نَضْحَكُ مَعًا؟  
نَأْكُلُ مَعًا؟ نَشْرَبُ مَعًا؟ نَحْزَنُ مَعًا؟ نَدْعَمُ بَعْضَنَا الْآخَرَ؟";
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
