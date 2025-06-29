// فتح وإغلاق البطاقة
function openCard() {
    const card = document.getElementById('birthdayCard');
    card.classList.add('opened');
    
    // إنشاء البالونات بعد فتح البطاقة
    createBalloons();
    
    // عرض رسالة تهنئة مكتوبة تدريجياً
    typeWriter();
}

// إنشاء بالونات متحركة
function createBalloons() {
    const balloonsContainer = document.querySelector('.balloons');
    const colors = ['#ff4081', '#ffeb3b', '#4caf50', '#2196f3', '#9c27b0'];
    
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[i % colors.length];
        balloon.style.animationDelay = `${i * 0.5}s`;
        balloonsContainer.appendChild(balloon);
    }
}

// تأثير الكتابة على الرسالة
function typeWriter() {
    const message = "أطيب التمنيات بمناسبة عيد ميلادك! أتمنى لك يومًا سعيدًا مليئًا بالفرح والضحك والحب. 🌸🎉";
    const element = document.getElementById('birthdayMessage');
    element.innerHTML = '';
    let i = 0;
    
    const typing = setInterval(() => {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// تشغيل الموسيقى
function playMusic() {
    const audio = document.getElementById('birthdayAudio');
    const btn = document.querySelector('.music-btn');
    
    if (audio.paused) {
        audio.play();
        btn.textContent = 'إيقاف الموسيقى';
    } else {
        audio.pause();
        btn.textContent = 'تشغيل الموسيقى';
    }
}

// حفظ اسم المرسل عند تغييره
document.getElementById('senderName').addEventListener('input', function() {
    localStorage.setItem('senderName', this.value);
});

// استعادة اسم المرسل إذا كان محفوظاً
window.onload = function() {
    const savedName = localStorage.getItem('senderName');
    if (savedName) {
        document.getElementById('senderName').value = savedName;
    }
};
