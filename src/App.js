import { useEffect, useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody";
import Header from "./components/Header";
import Layout from "./ui/Layout";
import { fetchMapShopLocation } from "./services/action/FetchShop";

function App() {


  const [currentPage, setCurrentPage] = useState(0);
  const [onSelectPage, setOnSelectPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [locations, setLocation] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [layout, setLayout] = useState("grid");
  async function fetchData(currentPage = 0) {
    setLoading(true);
    try {
      const data = await fetchMapShopLocation(currentPage);

      setLocation(data.data);
      setCurrentPage(data.meta.currentPage);
      setTotalPage(data.meta.totalPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(onSelectPage);
  }, [onSelectPage]);

  return (
    <Layout>
      <Header setToggle={setLayout}>
        Locations <span>🌏</span>
      </Header>

      <AppBody
        data={locations}
        isLoading={isLoading}
        isError={isError} //refactor
        layout={layout}
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        setOnSelectPage={setOnSelectPage}
      />
    </Layout>
  );
}

export default App;
