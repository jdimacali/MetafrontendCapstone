import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="md:mx-12 lg:mx-40 xl:mx-72 2xl:mx-80">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
