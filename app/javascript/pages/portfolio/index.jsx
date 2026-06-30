import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function Index({ first_name, last_name, email, github, linkedin, message }) {
  return (
    <div className="flex flex-col bg-[rgb(10,10,11)] text-[rgb(237,237,238)] min-h-screen antialiased">
      <Navbar first_name={first_name} last_name={last_name}/>
      <p className="flex justify-center p-20">{message}</p>
      <p className="flex justify-center p-20">{message}</p>
      <Footer first_name={first_name} last_name={last_name} email={email} github={github} linkedin={linkedin}/>
    </div>
  )
}
