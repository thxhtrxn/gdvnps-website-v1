import type { Component } from "solid-js";
import { createEffect, createSignal } from "solid-js";
import { HiOutlineArrowTopRightOnSquare } from "solid-icons/hi";
import GDPS_Logo from "./assets/gdps_icon.jpg";

const App: Component = (props: any) => {
  return (
    <>
      <Navbar />
      <main class="font-main">{props.children}</main>
      <Footer />
    </>
  );
};

export default App;

const Navbar: Component = () => {
  const [navBg, setNavBg] = createSignal(false);

  const changeNavBg = (e: any) => {
    window.scrollY >= 1 ? setNavBg(true) : setNavBg(false);
  };

  createEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <nav
      class={`fixed top-0 z-50 w-full px-3 py-2 font-main duration-200 ${navBg() ? "bg-[#0f172a80] backdrop-blur-[1.5rem]" : "bg-transparent"}`}
    >
      <div class="flex items-center justify-between max-md:flex-col">
        <div>
          <a href="/">
            <img
              class="pointer-events-none rounded-2xl"
              src={GDPS_Logo}
              alt="GDVNPS's logo"
              width={55}
              height={55}
              loading="lazy"
            />
          </a>
        </div>
        <ul class="flex items-center py-2">
          <li class="inline-block px-3 max-md:px-2.5 max-md:py-2">
            <a href="/" class="no-underline">
              Trang chủ
            </a>
          </li>
          <li class="inline-block px-3 max-md:px-2.5 max-md:py-2">
            <a href="/download" class="no-underline">
              Tải xuống
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Footer: Component = () => {
  return (
    <footer class="mb-[-80px] h-fit font-main">
      <div class="mb-[20px] h-[100px]"></div>
      <div class="border-t-[1px] border-t-[#333]">
        <div class="flex flex-col items-center p-12">
          <p class="lg:pb-[.3rem] lg:font-[.9rem]">© GDVNPS 2024 - All rights reserved</p>
          <div>
            <p class="flex">
              <a
                href="https://discord.gg/6NRNqPPnwe"
                class="flex items-center text-sm font-[500] no-underline"
                rel="external"
                target="_blank"
              >
                <span>
                  <HiOutlineArrowTopRightOnSquare />
                </span>
                <span class="pl-[.15rem]">Discord</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
