const Button = ({ text, color, children }) => {

    const onClickedButton = (e) => {
        console.log(e);
        console.log(text)
    }

    return <button
        onClick={onClickedButton}
        // onMouseEnter={onClickedButton}
        style={{ color: color }}
    >
        {text} - {color?.toUpperCase()}
        {children}
    </button >
}

Button.defaultProps = {
    color: "black"
};

export default Button


