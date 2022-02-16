import { useForm } from "../hooks/useForm";
import styles from '../styles/utils/ContactForm.module.css'

function ContactForm() {

    const [formValues,handleInputChange] = useForm({
        name: 'Juan Pérez',
        email: 'juanperez@email.com',
        message:  'Hello World!',
    })

    const { name,email,message } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit}
        >
            <div className={styles.formGroup}>
                <label>Name: </label>
                <input 
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Email: </label>
                <input 
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Email: </label>
                <textarea 
                    value={message}
                    name="message"
                    rows={4}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );
}

export default ContactForm;