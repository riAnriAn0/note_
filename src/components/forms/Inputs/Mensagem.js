import { useEffect, useState } from 'react';

function Mensagem({ customStyle, msg }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && (
                <div className={customStyle}>
                    {msg}
                </div>
            )}
        </>
    );
}

export default Mensagem;
