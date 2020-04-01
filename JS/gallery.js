function imageGallery() {
	// declaring constant for the gallery section of highlight and preview
	const highlight = document.querySelector('.gallery-highlight');
	const previews = document.querySelectorAll('.room-preview img');

	previews.forEach(preview=>{
		//adding action event when clicked
		preview.addEventListener('click',function(){
			//constant smallScr declared along with bigScr
			const smallSrc = this.src;
			//literally replaces big with small - name of image big and small interchanges
			const bigSrc = smallSrc.replace("big","small");
			highlight.src = bigSrc;
			previews.forEach(preview => preview.classList.remove('room-display'));
			preview.classList.add('room-display');
		});
	});
}
imageGallery();