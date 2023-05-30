class ApiFeatures {
	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
		// console.log("the Product.find() in apifeature is");
		// console.log(this.query);
	}

	search() {
		// console.log(this.queryStr);
		if (this.queryStr.alli === "true") {
			// this.query = this.query.find();
			// console.log(this.query.all, "is yes");
			return this;
		}

		const keyword = this.queryStr.keyword
			? {
					name: {
						$regex: this.queryStr.keyword,
						$options: "i",
					},
			  }
			: {};

		this.query = this.query.find({ ...keyword });
		return this; // return this  means this class's-object is return with all its keys-and-functions.
	}

	filter() {
		if (this.queryStr.alli === "true") {
			console.log("yes in filter true");
			return this;
		}
		const queryCopy = { ...this.queryStr };
		//   Removing some fields for category
		const removeFields = ["keyword", "page", "limit", "alli"];

		removeFields.forEach((key) => delete queryCopy[key]);

		// Filter For Price and Rating

		let queryStr = JSON.stringify(queryCopy);
		queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

		this.query = this.query.find(JSON.parse(queryStr));

		return this;
	}

	pagination(resultPerPage) {
		const currentPage = Number(this.queryStr.page) || 1;

		const skip = resultPerPage * (currentPage - 1);

		this.query = this.query.limit(resultPerPage).skip(skip);

		return this;
	}
}

module.exports = ApiFeatures;
