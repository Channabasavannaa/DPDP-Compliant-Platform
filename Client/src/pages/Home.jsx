import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import Consent from "../components/Consent";
import ActInfo from "../components/ActInfo";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";


function Home() {
    const [step, setStep] = useState(1);
     const [userData, setUserData] = useState({});
     const [loading, setLoading] = useState(true);
     useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 2000);
     return () => clearTimeout(timer);
   }, []);


   if (loading) {
     return (
       <div className="loader-screen">
        <div >
          <img src="/image.png" alt="Logo" className="loader-logo" />
        </div>

  <div className="spinner">
    <div className="section-center">
      <div className="section-path">
        <div className="globe">
          <div className="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>

 

         <p>Loading Digital Personal Data Protection Platform...</p>
       </div>
     );
   }

    return (

        <>

            <Navbar />

            <div className="hero">

                <h1>Your data, your rights</h1>

                <p>

                    We are fully compliant with the DPDP Act 2023, giving you complete control over your personal information.

                </p>

            </div>


            <ActInfo 
            step = {step}/>

           

        {step === 1 ? (
          <UserForm
            userData={userData}
            setUserData={setUserData}
            next={() => setStep(2)}
          />
          ) : (
          <Consent
            userData={userData}
            back={() => setStep(1)}
          />
        )}

        <Footer/>
        </>

    );

}

export default Home;