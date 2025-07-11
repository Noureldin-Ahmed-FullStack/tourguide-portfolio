import { TextField } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
    const [pending, setPending] = useState(false)
    const ClientMail = import.meta.env.VITE_CLIENT_MAIL;
    const MyMail = import.meta.env.VITE_MY_MAIL;
    const BaseURL = import.meta.env.VITE_BASE_URL;
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true)
        const form = e.currentTarget;
        const formData = {
            userEmail: (form.elements.namedItem('userEmail') as HTMLInputElement).value,
            userPhone: (form.elements.namedItem('userPhone') as HTMLInputElement).value,
            userMessage: (form.elements.namedItem('userMessage') as HTMLTextAreaElement).value,
            excursion: null,
            reciver: [ClientMail, MyMail]
        };
        form.reset();

        try {
            const response = await axios.post(BaseURL + '/contactMe', formData);
            console.log('Success:', response);
            setPending(false)
            toast.success("message sent!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            setPending(false)
            toast.error("an error has occured", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error('Error:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="md:pl-16 border-t border-l-0 md:border-t-0 md:border-l border-gray-300/30 pt-6 md:pt-0 text-center md:text-left">
                <div className=''>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <TextField required id="userEmail" label="Your email" type='email' variant="outlined" />
                        <TextField required id="userPhone" label="Your Whatsapp number" type='tel' variant="outlined" />
                    </div>
                    <TextField
                        fullWidth
                        id="userMessage"
                        label="Message"
                        multiline
                        rows={4}
                    // defaultValue="Default Value"
                    />
                </div>
                <button disabled={pending} type='submit' className="btn-flip p-0 border-0 mt-2 w-full" data-back="Contact Me!" data-front="Contact"></button>
            </div>

        </form>
    )
}
