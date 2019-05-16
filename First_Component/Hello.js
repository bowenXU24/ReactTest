
class Hello extends React.Component {

	static defaultProps={
		from: 'A guy',
		to: 'Another guy',
		num: '2'
	}

	render() {
        let num = "!".repeat(this.props.num);
		return (
			<div>
			    <h1>Hi {this.props.to} from {this.props.from} {num}</h1>
			</div>
		);
	}
}

