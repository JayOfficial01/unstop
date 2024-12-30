


function SocialButton(props) {
    // eslint-disable-next-line react/prop-types
    const { icon, text } = props
    return (
        <button className="flex items-center justify-center gap-4 border-plantinum border-[1px] w-full p-2.5 rounded-xl  shadow shadow-plantinum">
            <img src={icon} alt="button icon" className="w-fit" />
            <p className="text-base font-semibold">Login with {text}</p>
        </button>
    )
}

export default SocialButton



