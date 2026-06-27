import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";

function Home() {

    return (

        <>

            <Navbar />

            <div className="hero">

                <h1>Digital Personal Data Protection Platform</h1>

                <p>

                    Securely collect, manage and revoke user consent in
                    compliance with India's DPDP Act.

                </p>

            </div>

            <div className="container">

                <UserForm />

            </div>

        </>

    );

}

export default Home;