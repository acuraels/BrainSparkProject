// Обработка кнопки "read-more" в секциях блога START//

const blogSections = document.querySelectorAll('.post.short');

blogSections.forEach(blogSection => {
    const moreButton = blogSection.querySelector('.read-more');

    moreButton.addEventListener('click', () => {
        blogSection.classList.remove('short');
    });
});

// Обработка кнопки "read-more" в секциях блога END//



// Обработка кликов на превью фотографий START //

const activePhoto = document.querySelector('.active-image');
const previews = document.querySelectorAll('.preview-thumbnails a');

previews.forEach(preview => {
    preview.addEventListener('click', event => {
        event.preventDefault();
        activePhoto.src = preview.href;

        const currentActive = document.querySelector('.preview-thumbnails .active-preview');

        if (currentActive) 
            {
            currentActive.classList.remove('active-preview');
            }   

        preview.classList.add('active-preview');
    });
});

// Обработка кликов на превью фотографий END //



// Обработка событий над иконкой профиля START //

const img = document.querySelector('.profile-link img');

img.addEventListener('mouseover', function() {
    this.src = 'img/UserHover.svg';
});

img.addEventListener('mouseout', function() {
    this.src = 'img/User.svg';
});

img.addEventListener('mousedown', function() {
    this.src = 'img/UserActive.svg';
});

img.addEventListener('mouseup', function() {
    this.src = 'img/UserHover.svg';
});

img.addEventListener('mouseleave', function() {
    this.src = 'img/User.svg';
});

// Обработка событий над иконкой профиля END //
