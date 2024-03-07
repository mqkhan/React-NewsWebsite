import News from "@/components/News";
import Layout from "@/components/Layout";

export default function sports() {
  return (
    <>
      <h1 className="bg-gray-600 text-center p-4 text-gray-200 mb-0">
        Chas Sports
      </h1>
      <Layout>
        <News category="Sports" />
      </Layout>
    </>
  );
}
