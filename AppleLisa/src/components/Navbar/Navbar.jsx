import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return ( <AppBar>
        <Toolbar className="toolbarNavbar" sx={{display: "flex", justifyContent: "space-around"}}>
            <Typography sx={{ color: "white" }}>
                AppleLisa
            </Typography>
            <Button sx={{ color: "white" }}>
                Home
            </Button>
            <Button sx={{ color: "white" }}>
                Categorias
            </Button>
            <Button sx={{ color: "white" }}>
                Productos                
            </Button>
            <CartWidget sx={{ color: "white" }}>

            </CartWidget>
        </Toolbar>
    </AppBar> );
}

export default Navbar;