import React from 'react';
import styles from "./index.module.scss"
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Sidebar from '../Sidebar';


const NavBar: React.FC = () => {
    return (
        <Box className={styles.container}>
            <AppBar className={styles.nav} position="static">
                <Toolbar className={styles.bar}>
                    <Box className={styles.logocontainer}>
                        <p className={styles.logoname}><RocketLaunchIcon fontSize='small' /> &nbsp; Interplanetary Express</p>
                    </Box>
                    <Box className={styles.optionscontainer}>
                        <Button variant='outlined' className={styles.optionbtn}><HomeIcon fontSize='small' /> &nbsp; Inicio</Button>
                        <Button href='/adress' variant='outlined' className={styles.optionbtn}><RocketLaunchIcon fontSize='small' /> &nbsp; Entregas</Button>
                        <Button variant='outlined' className={styles.optionbtn}><LocalPhoneIcon fontSize='small' />  &nbsp; Contatos</Button>
                    </Box>
                    <Box className={styles.btncontainer}>
                        <Button className={styles.btn1} variant='outlined'>Login</Button>
                        <Button className={styles.btn2} variant='outlined'>Cadastrar-se</Button>
                    </Box>
                    <Box className={styles.sidebar}>
                        <Sidebar />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;