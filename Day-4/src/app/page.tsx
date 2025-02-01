import Header from "@/Components/Header/header";
import Hero from "@/Components/Hero/hero";
import Items from "@/Components/Items/items";
import TopPicks from "@/Components/TopPicks/toppicks";
import Arrivals from "@/Components/NewArrivals/arrivals";
import Blogs from "@/Components/Blog/blogs";
import Instagram from "@/Components/Instagram/instagram";
import Footer from "@/Components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Items/>
      <TopPicks/>
      <Arrivals/>
      <Blogs/>
      <Instagram/>
      <Footer/>
    </div>
  );
}
