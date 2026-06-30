import { useState } from "react";
import api from "../services/api";

function Consent({ userData, back }) {

  const [form, setForm] = useState({
        Age: "",
        AadharID: "",
        consent: false
    });

    const [message, setMessage] = useState("");

    function handleChange(e){

        const {name,value,type,checked}=e.target;

        setForm({
            ...form,
            [name]:type==="checkbox"?checked:value
        });

    }

    async function handleSubmit(e){

        e.preventDefault();

        try{

            const res=await api.post("/submit",form);

            setMessage(res.data.message);

            setForm({
                Age: "",
                AadharID: "",
                consent: false
            });

        }

        catch(err){

            setMessage(err.response?.data?.message||"Something went wrong");

        }

    }

    return(

        <form className="card" onSubmit={handleSubmit}>

            <h2>User Consent Form</h2>

            <input
            name="Age"
            placeholder="Age"
            value={form.Age}
            onChange={handleChange}
            required
            />

            <input
            name="AadharID"
            placeholder="Aadhar ID"
            value={form.AadharID}
            onChange={handleChange}
            required
            />
            

            <label className="checkbox">

                <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                />

                I agree to the Terms and Conditions

            </label>

            <button>Submit</button>

            {message && <p>{message}</p>}

        </form>

    );

}


export default Consent;