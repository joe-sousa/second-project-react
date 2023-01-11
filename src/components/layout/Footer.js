import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li>
                    <h5><FaFacebook /></h5>
                </li>
                <li>
                    <h5><FaInstagram /></h5>
                </li>
                <li>
                    <h5><FaLinkedin /></h5>
                </li>
            </ul>
            <h5><FaCopyright /> Todos os direitos reservados</h5>
        </footer>
    )
}

export default Footer