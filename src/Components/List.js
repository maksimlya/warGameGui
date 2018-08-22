class WarObjectList extends React.Component {
    render() {
        return (
            <div className="warObjectList">
                <h1>War Objects List for {this.props.name}</h1>
                <ul>
                    <li>Missile Launcher</li>
                    <li>Missile Destructor</li>
                    <li>Missile Launcher Destructor</li>
                </ul>
            </div>
        );
    }
}