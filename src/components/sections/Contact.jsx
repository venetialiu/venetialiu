import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {

    const [formdata, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({name: "", email: "", message: ""})
            }).catch(() => alert("Oops! Something went wrong. Please try again."));
    }

    return(
        <section 
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Get In Touch !
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" required
                                value={formdata.name}
                                className="w-full bg-white/5 border border-[#93886C] rounded px-4 py-3 text-[#93886C] transition focus:outline-none focus:border-[#93886C] focus:bg-[#93886C]/7"
                                placeholder = "Name"
                                onChange = {(e) => setFormData({...formdata, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" required
                                value={formdata.email}
                                className="w-full bg-white/5 border border-[#93886C] rounded px-4 py-3 text-[#93886C] transition focus:outline-none focus:border-[#93886C] focus:bg-[#93886C]/7"
                                placeholder = "example@gmail.com"
                                onChange = {(e) => setFormData({...formdata, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" required
                                value={formdata.message}
                                rows={5}
                                className="w-full bg-white/5 border border-[#93886C] rounded px-4 py-3 text-[#93886C] transition focus:outline-none focus:border-[#93886C] focus:bg-[#93886C]/7"
                                placeholder = "Your Message..."
                                onChange = {(e) => setFormData({...formdata, message: e.target.value})}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#EEEDDC] text-[#33290D] py-3 px-6 rounded-full font-medium transition relative overflow-hidden
                                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(51, 41, 13, 0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>

        </section>
    )
}