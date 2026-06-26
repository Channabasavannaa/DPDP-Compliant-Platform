import { useState } from "react";
import api from "../services/api";

function UserForm() {

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
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
                full_name:"",
                email:"",
                phone:"",
                consent:false
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
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            required
            />

            <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
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

export default UserForm;