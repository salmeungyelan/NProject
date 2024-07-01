const fileToBase64 = file => {
	return new Promise((resolve, reject) => {
		if (!file) return null;

		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload = async () => {
			const fileObj = {
				originalname: file.name,
				url: fileReader.result,
				isThumbnail: null,
			};

			resolve(fileObj);
		};

		fileReader.onerror = error => reject(error);
	});
};

export default fileToBase64;
