const getCdnScripts = (mode) => {
		switch (mode) {
				case "development":
						return (
								`<script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.development.min.js"></script>
   	<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.development.min.js"></script>
   	<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js"></script>`
								// <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.0.0/redux.min.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-redux/7.0.0/react-redux.min.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-router/5.2.0/react-router.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.js"></script>
						);

				case "production":
						return (
								`<script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js"></script>`
								// <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.0.0/redux.min.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-redux/7.0.0/react-redux.min.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-router/5.2.0/react-router.min.js"></script>
								// <script src="https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js"></script>
						);
		}
};
export default getCdnScripts;
