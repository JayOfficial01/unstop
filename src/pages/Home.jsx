import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile-pic.png'
import { Button } from '../components'

function Home() {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/auth/login");
        localStorage.removeItem('user');
    }

    return (
        <section className="flex items-center justify-center h-screen">
            <article className='flex flex-col items-center justify-center text-center gap-[100px] max-w-[250px] w-full'>
                <h1 className="text-4xl">Welcome to <br /> <span className="font-black text-primary">Unstop</span></h1>

                <figure className='bg-white p-8 rounded-xl shadow-md w-full flex flex-col items-center justify-center gap-2'>
                    <picture>
                        <img src={profile} alt="Profile Picture" />
                    </picture>

                    <article>
                        <h2 className='text-primary font-semibold'>Michael Dam</h2>
                        <h3 className='text-black'>example.com</h3>
                        <h3 className=' text-black mt-[-5px]'>female</h3>
                    </article>
                    <Button text="Logout" onClick={handleLogout} />
                </figure>
            </article>
        </section>
    )
}

export default Home