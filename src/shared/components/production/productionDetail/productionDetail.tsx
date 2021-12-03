import * as React from 'react';
import {useParams} from "react-router-dom";

function ProductionDetail() {
		const params = useParams();
		return (
				<div>
						<h2>{params.id ? "编辑" : "新建"}</h2>
				</div>
		);
}

export default ProductionDetail;
