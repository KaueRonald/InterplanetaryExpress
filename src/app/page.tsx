'use client'
import NavBar from "@/components/NavBar";
import styles from "./page.module.scss";
import { Box, Button, FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import space from "../../public/space.jpg"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className={styles.container}>
      <NavBar />
      <Box className={styles.content}>
        <Box className={styles.formcontainer}>
          <Box className={styles.form}>
            <h1 className={styles.title}>Cadastre-se</h1>
            <h1 className={styles.subtitle}>Conectando Planetas, Entregando o Futuro</h1>
            <FormControl className={styles.formInputs}>
              <h3>Nome</h3>
              <TextField
                className={styles.input}
                placeholder="Nome"
                type="text"
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
              />
              <h3>Email</h3>
              <TextField
                className={styles.input}
                placeholder="Email"
                type="email"
                variant="outlined"
                required
                sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
              />
              <Box className={styles.senhas}>
                <Box >
                  <h3>Senha</h3>
                  <TextField
                    className={styles.input}
                    placeholder="Digite a senha"
                    variant="outlined"
                    required
                    type="password"
                    sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <h3>Confirmar senha</h3>
                  <TextField
                    className={styles.input}
                    placeholder="Repita a senha"
                    variant="outlined"
                    required
                    type="password"
                    sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9191E9' } }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
              <Button className={styles.btnregister}>Cadastrar</Button>
              <Box className={styles.login}>
                <p>Ja tem uma conta?</p>
                <Button href="/" className={styles.btnlogin} variant="outlined" size="small">Login</Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box className={styles.imagecontainer}>
          <Image className={styles.image} alt="imagem página de cadastro" src={space} priority/>
        </Box>
      </Box>
    </Box>
  );
}
