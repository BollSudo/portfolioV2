import React, {useRef, useState} from 'react'
import TitleSection from "../components/TitleSection.jsx";
import TiltCard from "../components/TiltCard.jsx";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formRef.current) return;
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setFormData({name: "", email: "", subject: "", message: ""});
        } catch (error) {
            console.error('EMAILJS_ERROR', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="w-full h-full md:mt-40 mt-20">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                <TitleSection title="Contact" subTitle="Get in touch" />
                <div className="contact-container flex flex-col lg:flex-row py-5 gap-5">
                    <div className="bg-primary w-full lg:w-1/2 rounded-2xl">
                        <form ref={formRef} onSubmit={handleSubmit} id="contact-form" action="" method="post">
                            <fieldset className="flex flex-col gap-3 p-10">
                                <label className="flex flex-col">
                                    <span className="text-secondary">Nom</span>
                                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Stella" className="bg-primary p-2 rounded-sm focus-ring-custom" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-secondary">Email</span>
                                    <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="stella@andromeda.com" className="bg-primary p-2 rounded-sm focus-ring-custom" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-secondary">Sujet</span>
                                    <input required name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Le cosmos" className="bg-primary p-2 rounded-sm focus-ring-custom" />
                                </label>
                                <label className="flex flex-col">
                                    <span className="text-secondary">Message</span>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder="Pour transcender l'espace et le temps, l'univers... 🪐" className="bg-primary p-2 rounded-sm focus-ring-custom"></textarea>
                                </label>
                                <button type="submit" disabled={loading} className="btn-custom p-2 focus-ring-custom">{loading ? "Envoi en cours..." : "Envoyer"}</button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="contact-card flex items-center justify-center w-full lg:w-1/2">
                        <TiltCard>

                        </TiltCard>
                    </div>
                </div>
            </div>
        </section>
        )
}
export default Contact
