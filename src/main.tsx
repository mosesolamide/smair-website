import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";
import { SiteLayout } from "./components/Layout";
import { About } from "./pages/About";
import { Blog, PostRoute } from "./pages/Blog";
import { Courses, ProjectRoute } from "./pages/Courses";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { EventRoute, News } from "./pages/News";
import { Sponsorship } from "./pages/Sponsorship";
import { Team } from "./pages/Team";
import { NotFound, Policy, Thanks } from "./pages/UtilityPages";
import "./styles.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="support" element={<Sponsorship />} />
          <Route path="sponsorship" element={<Navigate to="/support" replace />} />
          <Route path="team" element={<Team />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-projects/:slug" element={<ProjectRoute />} />
          <Route path="post/:slug" element={<PostRoute />} />
          <Route path="event-details/:slug" element={<EventRoute />} />
          <Route path="terms-and-conditions" element={<Policy title="Terms & Conditions" />} />
          <Route path="privacy-policy" element={<Policy title="Privacy Policy" />} />
          <Route path="refund-policy" element={<Policy title="Refund Policy" />} />
          <Route path="donation-thank-you-page" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
