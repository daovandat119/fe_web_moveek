 import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UseScrollToTop from "./hooks/UseScrollToTop";
import BuyTickets from "./pages/BuyTickets";
import SeatDesigner from "./pages/SeatDesigner";
import MovieShowtimes from "./pages/MovieShowtimes";
import BookTickets from "./pages/moviesBooking//BookTickets";
import MovieIsShowing from "./pages/movies/MovieIsShowing";
import Community from "./pages/community";
import UpcomingMovie from "./pages/movies/UpcomingMovie";
import EarlyMovie from "./pages/movies/EarlyMovie";
import MonthlyMovie from "./pages/movies/MonthlyMovie";
import VietnamMovies from "./pages/movies/VietnamMovies";
import NewsSection from "./pages/news/NewsSection";
import MovieReviewSection from "./pages/news/MovieReviewSection";
import VideoSection from "./pages/news//VideoSection";
import InformationalFilm from "./pages/moviesDetail/InformationalFilm";
import MovieDetailShowtime from "./pages/moviesDetail/MovieDetailShowtime";
import MovieDetailReview from "./pages/moviesDetail/MovieDetailReview";
import MovieDetailNew from "./pages/moviesDetail/MovieDetailNew";
import BuyTicketsMovieDetail from "./pages/moviesDetail/BuyTicketsMovieDetail";
import RegionalTheaters from "./pages/theater/RegionalTheaters";
import PersonalPage from "./pages/profiles/PersonalPage";
import UserAccount from "./pages/profiles/UserAccount";
import UserOrders from "./pages/profiles/UserOrders";
import ChangePassword from "./pages/profiles/ChangePassword";
import Recharge from "./pages/profiles/Recharge";
import Diary from "./pages/profiles/Diary";
import Deposits from "./pages/profiles/Deposits";
import TicketPayment from "./pages/moviesBooking/TicketPayment";
import Theater from "./pages/theater/Theater";
import NotFound from "./pages/errors/NotFound";

function AppContent() {
  const location = useLocation();
  const isBookTicketsPage = matchPath("/book-tickets/:id", location.pathname);
  const showFooter = !isBookTicketsPage;

  return (
    <div>
      <UseScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-ticket" element={<BuyTickets />} />
        <Route path="/movie-showtimes" element={<MovieShowtimes />} />
        <Route path="/seat-designer" element={<SeatDesigner />} />
        <Route path="/book-tickets/:id" element={<BookTickets />} />
        <Route path="/ticket-payment/:id" element={<TicketPayment />} />
        <Route path="/movie-is-showing" element={<MovieIsShowing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/upcoming-movie" element={<UpcomingMovie />} />
        <Route path="/early-movie" element={<EarlyMovie />} />
        <Route path="/monthly-movie" element={<MonthlyMovie />} />
        <Route path="/vietnam-movie" element={<VietnamMovies />} />
        <Route path="/news-section" element={<NewsSection />} />
        <Route path="/movie-review-section" element={<MovieReviewSection />} />
        <Route path="/video-section" element={<VideoSection />} />
        <Route path="/informational-film/:name/" element={<InformationalFilm />} />
        <Route path="/movie-detail-showtime/:name/" element={<MovieDetailShowtime />} />
        <Route path="/movie-detail-review/:name/" element={<MovieDetailReview />} />
        <Route path="/movie-detail-new/:name/" element={<MovieDetailNew />} />
        <Route path="/buy-tickets-movie-detail/:name/" element={<BuyTicketsMovieDetail />} />
        <Route path="/theater/:name/" element={<Theater />} />
        <Route path="/regional-theaters/:name/" element={<RegionalTheaters />} />
        <Route path="/user-account/:name" element={<UserAccount />} />
        <Route path="/personal-page/:name" element={<PersonalPage />} />
        <Route path="/diary/:name" element={<Diary />} />
        <Route path="/change-password/:name" element={<ChangePassword />} />
        <Route path="/recharge/:name" element={<Recharge />} />
        <Route path="/user-orders/:name" element={<UserOrders />} />
        <Route path="/deposits/:name" element={<Deposits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;