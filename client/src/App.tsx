import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gracias from "./pages/Gracias";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

// Filosofía visual: mantener el diseño premium corporativo original de 4AGILE y rutas simples para Netlify.
function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicios"} component={Servicios} />
      <Route path={"/nosotros"} component={Nosotros} />
      <Route path={"/contacto"} component={Contacto} />
      <Route path={"/gracias"} component={Gracias} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={Article} />
      <Route path={"/404"}>
        <Redirect to="/" replace />
      </Route>
      <Route>
        <Redirect to="/" replace />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
