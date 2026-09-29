import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />

      <main>
        <LoginForm />
      </main>

      <Footer />
    </>
  );
};

export default Login;
