import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

function Repositories({ repositories, className }) {
	if (repositories.length === 0) {
		return (
			<div className="alert alert-warning" role="alert">
				No results.
			</div>
		);
	}
	// TODO Format with https://getbootstrap.com/docs/5.1/components/card/
	//   https://getbootstrap.com/docs/5.1/components/list-group/
	return (
		<div className={className}>
			{repositories.map((repository) => (
				<div className="repository-entry">
					<h4>{repository.name}</h4>
				</div>
			))}
		</div>
	);
}

function PaginateDemoApp({ orgName, perPage }) {
	const [repositories, setRepositories] = useState([]);
	const [pageOffset, setPageOffset] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [apiError, setApiError] = useState(null);

	useEffect(async () => {
		const response = await fetch(
			`https://api.github.com/orgs/${orgName}/repos?${new URLSearchParams({
				per_page: perPage,
				page: pageOffset,
			})}`
		);
		const responseJson = await response.json();
		if (!response.ok) {
			setApiError(responseJson.message);
			setRepositories([]);
			setPageCount(0);
			return;
		}
		// const newPageCount = getGitHubPageCount(response);
		const newPageCount = 2;
		console.log(responseJson, newPageCount);
		setRepositories(responseJson);
		setPageCount(newPageCount);
	}, [pageOffset, perPage]);

	const handlePageChange = (event) => {
		console.log(event);
		// TODO Only change displayed selected page
		// when its content is loaded in useEffect.
		setPageOffset(event.selected);
	};

	return (
		<div style={{ marginTop: "1rem" }}>
			<h3 className="repo-title">{orgName} GitHub repositories</h3>
			<ReactPaginate
				previousLabel="Previous"
				nextLabel="Next"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageChange}
				containerClassName="pagination"
				activeClassName="active"
				forcePage={pageOffset}
			/>
			{apiError && (
				<div className="alert alert-danger" role="alert">
					{apiError}
				</div>
			)}
			<Repositories className="listing" repositories={repositories} />
			<ReactPaginate
				previousLabel="Previous"
				nextLabel="Next"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageChange}
				containerClassName="pagination"
				activeClassName="active"
				forcePage={pageOffset}
			/>
		</div>
	);
}

{
	/* ReactDOM.render(
  <PaginateDemoApp orgName="YtoTech" perPage={5} />,
  document.getElementById("container")
); */
}
export default PaginateDemoApp;
