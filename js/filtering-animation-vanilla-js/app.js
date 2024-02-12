const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const filter = e.target.getAttribute('data-filter');

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterConf(filter);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterConf(filter);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector('.active').classList.remove('active');

  newButton.classList.add('active');
}

function filterConf(confFilter) {
  conferences.forEach((conf) => {
    const confCategory = conf.getAttribute('data-category');

    if (confFilter === 'all' || confFilter === confCategory) {
      conf.removeAttribute('hidden');
    } else {
      conf.setAttribute('hidden', '');
    }
  });
}
