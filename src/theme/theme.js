import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: grey[500]
        },
        secondary: {
            main: grey[300],
            contrastText: "#888"
        }
    }
});

export default theme;