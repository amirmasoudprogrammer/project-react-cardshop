import React from 'react';
import {Link} from "react-router-dom";
import {PiShoppingCartBold} from "react-icons/pi";
import {useCard} from "../Context/CardContext.jsx";
import styles from "./Layout.module.css"

const Layout = ({children}) => {
    const [state] = useCard()
    return (
        <>
            <header className={styles.header}>
                <Link to="/products">MRamirmasoud.ir</Link>
                <Link to="/checkout">
                    <div>
                        <PiShoppingCartBold/>
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>

                </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by amirmasoud with love</p>
            </footer>
        </>
    );
};

export default Layout;