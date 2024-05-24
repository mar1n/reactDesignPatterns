function withStyle(Component) {
    return props => {
        const style = { padding : '0.2rem', margin: '1rem '};
        return <Component style={style} {...props} />
    }
}

export {withStyle}