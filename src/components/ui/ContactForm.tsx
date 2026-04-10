import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import GoldenButton from './GoldenButton';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
    const [pending, setPending] = useState(false);
    const [formData, setFormData] = useState({
        userEmail: '',
        userPhone: '',
        userMessage: ''
    });
    const ClientMail = import.meta.env.VITE_CLIENT_MAIL;
    const MyMail = import.meta.env.VITE_MY_MAIL;
    const BaseURL = import.meta.env.VITE_BASE_URL;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);

        const data = {
            userEmail: formData.userEmail,
            userPhone: formData.userPhone,
            userMessage: formData.userMessage,
            excursion: null,
            reciver: [ClientMail, MyMail]
        };

        try {
            const response = await axios.post(BaseURL + '/contactMe', data);
            console.log('Success:', response);
            setPending(false);
            setFormData({ userEmail: '', userPhone: '', userMessage: '' });
            toast.success("Message sent successfully!", {
                position: "top-center",
                autoClose: 5000,
                theme: "dark",
            });
        } catch (error) {
            setPending(false);
            toast.error("An error has occurred", {
                position: "top-center",
                autoClose: 5000,
                theme: "dark",
            });
            console.error('Error:', error);
        }
    };

    const inputClasses = `
        w-full px-4 py-3 rounded-lg
        bg-background/50 border border-primary/20
        text-white placeholder-white/40
        focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30
        transition-all duration-300
        hover:border-primary/40
    `;

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="userEmail" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                        className={inputClasses}
                    />
                </div>
                <div>
                    <label htmlFor="userPhone" className="sr-only">Phone</label>
                    <input
                        type="tel"
                        id="userPhone"
                        name="userPhone"
                        value={formData.userPhone}
                        onChange={handleChange}
                        required
                        placeholder="Your WhatsApp number"
                        className={inputClasses}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="userMessage" className="sr-only">Message</label>
                <textarea
                    id="userMessage"
                    name="userMessage"
                    value={formData.userMessage}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    className={`${inputClasses} resize-none`}
                />
            </div>

            <GoldenButton
                type="submit"
                variant="primary"
                size="md"
                disabled={pending}
                className="w-full"
            >
                {pending ? (
                    <span className="flex items-center justify-center gap-2">
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                        />
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <SendIcon className="text-sm" />
                        Send Message
                    </span>
                )}
            </GoldenButton>
        </motion.form>
    );
}
