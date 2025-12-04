import { MetaProvider, Meta, Title } from "@solidjs/meta";
import { BlurHeader } from "../components/effects";
import { HeroButton } from "../components/ui";

const Home = () => {
  return (
    <>
      <MetaProvider>
        <Title>GDVNPS Offcial Website</Title>
        <Meta name="description" content="Trang web chính thức của GDVNPS" />
        <Meta name="og:title" content="GDVNPS Offcial Website" />
        <Meta name="description" content="Trang web chính thức của GDVNPS" />
      </MetaProvider>
      <BlurHeader />
      <section id="" class="mb-7">
        <header class="flex min-h-[100vh] w-full flex-row items-center overflow-hidden">
          <div class="ml-10 lg:ml-20">
            <h1 class="relative z-10 mb-0 flex flex-col bg-gradient-to-br from-yellow-500 to-red-600 bg-clip-text text-3xl font-bold text-transparent lg:text-5xl">
              Chào mừng đến với
              <span class="text-4xl lg:text-6xl">GDVNPS</span>
            </h1>
            <HeroButton />
          </div>
        </header>
      </section>
    </>
  );
};

export default Home;
