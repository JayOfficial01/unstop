import { Button, Input, SocialButton } from "../components"
import loginImage from "../assets/login.png"
import facebookIcon from "../assets/icons/facebook-icon.png"
import googleIcon from "../assets/icons/google-icon.png"
import userIcon from "../assets/icons/user-icon.png"
import passwordIcon from "../assets/icons/password-icon.png"
import emailIcon from "../assets/icons/email-icon.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};


        if (formData.username !== 'emilys') {
            newErrors.username = 'Invalid username. Only "emilys" is allowed.';
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format (e.g., example@gmail.com)';
        }


        if (formData.password.length < 8) {
            newErrors.password = 'Password must contain at least 8 characters.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        if (validate()) {
            localStorage.setItem("user", JSON.stringify(formData))
            setTimeout(() => {
                setLoading(false);
                navigate("/home")
            }, 1000)
        } else {
            setLoading(false)
        }
    };


    return (
        <section className="grid grid-cols-2 max-[900px]:grid-cols-1 items-center h-screen">
            <picture className="flex max-[900px]:hidden items-center justify-center">
                <img src={loginImage} alt="Login Page" className="max-w-[500px] max-h-[500px]" />
            </picture>
            <article className="flex items-center justify-center max-[900px]:mx-3">
                <article className="bg-white border-plantinum border-2 px-8 py-4 rounded-xl max-w-[681px] w-full">
                    <h1 className="text-4xl font-semibold">Welcome to <br /> <span className="text-primary font-black">Unstop</span></h1>

                    <article className="pt-6 flex flex-col gap-4">
                        <SocialButton text="Google" icon={googleIcon} />
                        <SocialButton text="Facebook" icon={facebookIcon} />
                    </article>

                    <div className="flex items-center justify-center my-4">
                        <div className="flex-grow border-t border-[1px] border-silver-300"></div>
                        <span className="mx-8 text-black">OR</span>
                        <div className="flex-grow border-t border-[1px] border-silver-300"></div>
                    </div>

                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <Input label="User Name" error={errors.username} icon={userIcon} name="username" value={formData.username} onChange={handleInputChange} />
                        <Input label="Email" error={errors.email} icon={emailIcon} name="email" value={formData.email} onChange={handleInputChange} />
                        <Input label="Password" error={errors.password} type="password" icon={passwordIcon} name="password" value={formData.password} onChange={handleInputChange} />

                        <article className="flex items-center justify-between">
                            <label htmlFor="remember" className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" id="remember" />
                                <span>Remember me</span>
                            </label>

                            <a href="#" className="text-primary text-base">Forgot Password?</a>
                        </article>

                        <Button text="Login" loading={loading} />

                    </form>

                    <h3 className="text-center pt-5">Don&apos;t have an account?   <a href="#" className="text-primary">Register</a></h3>
                </article>

            </article>
        </section>
    )
}

export default Login