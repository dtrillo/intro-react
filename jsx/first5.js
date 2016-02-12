var PrimerComponente = React.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.mensaje} ... </h2>
				<div>{this.props.children}</div>
			</div>
		);
	}
});
ReactDOM.render(
	<div>
	<PrimerComponente mensaje="Manejando datos" >Aprendiendo React</PrimerComponente>
	<PrimerComponente mensaje="ReactJS">Version 5!!</PrimerComponente>
	</div>
	
	, document.getElementById('content'));