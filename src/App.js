import { useEffect, useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody";
import Header from "./components/Header";
import Layout from "./ui/Layout";
import { fetchMapShopLocation } from "./services/action/FetchShop";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "reactjs-popup/dist/index.css";
import PopUpModal from "./components/LocationPopUpDetail";
import FooterPopup from "./components/FooterPopup";
import LocationPopUpDetail from "./components/LocationPopUpDetail";
function App() {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [onSelectPage, setOnSelectPage] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [locationDetail, setLocationDetail] = useState(null);
  const [onChangePage, setChangePage] = useState(0);
  const [pagination, setPagination] = useState({
    totalPage: 0,
    currentPage: 0,
    nextPage: 0,
    perPage: 0,
  });
  const [locations, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [layout, setLayout] = useState("grid");

  async function fetchData({
    totalPage = 0,
    currentPage = 0,
    nextPage = 0,
    perPage = 0,
  }) {
    setLoading(true);

    try {
      const data = await fetchMapShopLocation(currentPage);

      setLocation(data.data);

      setPagination((pre) => ({
        ...pre,
        totalPage: data.meta.totalPage,
        currentPage: data.meta.currentPage,
        nextPage: data.meta.nextPage,
        perPage: data.meta.perPage,
      }));
    } catch (error) {
      setLocation([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(pagination);
  }, [onChangePage]);

  const onPageChange = (selectedPage) => {
    setChangePage(selectedPage);
    setPagination((pre) => {
      return {
        ...pre,
        currentPage: selectedPage,
      };
    });
  };

  const onClickItem = (location) => {
    console.log(location);
    setShowPopUp((pre) => !pre);
    setLocationDetail(location);
  };

  return (
    <Layout>
      <Header setToggle={setLayout}>
        Locations <span>🌏</span>
      </Header>
      <AppBody
        data={locations}
        isLoading={isLoading}
        layout={layout}
        pagination={pagination}
        setPagination={setPagination}
        onChangePage={onPageChange}
        onClickItem={onClickItem}
      />
      <PureModal
        scrollable={true}
        className="p-0 w-96"
        width="600px"
        isOpen={showPopUp}
        closeButton="X"
        onClose={() => {
          setShowPopUp(false);
          return true;
        }}
      >
        <LocationPopUpDetail detail={locationDetail} />
      </PureModal>
    </Layout>
  );
}

export default App;
