const Title = props => (
    <>
        {props.renderFirstComponent()}
        {props.renderSecondComponent()}
        {props.renderThirdComponent()}
    </>
)

function Component(props) {
    const data = { name: "Szymon" };
    return props.render(data);
}

export  {Title, Component};