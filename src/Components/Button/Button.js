import styles from '../../styles/Button.module.css'

const Button = ({onClick, children, width, margin, padding}) => {
    const buttonStyles = {
        marginTop: margin || '0px',
        width: width || 'auto',
        padding: padding || '5px',

        border: 'solid #FF9D00',
        borderRadius: '5px',
        borderWidth: '2px',
        cursor: 'pointer',
        color: '#FF9D00'
    };

    return (
        <button onClick={onClick} className={styles.button} style={buttonStyles}>
            {typeof children === 'object' ? JSON.stringify(children) : children}
        </button>
    );
}

export default Button;