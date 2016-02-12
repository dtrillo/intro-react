var PrimerComponente = React.createClass({
	render: function() {
		return (
				<h2>Manejando datos ... y React from JSX Version 3</h2>
		);
	}
});
ReactDOM.render(
	<div>
	<PrimerComponente />
	<PrimerComponente />
	</div>
	
	, document.getElementById('content'));