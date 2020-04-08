import wixData from 'wix-data';

// Lines 5 - 24 written by Tony Wang

$w.onReady(async function () {
	let slidesData = await getSlideshowDataFromDatabase();
	loadSlideshowData(slidesData);
});

function loadSlideshowData(slidesData) {
	const slideElements = $w("#dynamicSlideshow").slides;
	slideElements.forEach((slide, index) => {
		$w(`#${slide.id}`).background.src = slidesData[index].slideBackground;
		$w(`#slideTitle${index}`).text = slidesData[index].title;
		$w(`#slideDescription${index}`).text = slidesData[index].description;
		$w(`#slideButton${index}`).link = slidesData[index].buttonUrl;
	})
}

function getSlideshowDataFromDatabase() {
	return wixData.query("DynamicSlides").find().then(results => {
		return results.items;
	})
}