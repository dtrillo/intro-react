var PrimerComponente = React.createClass({
	render: function() {
		return (
				<h2>{this.props.mensaje} ... y {this.props.mensaje2}</h2>
		);
	}
});
ReactDOM.render(
	<div>
	<PrimerComponente mensaje="Manejando datos" mensaje2="React from JSX Version 3" />
	<PrimerComponente mensaje="Esto " mensaje2="mola"/>
	</div>
	
	, document.getElementById('content'));