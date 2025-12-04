import { AiFillGithub } from "solid-icons/ai";
import { SiWindows11, SiAndroid } from "solid-icons/si";
import { MetaHelper } from "../lib";

const Download = () => {
  return (
    <>
      <MetaHelper title="Download" />
      <section class="pt-32 text-center">
        <div>
          <h1 class="bg-gradient-to-b from-yellow-500 to-red-600 bg-clip-text pb-1.5 text-5xl font-bold text-transparent">
            Download
          </h1>
          <p class="text-slate-400">Tải xuống GDVNPS từ nguồn chính thức</p>
        </div>

        <div class="mx-5 mt-4 rounded-xl bg-gradient-to-tr from-slate-700 to-slate-800 p-5">
          <div class="flex flex-col items-center justify-center p-1.5">
            <h2 class="text-3xl font-semibold">GDVNPS latest</h2>
            <div class="flex">
              <p>Có sẵn cho:</p>
              <div class="flex pl-1">
                <span class="p-1">
                  <SiWindows11 title="Windows" />
                </span>
                <span class="p-1">
                  <SiAndroid title="Android" />
                </span>
              </div>
            </div>
          </div>
          <div class="mt-1 flex justify-center">
            <div
              class="w-fit cursor-pointer rounded-lg border-2 border-gray-800 px-16 py-4 duration-200 hover:border-gray-600"
              onClick={() =>
                (window.location.href = "https://github.com/TacoEnjoyer/gdvnps/releases/latest")
              }
            >
              <div>
                <div class="flex justify-center pb-0.5">
                  <AiFillGithub size={50} />
                </div>
                <h3 class="text-center text-2xl font-medium">Github</h3>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center p-1.5 pt-10">
            <h2 class="flex items-center text-left text-3xl font-semibold lg:text-center">
              Geode GDVNPS cho Android
              <span class="pl-3.5">
                <SiAndroid title="Android" />
              </span>
            </h2>
          </div>
          <div class="mt-1 flex justify-center pb-1">
            <div
              class="w-fit cursor-pointer rounded-lg border-2 border-gray-800 px-16 py-4 duration-200 hover:border-gray-600"
              onClick={() =>
                (window.location.href = "https://github.com/TacoEnjoyer/gdvnps/releases/latest")
              }
            >
              <div>
                <div class="flex justify-center pb-0.5">
                  <AiFillGithub size={50} />
                </div>
                <h3 class="text-center text-2xl font-medium">Github</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
