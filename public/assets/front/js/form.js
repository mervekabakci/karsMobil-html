$(document).ready(function () {
    $('.eyeButton').on('click', function () {
        // Kapsayıcı inputColumn elemanını bul
        var inputColumn = $(this).closest('.inputColumn');
        
        // İlgili şifre alanını bul
        var passwordInput = inputColumn.find('.password');
        
        // Şifre alanının tipini toggle et (görünür/gizli yap)
        passwordInput.attr('type', function(_, attr) {
            return attr === 'password' ? 'text' : 'password';
        });

        // Kapsayıcı inputColumn'a show class'ını ekleyin veya çıkarın
        inputColumn.toggleClass('show');
    });
});

function checkValidity(inputElement, mask) {
    var inputValue = inputElement.val();
    var isValid = mask.test(inputValue) && inputValue.trim() !== '';

    if (!isValid) {
        inputElement.addClass('error');
    } else {
        inputElement.removeClass('error');
    }
}



const form = $('form'); 

form.on('submit', function (event) {
    event.preventDefault();

    // Zorunlu alanlar için özel validasyon
    form.find('[required]').each(function () {
        var input = $(this);
        if (input.val().trim() === '') {
            input.addClass('error');
            form.find(".error-message").text("Lütfen email adresinizi belirtilen formatta giriniz");

        } else {
            input.removeClass('error');
        }
    });

    // Diğer input alanları için validasyon
    form.find('input').each(function () {
        if ($(this).hasClass('emailMask')) {
            checkValidity($(this), /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        } else if ($(this).hasClass('phoneMask')) {
            checkValidity($(this), /^0 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/);
        } else if ($(this).hasClass('textMask')) {
            checkValidity($(this), /[A-Za-zÇçĞğİıÖöŞşÜü ]/);
        }
        // Diğer input türleri için benzer kontrolleri ekleyebilirsiniz
    });
    var password1 = form.find('input[name="password"]').val();
    var password2 = form.find('input[name="passwordagain"]').val();

    // Şifrelerin değerlerini karşılaştır ve uyarı ver
    if (password1 !== password2) {
        form.find(".error-message").text("Şifreler Eşleşmiyor.");
        form.find('input[name="password"]').addClass('error');
        form.find('input[name="passwordagain"]').addClass('error');
    }
    // Bootstrap form validasyonu
    if (!form.hasClass('was-validated')) {
        form.addClass('was-validated');
    }

    // Formun genel geçerliliğini kontrol et
    if (form[0].checkValidity()) {
        // Formu gönderme işlemleri buraya eklenecek
        const formData = new FormData(form[0]);
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response === 'ok') {
                    $('#successModal').addClass("active");
                } else {
                    $('#successModal').addClass("active");
                }
            },
            error: function () {
                $('#successModal').addClass("active");
            }
        });
    } else {
        // Form geçerli değilse yapılacak işlemler buraya eklenecek
        console.log('Form validasyonu başarısız oldu. Lütfen girişlerinizi kontrol edin.');
    }
});
