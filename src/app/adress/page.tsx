import { Box, Button, FormControl, TextField } from "@mui/material";
import styles from "./index.module.scss"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Link from "next/link";
import Image from "next/image";
import spacexLogo from "../../../public/spacex.png"

export default function Address() {

    const planets = [
        {
            value: 'mars',
            label: 'Marte',
        },
        {
            value: 'earth',
            label: 'Terra',
        },
    ];

    return (
        <Box className={styles.container}>
            <Box className={styles.return}>
                <Link className={styles.iconreturn} href='/'>
                    <KeyboardReturnIcon fontSize="large" /></Link> <p>Edição de endereço</p>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.form}>
                    <FormControl className={styles.formInputs}>
                        <Image className={styles.logo} alt="logo spacex" src={spacexLogo} priority/>
                        <hr />
                        <Box className={styles.inputcontainer}>
                            <h3>Nome</h3>
                            <TextField
                                className={styles.input}
                                placeholder="Nome"
                                type="text"
                                variant="outlined"
                                required
                                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                            />
                        </Box>
                        <Box className={styles.inputcontainer}>
                            <h3>Telefone</h3>
                            <TextField
                                className={styles.input}
                                placeholder="(xx) x xxxx-xxxx"
                                type="tel"
                                variant="outlined"
                                required
                                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                            />
                        </Box>
                        <Box className={styles.inputcontainer}>
                            <h3>Email</h3>
                            <TextField
                                className={styles.input}
                                placeholder="Email"
                                type="email"
                                variant="outlined"
                                required
                                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                            />
                        </Box>
                        <Box className={styles.smallinputs}>
                            <Box className={styles.inputcontainer}>
                                <h3>Lote</h3>
                                <TextField
                                    className={styles.input2}
                                    placeholder="1897"
                                    type="number"
                                    variant="outlined"
                                    required
                                    sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                                />
                            </Box>
                            <Box className={styles.inputcontainer}>
                                <h3>Planeta</h3>
                                <TextField
                                    className={styles.input2}
                                    placeholder="Planeta"
                                    variant="outlined"
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                    required
                                    sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                                >
                                    {planets.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Button className={styles.btnregister}>Salvar</Button>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}