import React from "react";
import "./Paginator.css";

import PaginationArrow from "../../../PaginationArrow/PaginationArrow";

const exportText = {page: "Изображение 5 из 10"};

function Paginator(props) {
	return (
		<>
			<PaginationArrow direction="left" active={true} />
			<span className="font-paginator">{exportText.page}</span>
			<PaginationArrow direction="right" active={false} />
		</>
	);
}

export default Paginator;
