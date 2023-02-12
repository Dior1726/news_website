const searchInput = document.querySelector("#search")
const responseDiv = document.querySelector("#search-bar__response")
const modal = document.querySelector("#modal")
const showModalBtn = document.querySelector("#show-modal")
const hideModalBtn = document.querySelector("#hide-modal")
const profileBtn = document.querySelector("#profile-btn")
const profileMenu = document.querySelector("#profile-menu")
const body = document.querySelector('body')

// Header input focus
searchInput.addEventListener('focus', () => {
  responseDiv.style.display = "block"
})

searchInput.addEventListener('blur', () => {
  responseDiv.style.display = "none"
})

// Swiper slides
const swiper = new Swiper('.category-swiper', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});

const subscriptionSwiper = new Swiper('.subscription-swiper', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.subscription-btn__next',
    prevEl: '.subscription-btn__prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

// Profile Tabs

const connectTabs = new Tabs();

// Modal fucntions
const showModal = () => {
  body.style.position = 'fixed'
  body.style.left = '0'
  body.style.right = '0'
  body.style.top = '0'
  body.style.bottom = '0'
  if (modal.classList.contains('hide')) {
    modal.classList.remove('hide')
  }
}

const hideModal = () => {
  body.style.position = 'relative'
  if (!modal.classList.contains('hide')) {
    modal.classList.add('hide')
  }
}

showModalBtn.addEventListener('click', showModal)
hideModalBtn.addEventListener('click', hideModal)

// profile button

const toggleProfileMenu = () => {
  if (profileMenu.classList.contains('show')) {
    profileMenu.classList.remove('show')
  } else {
    profileMenu.classList.add('show')
  }
}

profileBtn.addEventListener('click', toggleProfileMenu)