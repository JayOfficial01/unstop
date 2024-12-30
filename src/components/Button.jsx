

function Button(props) {
    // eslint-disable-next-line react/prop-types
    const { text, loading, ...otherButtonProps } = props
    return (
        <button disabled={loading} className="bg-primary text-white w-full p-3 rounded-xl" {...otherButtonProps}>{loading ? "...loading" : text}</button>
    )
}

export default Button