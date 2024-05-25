import React from "react";
import Title from "../components/title";
import ReactDOM from 'react-dom/client';

const RenderProps = () => ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="App">
        <Title
            render={
                () => (
                    <h1>
                        <span role="img" aria-label="emoji">

                        </span>
                        I am a render prop!{" "}
                        <span role="img" aria-label="emoji" ></span>

                    </h1>
                )
            }
        />
    </div>
)

export default RenderProps;