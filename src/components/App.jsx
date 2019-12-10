import VideoList from "./VideoList.js"
import exampleVideoData from "./data/exampleVideoData.js"

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em></h5> </div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h1><em>videoPlayer</em> view goes here</h1></div>
      </div>

      <div className="col-md-5">

        <div><VideoList x = {exampleVideoData} /></div>

      </div>

    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
