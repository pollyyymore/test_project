// Открытие модального окна
        document.getElementById('add-course-btn').addEventListener('click', function() {
            document.getElementById('course-modal').style.display = 'block';
        });

        // Закрытие модального окна
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('course-modal').style.display = 'none';
        });

        // Закрытие модального окна при клике вне его
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('course-modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Обработка формы
        document.getElementById('course-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const courseName = document.getElementById('course-name').value;
            const coursePercentage = document.getElementById('course-percentage').value;
            
            if (courseName && coursePercentage >= 0 && coursePercentage <= 100) {
                // Создание нового элемента курса
                const coursesList = document.querySelector('.courses-list');
                const newCourse = document.createElement('div');
                newCourse.className = 'course';
                
                newCourse.innerHTML = `
                    <span class="course-name">${courseName}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${coursePercentage}%"></div>
                    </div>
                    <span class="percentage">${coursePercentage}%</span>
                `;
                
                coursesList.appendChild(newCourse);
                
                // Очистка формы и закрытие модального окна
                document.getElementById('course-form').reset();
                document.getElementById('course-modal').style.display = 'none';
            } else {
                alert('Пожалуйста, введите корректные данные');
            }
        });