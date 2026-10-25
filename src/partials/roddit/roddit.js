import posts from './src/pages/index/roddit_posts.json'

const postTemplate = (userimage, username, title, content) => `
  <div class="post__container" data-js-post-container>

    <div class="post__header" data-js-post-header>
      <div class="header__user" data-js-post-user>

        <img src="${userimage}" alt="user image" data-js-post-user-image>
        <div class="user__name" data-js-post-user-name>
          ${username}
        </div>

      </div>

      <div class="header__title">
       ${title}
      </div>

    </div>    

    <div class="post__content" data-js-post-content>
      ${content}
    </div>

  </div>
`;


const postContentTemplate = (text, image, video) => {
  let contentHTML = ''
  console.log('text: ', text)
  if (text != '') {
    const textContent = `
      <p class="content__text" data-js-post-content-text>
        ${text}
      </p>
    `
    contentHTML = contentHTML + textContent
  }
  console.log('video != ', image != '')
  console.log('image: ', image)
  if (image != '') {
    const imageContent = `
      <img src="${image}" alt="post image" data-js-post-image>
    `

    console.log('imageContent: ', imageContent)
    contentHTML = contentHTML + imageContent
    console.log('contentHTML: ', contentHTML)
  }

  console.log('video: ', video)
  console.log('video != ', video != '')
  if (video != '') {
    const videoContent = `
      <div
        class='Video__Container -Paused -NoSwipping'
        data-volume='high'
        data-js-video
        data-js-url='${video}'
      >
        <div class='Controls__Container'>
          <div class='Controls__TimelineContainer'>
            <div class='TimeLineSlider__Container' data-js-slider-container>
              <div class='TimeLineSlider' style='--seek-position: 0' data-js-slider>
                <div class='TimeLineSlider__Thumb' data-js-slider-thumb></div>
                <img class='TimeLineSlider__PreviewImage' />
                <div class='TimeLineSlider__Progress' data-js-slider-progress></div>
  
                <div class='TimeLineSlider__RunnableTrack' data-js-slider-runnable-track></div>
              </div>
            </div>
          </div>
          <div class='Controls'>
            <button class='Controls__PlayPause'>
              <svg class='Icon__Play' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z'></path>
              </svg>
              <svg class='Icon__Pause' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M14,19H18V5H14M6,19H10V5H6V19Z'></path>
              </svg>
            </button>
            <div class='Volume__Container'>
              <button class='Volume__Icon'>
                <svg class='Icon__VolumeHigh' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z'
                  ></path>
                </svg>
                <svg class='Icon__VolumeLow' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z'
                  ></path>
                </svg>
                <svg class='Icon__VolumeMute' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z'
                  ></path>
                </svg>
              </button>
              <div class='VolumeSlider__Container' data-js-slider-container>
                <div class='VolumeSlider' style='--seek-position: 1' data-js-slider>
                  <div class='VolumeSlider__Progress' data-js-slider-progress></div>
                  <div class='VolumeSlider__Thumb' data-js-slider-thumb></div>
                  <div class='VolumeSlider__RunnableTrack' data-js-slider-runnable-track></div>
                </div>
              </div>
            </div>
            <div class='Duration__Container'>
              <div class='Duration__CurrentTime'>0:00</div>
              /
              <div class='Duration__TotalTime'></div>
            </div>
            <button class='Controls__ClosedCaption'>
              <svg class='Icon__Captions' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z'
                ></path>
              </svg>
            </button>
            <button class='Controls__PlaybackSpeed -WideButton'>1x</button>
            <button class='Controls__MiniPlayer'>
              <svg class='Icon__MiniPlayer' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z'
                ></path>
              </svg>
            </button>
            <button class='Controls__Theater'>
              <svg class='Icon__TheaterTall' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z'
                ></path>
              </svg>
              <svg class='Icon__TheaterWide' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z'
                ></path>
              </svg>
            </button>
            <button class='Controls__Fullscreen'>
              <svg class='Icon__FullscreenOpen' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'
                ></path>
              </svg>
              <svg class='Icon__FullscreenClose' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `

    contentHTML = contentHTML + videoContent

  }

  console.log('contentHTML: ', contentHTML)
  return contentHTML
}

const createPost = (userimage='', username='', title='', text='', image='', video='') => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.setAttribute('data-js-post', 'true')

  const postContent = postContentTemplate(text, image, video)
  postElement.innerHTML = postTemplate(userimage, username, title, postContent)
  console.log('postElement: ', postElement)

  return postElement
}

const rodditContainers = document.querySelectorAll('[data-js-roddit-container]');

rodditContainers.forEach(rodditContainer => {
  const header = rodditContainer.querySelector('[data-js-roddit-header]');
  const menu = header.querySelector('[data-js-roddit-menu]');
  const menuOpenButton = menu.querySelector('[data-js-roddit-menu-open-button]');
  const menuCloseButton = menu.querySelector('[data-js-roddit-menu-close-button]');
  const menuMain = menu.querySelector('[data-js-roddit-menu-main]');
  const menuList = menu.querySelector('[data-js-roddit-menu-list]');
  const menuListItems = menuList.querySelectorAll('[data-js-rodit-menu-list-item]');
  const main = rodditContainer.querySelector('[data-js-roddit-main]');
  const footer = rodditContainer.querySelector('[data-js-roddit-footer]');  

  const postElement = createPost('','sanaxo','Switching Languages' ,'Programmers be like', '/src/assets/roddit/aV7NE4n_460swp.webp')
  console.log('postElement: ', postElement)

  main.appendChild(postElement)
  
});