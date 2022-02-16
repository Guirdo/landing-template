import styles from '../styles/Contact.module.css'
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section 
            className={styles.container}
            id="contact"    
        >
            <h1>Contact</h1>

            <ContactForm />
        </section>
    );
}

export default Contact;