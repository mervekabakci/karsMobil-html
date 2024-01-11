$(window).on('load', function () {
  if ($('.preloader').length) {
    $('.preloader').remove();
  }
});

//User Profile Menu button
$(".userButton").click(function(){
  // $("#kayitolCanvas").addClass("active");
  $("#profileCanvas").addClass("active");
  $(".overlay").fadeIn(300)
})

//Menu button
$(".menuButton").click(function(){
  $("#menuCanvas").addClass("active");
  $(".overlay").fadeIn(300)
})

//acık olan canvasların kapanması ıcın
$(".overlay").click(function(){
  $(".overlay").fadeOut();
  if($(".off-canvas").hasClass("active")){
    $(".off-canvas").removeClass("active")
  }
})
//Accordion menu
$('.accButton').click(function() {
  var content = $(this).next('.accContent');
  var isActive = $(this).hasClass("active");

  $(this).closest(".accMenu").find('.accButton').removeClass("active");

  $(this).toggleClass("active", !isActive);

  content.slideToggle(300);
  content.toggleClass("active");

  $('.accMenu .accContent').not(content).slideUp(300).removeClass("active");
});

$(".pageMenuButton").click(function(){
  $("#pageMenuPopup").fadeIn(300);
})
$(".customPopup .close-btn").click(function(){
  $(this).closest(".customPopup").fadeOut();
})


/**Kars turkulerınde play butonu ıcın baslangıc */
document.addEventListener('DOMContentLoaded', function () {
  // Sayfa yüklendiğinde her bir audioPlayWrapper elemanındaki ses dosyasının süresini al ve göster
  var audioWrappers = document.querySelectorAll('.audioPlayWrapper');
  audioWrappers.forEach(function (audioWrapper) {
      var currentAudio = audioWrapper.querySelector('.audio-element');
      var card = audioWrapper.closest('.card');
      var audioTimeElement = card.querySelector('.audioTime');

      if (currentAudio && audioTimeElement) {
          // Sesin süresini al ve formatla
          var duration = currentAudio.duration;
          var formattedDuration = formatTime(duration);

          // Bulunduğu card içindeki audioTime elemanına süreyi yaz
          audioTimeElement.textContent = formattedDuration;

          // Sesin süre geri sayımını başlat
          startCountdown(currentAudio, audioTimeElement);
      }
  });
});

function togglePlay(button) {
  var audioWrapper = button.closest('.audioPlayWrapper');

  // audioPlayWrapper bulunamazsa fonksiyonu sonlandır
  if (!audioWrapper) {
      console.error('audioPlayWrapper bulunamadı.');
      return;
  }

  var currentAudio = audioWrapper.querySelector('.audio-element');

  // audio bulunamazsa fonksiyonu sonlandır
  if (!currentAudio) {
      console.error('audio bulunamadı.');
      return;
  }

  // Diğer tüm sesleri duraklat
  var allAudioElements = document.querySelectorAll('.audioPlayWrapper .audio-element');
  allAudioElements.forEach(function (otherAudio) {
      if (otherAudio !== currentAudio) {
          otherAudio.pause();
          otherAudio.currentTime = 0; // Kaldığı yerden devam etmemesi için currentTime'i sıfırla
      }
  });

  if (currentAudio.paused) {
      currentAudio.play();
  } else {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Kaldığı yerden devam etmemesi için currentTime'i sıfırla
  }
}

function startCountdown(audio, timeElement) {
  setInterval(function () {
      // Kalan süreyi al ve formatla
      var remainingTime = audio.duration - audio.currentTime;
      var formattedRemainingTime = formatTime(remainingTime);

      // Bulunduğu card içindeki audioTime elemanına kalan süreyi yaz
      timeElement.textContent = formattedRemainingTime;

      // Eğer ses dosyası tamamen çalındıysa süreyi durdur
      if (audio.currentTime >= audio.duration) {
          audio.pause();
          audio.currentTime = 0; // Kaldığı yerden devam etmemesi için currentTime'i sıfırla
      }
  }, 1000);
}

// Süre formatlama fonksiyonu
function formatTime(timeInSeconds) {
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = Math.floor(timeInSeconds % 60);
  
  // Daha güzel bir görünüm için önünde 0 ekleyebilirsiniz
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
}
/**Kars turkulerınde play butonu ıcın bitiş */



/**Paylas butonu */
function toggleShareWrapper(button) {
  var shareButton = $(button);
  var shareWrapper = shareButton.next('.shareWrapper');

  if (shareWrapper.is(':visible')) {
      shareWrapper.removeClass("active").slideUp();
  } else {
      // Diğer shareWrapper'ları kapat
      $('.shareWrapper').not(shareWrapper).removeClass("active").slideUp();
      
      shareWrapper.addClass("active").slideDown();
  }
}


/**Paylas Butonu bitiş */





if (typeof Fancybox !== 'undefined') {
  Fancybox.bind('[data-fancybox]', {
      compact: false,
      Carousel: {},
      Toolbar: false,
      Thumbs: false
  });
}
