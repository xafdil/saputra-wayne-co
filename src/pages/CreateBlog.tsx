import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateBlogForm from "../components/Blog/CreateBlogForm";

const CreateBlog = () => {
  return (
    <>
      <Navbar />

      <main>
        <CreateBlogForm />
      </main>

      <Footer />
    </>
  );
};

export default CreateBlog;