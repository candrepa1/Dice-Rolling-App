import React, { useEffect, useState } from "react";

const useRolledHistory = () => {
	const [rolledArr, setRolledArr] = useState([]);

	const pushToArr = (rolled) => {
		if (rolled) {
			setRolledArr((rolledArr) => [...rolledArr, { turn: rolled }]);
		}
	};

	return {
		rolledArr,
		pushToArr,
	};
};

export default useRolledHistory;
