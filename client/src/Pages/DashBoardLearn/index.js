import { ColorModeContext, useMode } from "../DashBoard/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../DashBoard/scenes/global/Topbar";

const DashBoardTest = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div >
          <main className="content">
            <Topbar/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashBoardTest;
