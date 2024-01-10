// Fonksiyonu tanımla
function checkValidity(inputElement, mask) {
    var inputValue = inputElement.val();
    var isValid = mask.test(inputValue);

    if (!isValid) {
        inputElement.addClass('error');
    } else {
        inputElement.removeClass('error');
    }
}

$('.emailMask').on('input', function () {
    checkValidity($(this), /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
});
// Telefon numarası maskı: 0 (000) 000-0000
$('.phoneMask').mask('0 (000) 000-0000').on('input', function () {
    var inputValue = $(this).val();

    // Başında 0 yoksa otomatik olarak ekle
    if (inputValue.length > 2 && inputValue.charAt(2) !== '0') {
        inputValue = '0 ' + inputValue.substring(2);
        $(this).val(inputValue);
    }

    // Doğrulama işlemi
    checkValidity($(this), /^0 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/);
});
$('.textMask').mask('A', {
    translation: {
        'A': {
            pattern: /[A-Za-zÇçĞğİıÖöŞşÜü ]/,
            recursive: true
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            // Bootstrap form validasyonu
            if (!form.classList.contains('was-validated')) {
                form.classList.add('was-validated');
            }

            const formData = new FormData(form);

            $.ajax({
                type: 'POST',
                url: 'action.php',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response === 'ok') {
                        // Eğer cevap 'ok' ise, Bootstrap modal'ı aç
                        // $("#successModal .responseText").text('Form başarıyla gönderildi. Sunucu cevabı: ' + response)
                        $('#successModal').modal('show');
                    } else {
                        // Diğer başarı durumlarını ele al veya bir uyarı göster
                        // $("#successModal .responseText").text('Form başarıyla gönderildi. Sunucu cevabı Diğer: ' + response)
                        $('#successModal').modal('show');
                    }
                },
                error: function () {
                    // Diğer başarı durumlarını ele al veya bir uyarı göster
                    // $("#successModal .responseText").text('Form Gönderilemedi. Sunucu cevabı Error: ' + response)
                    $('#successModal').modal('show');
                }
            });
        } else {
            // Bootstrap form validasyonu
            if (!form.classList.contains('was-validated')) {
                form.classList.add('was-validated');
            }

            // alert('Form validasyonu başarısız oldu. Lütfen girişlerinizi kontrol edin.');
        }
    });
});

