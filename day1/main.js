import { ToyReact, Component } from './ToyReact';
class MyCompenent extends Component {
  render() {
    return <div>
        <span>hello</span>
        <span>world</span>
        <span>!</span>
        <div>{ this.children}</div>
      </div>
  }
}

let a = <MyCompenent name="a" id="id">
  <div>123</div>
</MyCompenent>

// document.body.appendChild(a)
ToyReact.render(
  a,
  document.body
)
