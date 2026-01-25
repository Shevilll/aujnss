import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Aims = lazy(() => import("./pages/Aims"));
const Motto = lazy(() => import("./pages/Motto"));
const Benifits = lazy(() => import("./pages/Benifits"));
const Days = lazy(() => import("./pages/Days"));
const Officers = lazy(() => import("./pages/Officers"));
const Media = lazy(() => import("./pages/Media"));
const Videos = lazy(() => import("./pages/Videos"));
const Others = lazy(() => import("./pages/Others"));
const Regular = lazy(() => import("./pages/Regular"));
const Special = lazy(() => import("./pages/Special"));
const Report = lazy(() => import("./pages/Report"));
const Joining = lazy(() => import("./pages/Joining"));
const Volunteers = lazy(() => import("./pages/Volunteers"));
const Join = lazy(() => import("./pages/Join"));
const Contact = lazy(() => import("./pages/Contact"));

export const routes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/aims-objectives", element: <Aims /> },
    { path: "/motto", element: <Motto /> },
    { path: "/benefits", element: <Benifits /> },
    { path: "/weeks-days", element: <Days /> },
    { path: "/program-officers", element: <Officers /> },
    { path: "/media", element: <Media /> },
    { path: "/videos", element: <Videos /> },
    { path: "/events", element: <Others /> },
    { path: "/regular", element: <Regular /> },
    { path: "/special-camp", element: <Special /> },
    { path: "/reports", element: <Report /> },
    { path: "/joining-form", element: <Joining /> },
    { path: "/volunteers", element: <Volunteers /> },
    { path: "/how-to-join", element: <Join /> },
    { path: "/contact", element: <Contact /> },
];
