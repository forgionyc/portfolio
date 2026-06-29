import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
export default function Index({ first_name, last_name, message }) {
  return (
    <div className="bg-[rgb(10,10,11)] text-[rgb(237,237,238)] min-h-screen antialiased">
      <Navbar first_name={first_name} last_name={last_name}/>
      <h1 className="justify-center">{message}</h1>
      <Footer first_name={first_name} last_name={last_name}/>
    </div>
  )
}
