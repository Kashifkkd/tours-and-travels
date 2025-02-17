// import Categories from "./components/categories";
import Header from "./components/header";
// import Destinations from "./components/home/destinations";
import Features from "./components/home/features";
import MoreFeatures from "./components/more_features";
import Newsletter from "./components/newsletter";
import Reviews from "./components/reviews";
import Services from "./services/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Features />
      {/* <Destinations /> */}
      <Services />
      <MoreFeatures />
      {/* <Categories /> */}
      <Reviews />
      <Newsletter />
    </div>
  );
}
