'use client'
import React, { useState } from 'react';
import styles from "./index.module.scss"
import { Box, Drawer, Link, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Sidebar: React.FC = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const OpenMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <Box className={styles.container}>
            <MenuIcon sx={{ color: '#000000' }} className={styles.open} onClick={OpenMenu} fontSize="large" />
            <Drawer
                anchor="right"
                variant="temporary"
                open={menuAberto}
                onClose={OpenMenu}
                sx={{
                    "& .MuiPaper-root": {
                        width: 262,
                        backgroundColor: "white",
                    },
                }}
            >
                <Box>
                    <CloseIcon className={styles.close} onClick={OpenMenu} fontSize="large" />
                </Box>
                <hr />
                <Link href="/" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ fontWeight: 600 }} primary="Início" />
                    </ListItemButton>
                </Link>
                <hr />
                <Link href="/adress" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <RocketLaunchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Entregas" />
                    </ListItemButton>
                </Link>
                <hr />
                <Link href="/" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <LocalPhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contatos" />
                    </ListItemButton>
                </Link>
                <hr />
                <Link href="/" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </Link>
                <hr />
                <Link href="/" color="inherit" underline="none">
                    <ListItemButton>
                        <ListItemIcon>
                            <HowToRegIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cadastrar-se" />
                    </ListItemButton>
                </Link>
                <hr />
            </Drawer >
        </Box >
    )
}

export default Sidebar;