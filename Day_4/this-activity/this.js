let photoSlideShow = {
    photoList: ["basketball", "dachshund", "cat", "house", "hot dog"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length) {
            this.currentPhotoIndex++;
            console.log("The current frame is: " + this.currentPhotoIndex);
        } else {
            console.log("\nEnd of slideshow");
        }
    },
    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log("The current frame is: " + this.currentPhotoIndex);
        } else {
            console.log("\nBeginning of slideshow");
        }
    },
    getCurrentPhoto: function() {
        console.log("\nThis is a picture of a " + this.photoList[this.currentPhotoIndex]);
        return this.photoList[this.currentPhotoIndex];
    }
}

//iterate forward through the slideshow
for(let i = 0; i < photoSlideShow.photoList.length + 1; i++) {
    if(i < photoSlideShow.photoList.length) {
        photoSlideShow.getCurrentPhoto();
    }
    photoSlideShow.nextPhoto();
}