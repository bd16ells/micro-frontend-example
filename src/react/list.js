import React, { Component } from 'react'

export default class EventReceiver extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      deleted: [],
      complete: []
    }
    this.state = this.initialState
  }

  componentDidMount() {
    window.addEventListener('todo:delete', (e) => {
        this.setState({deleted: [...this.state.deleted, e.detail.title]})
        console.log(e.detail.title)
      });
    window.addEventListener('todo:complete', (e) => {
        this.setState({complete: [...this.state.complete, e.detail.title]})
        console.log(e.detail.title)
      });
  }


  render() {
    return (
        <div className="row ml-2">

            <div className="col-6">
                <h3>deleted</h3>
                <List vals={this.state.deleted} />
            </div>
            <div className="col-6">
                <h3>completed</h3>
                <List vals={this.state.complete} />
            </div>
      </div>
    )
  }
}

const List = props => {
    const rows = props.vals.map((item, index) => {
        console.log(item)
        return (
            <li key={index}>{item}</li>
            )
        })
    return <ul>{rows}</ul>
}