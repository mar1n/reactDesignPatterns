import React from "react";
import{ Component, Title }from "../components/title";
import ReactDOM from 'react-dom/client';
const AS = (props) => {
    console.log("props", props);
    return(<h1>Second render prop!</h1>)
};
const RenderProps = () => ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="App">
        <Title
            renderFirstComponent={() => <h1>First render prop!</h1>}
            renderSecondComponent={() => <h1>Second render prop!</h1>}
            renderThirdComponent={() => <h1>Third render prop!</h1>}
        />
        <Component render={(data) => <AS  data={data} />} />
    </div>
)

export default RenderProps;