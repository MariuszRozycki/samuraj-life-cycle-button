class App extends React.Component {

  state = {
    status: true
  }

  handleToggle = () => {
    this.setState({
      status: !this.state.status
    })
    console.log('-------------------------------------------------------------------');
  }

  componentDidMount() {
    console.log('App componentDidMount()');
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate()');
  }

  render() {
    console.log('App rendered');

    return (
      <>
        <button onClick={this.handleToggle}>Przelacz</button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </>
    )
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log('Child1 componentDidMount()');
  }

  componentDidUpdate() {
    console.log('Child1 componentDidUpdate()');
  }

  render() {
    console.log('Child1 rendered');
    return (
      <div>{String(this.props.status)}</div>
    )
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log('Child2 componentDidMount()');
  }

  componentDidUpdate() {
    console.log('Child2 componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('Child2 componentWillUnmount()');
  }

  render() {
    console.log('Child2 rendered');
    return (
      <div>COMPONENT Child2 MOUNTED</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));