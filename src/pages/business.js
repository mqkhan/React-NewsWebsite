import News from "@/components/News";
import Layout from "@/components/Layout";

export default function Business() {
  return (
    <>
      <h1 className="bg-gray-600 text-center p-4 text-gray-200 mb-0">Chas Business</h1>
      <Layout>
        <News category="business" />
      </Layout>
    </>
  );
}
