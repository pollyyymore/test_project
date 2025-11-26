document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    // Валидация имени
    nameInput.addEventListener('blur', function() {
        validateName();
    });
    
    // Валидация email
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });
    
    // Валидация сообщения
    messageInput.addEventListener('blur', function() {
        validateMessage();
    });
    
    // Обработка отправки формы
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Здесь обычно отправка данных на сервер
            alert('Сообщение успешно отправлено!');
            contactForm.reset();
            clearErrors();
        }
    });
    
    function validateName() {
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            showError(nameError, 'Пожалуйста, введите ваше имя');
            return false;
        } else if (nameValue.length < 2) {
            showError(nameError, 'Имя должно содержать не менее 2 символов');
            return false;
        } else if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(nameValue)) {
            showError(nameError, 'Имя может содержать только буквы и пробелы');
            return false;
        } else {
            clearError(nameError);
            return true;
        }
    }
    
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            showError(emailError, 'Пожалуйста, введите ваш email');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailError, 'Пожалуйста, введите корректный email адрес');
            return false;
        } else {
            clearError(emailError);
            return true;
        }
    }
    
    function validateMessage() {
        const messageValue = messageInput.value.trim();
        
        if (messageValue === '') {
            showError(messageError, 'Пожалуйста, введите ваше сообщение');
            return false;
        } else if (messageValue.length < 10) {
            showError(messageError, 'Сообщение должно содержать не менее 10 символов');
            return false;
        } else {
            clearError(messageError);
            return true;
        }
    }
    
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    function clearErrors() {
        clearError(nameError);
        clearError(emailError);
        clearError(messageError);
    }
});