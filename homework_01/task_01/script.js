const musicCollection = {
	albums: [
		{ title: "The Emptiness Machine", artist: "Linkin Park", year: "2024" },
		{ title: "Move Me", artist: "Badflower", year: "2021" },
		{ title: "Your Blood", artist: "Nothing But Thieves", year: "2020" },
	],
	[Symbol.iterator]: function () {
		let index = 0;
		return {
			next: () => {
				if (index < this.albums.length) {
					return { value: this.albums[index++], done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
};

for (const album of musicCollection) {
	console.log(`${album.title} - ${album.artist} (${album.year})`);
}
