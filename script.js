var bannerItem = document.querySelector('.banner-item');

var bannerBullet = document.querySelectorAll('.banner-bullet');

bannerItem.addEventListener('click', function(e) {
	if(e.target.className == 'banner-bullet') {
		bannerBullet.forEach(function(i) {
			if(i.classList.contains('active-img-banner')) {
				i.classList.remove('active-img-banner');
			}
		});
		e.target.classList.add('active-img-banner');
	}
});