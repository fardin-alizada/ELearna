import{ Navbar,Hero,Clients,Categories,QuickAccess,TopCourses,WhatWeOffer,Testimonials,TrendingCourses,WhyWeAre,CallToAction,Footer} from "./components/index";

function App() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Navbar />
      <Hero />
      <Clients />
      <Categories />
      <QuickAccess />
      <TopCourses />
      <WhatWeOffer />
      <Testimonials />
      <TrendingCourses />
      <WhyWeAre/>
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;