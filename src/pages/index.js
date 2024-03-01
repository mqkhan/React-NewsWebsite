import Aside from "@/components/Aside";
import Layout from "@/components/Layout";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <h1 className="bg-gray-600 p-4 text-center text-gray-200">Chas News</h1>
      <Layout>
        <div className="w-full flex flex-row ">
          <main className="sm:w-[70%] px-2 sm:pl-6 xl:pl-0 sm:pr-3">
            <News category="world" />
          </main>
          <div className="hidden sm:w-[30%] sm:flex px-2 sm:pr-6 xl:pr-0 sm:pl-3 ">
            <Aside />
          </div>
        </div>
      </Layout>
    </>
  );
}
