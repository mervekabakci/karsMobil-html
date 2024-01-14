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

          var otherButton = otherAudio.closest('.audioPlayWrapper').querySelector('.audioPlayButton');
            otherButton.classList.remove('active');
      }
  });

   button.classList.toggle('active');

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
// Event listener for audio end
document.addEventListener('DOMContentLoaded', function () {
  var audioElements = document.querySelectorAll('.audio-element');
  audioElements.forEach(function (audio) {
      audio.addEventListener('ended', function () {
          // Remove "active" class from the corresponding card's play button
          var button = audio.closest('.audioPlayWrapper').querySelector('.audioPlayButton');
          button.classList.remove('active');
      });
  });
});
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


/*Tab content */
$(".tabContainer .tabButtons .tabNavItem").click(function(){
  var tIndex = $(this).index();
  $(this).siblings().removeClass("active");
  $(this).addClass("active")
  console.log(tIndex) 

  $(this).parent().siblings().find(".tabContent").removeClass("active");
  $(this).parent().siblings().find(".tabContent").eq(tIndex).addClass("active");


  if($(".demirYoluTab").hasClass("active")){
    $(".footer").addClass("d-none");
      $("footer .directionsButton").css("display","none");
      $("footer .ticketButton").css("display","flex");
  }
  else if($(".karayoluTab").hasClass("active")){
    $(".footer").addClass("d-none");
      $("footer .ticketButton").css("display","none");
      $("footer .directionsButton").css("display","flex");
  }
  else{
      $(".footer").removeClass("d-none");
      $("footer .ticketButton").css("display","none");
      $("footer .directionsButton").css("display","none");
  }
})



if (typeof Fancybox !== 'undefined') {
  Fancybox.bind('[data-fancybox]', {
      compact: false,
      Carousel: {},
      Toolbar: false,
      Thumbs: false
  });
}


// function toggleDropdown(button, dropdownId) {
//   var dropdown = document.getElementById(dropdownId);
//   var dropdownMenu = dropdown.querySelector('.dropdown-menu');
//   dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
// }
function toggleDropdown(button) {
  var dropdownMenu = button.nextElementSibling;
  var allDropdowns = document.querySelectorAll('.dropdown-menu');

  // Close all dropdowns
  allDropdowns.forEach(function (dropdown) {
      if (dropdown !== dropdownMenu && dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
      }
  });

  // Toggle the selected dropdown
  dropdownMenu.classList.toggle("show");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  var clickedElement = event.target;

  // Check if the clicked element is a dropdown button or inside a dropdown
  if (!clickedElement.matches('.dropdownBtn') && !clickedElement.closest('.dropdown')) {
      var dropdowns = document.querySelectorAll(".dropdown-menu");
      dropdowns.forEach(function (openDropdown) {
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      });
  }
}
