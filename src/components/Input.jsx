/* eslint-disable react/prop-types */
import { useState } from "react"

import eyeView from "../assets/icons/eye-view.png"
import eyeHidden from "../assets/icons/eye-hidden.png"

function Input(props) {
    const { type = "text", error, label, icon, ...otherInputProps } = props

    const [viewPwd, setviewPwd] = useState(false)
    return (
        <>
            <article className={`bg-smokeWhite py-2 px-3 rounded-xl flex items-center gap-4 ${error && "border-[1px] border-red-500"}`}>
                <picture>
                    <img src={icon} alt="Input Icon" className="w-4" />
                </picture>
                <article className="flex-1 flex items-center gap-5">
                    <article className="flex-1 flex flex-col">
                        <label className="text-xs">{label}</label>
                        <input type={type == "password" ? viewPwd ? 'text' : type : type} className="outline-none text-black bg-smokeWhite flex-1 text-base font-bold w-full" {...otherInputProps} />
                    </article>
                    {type == "password" &&
                        <picture>
                            <img onClick={() => setviewPwd(!viewPwd)} src={viewPwd ? eyeHidden : eyeView} alt="eye icon" className="w-4 cursor-pointer" />
                        </picture>}
                </article>
            </article>
            {error && <p className="mt-[-10px] text-xs text-red-700">* {error}</p>}
        </>
    )
}

export default Input