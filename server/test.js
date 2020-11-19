const request = require("supertest");
const app = require('./app');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const sinon = require('sinon');
// const App = require('../client/index.jsx').default;
const Style = require('../client/components/Style.jsx').default;
const Images = require('../client/components/Images.jsx').default;
const AddToCart = require('../client/components/addToCart.jsx').default;
const React = require('react');
// const { expect } = require("chai");
// const { expect } = require("chai");
enzyme.configure({ adapter: new Adapter() });

function Test (props) {
  return (
    <div>
      <span className="foo" />
      <span className="bar baz" />
    </div>
  )
}

const tests = {
  user: 'Michael Bolton',
  styler: "Black",
  message: "In Stock"
}

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/api/values")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });

  test("It should not have a POST method", done => {
    request(app)
      .post("/api/values")
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  test("It should have a GET method for styles", done => {
    request(app)
      .get("/api/styles")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});


it('renders the topmost component', () => {
  const wrapper = enzyme.shallow(<Test />);
  expect(wrapper.find('div')).toEqual(true);
});

it('should render the Style component', () => {
  enzyme.shallow(<Style />);
});

it('should render the Images component', () => {
  enzyme.shallow(<Images />);
})

it('should check for an appropriate message', () => {
  const wrapper = enzyme.shallow(<AddToCart actor={tests}/>);
  // const message = "In Stock";
  // expect(wrapper.contains(message)).toEqual(true);
  // const wrapinstance = wrapper.instance();
  // wrapinstance.componentDidMount();
  // wrapinstance.componentWillMount();
  // expect(wrapper.state('style')).toEqual(true);
  // expect(wrapper.props.actor).toEqual({tests});
  // expect(wrapinstance.counter(1)).toEqual(1);
});

it('should render a component that has props', () => {
  // enzyme.shallow(<Test actor={tests}/>);
  const wrapper = enzyme.shallow(<Style actor={tests}/>);
  const styler = 'Black';
  expect(wrapper.contains(styler)).toEqual(true);
});