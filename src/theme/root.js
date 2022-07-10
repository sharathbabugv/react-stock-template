import { createTheme } from "@mui/material";

let theme = createTheme({
    palette:{
        primary:{
            main: "#FC6565",
            contrastText: "#ffffff",
        },
        secondary:{
            main: "#FCB90A"
        },
        black:{
            main: "#000000"
        },
        others:{
            main: "FFFFFF"
        },
        background:{
            main: "#F2F2F2"
        },
        success:{
            main: "#00C637"
        }
    }
})

export default theme;