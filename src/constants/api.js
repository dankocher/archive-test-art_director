const host = {
	uri:
		window.location.port === "5000" || window.location.port === "3000"
			? "https://wpdev.goodstudio.by"
			: "",
	// uri: "https://wpdev.goodstudio.by"
	// uri: window.location.port === "3000" ? "https://wpdev.goodstudio.by" : ""
	// uri: "https://wp.goodstudio.by"
};

const api = {
	td_get_tasks: { method: "GET", uri: "/api/td/get/list/:tt_id" },
	td_get_task: { method: "GET", uri: "/api/td/get/:tt_id/:_id" },
};

export { host, api };
