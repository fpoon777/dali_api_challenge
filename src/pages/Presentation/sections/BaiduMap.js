import ReactDOM from "react-dom";
import { Map, APILoader } from "@uiw/react-baidu-map";

const Demo = () => (
  <div style={{ width: "100%", height: "300px" }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map center="杭州" />
      <Map center="上海">{({ BMap, map, container }) => {}}</Map>
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
