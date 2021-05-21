import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setShopMapSelected,
  setMapCenter,
} from "../../store/modules/shop/actions";

const Petshop = ({ petshop }) => {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);

  const setSelectedPetshop = () => {
    dispatch(setShopMapSelected(petshop._id));
    dispatch(setMapCenter(petshop.location));
  };

  // const distanceBetween = (lat1, lon1, lat2, lon2) => {
  //   var R = 6371; // Radius of the earth in km
  //   var dLat = deg2rad(lat2 - lat1); // deg2rad below
  //   var dLon = deg2rad(lon2 - lon1);
  //   var a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos(deg2rad(lat1)) *
  //       Math.cos(deg2rad(lat2)) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   var d = R * c; // Distance in km
  //   return d;
  // };

  // function deg2rad(deg) {
  //   return deg * (Math.PI / 180);
  // }

  const handleBadge = () => {
    if (petshop.badge === "Compre 1 Leve 2") {
      return (
        <label className="badge-container badge badge-secondary">
          {petshop.badge}
        </label>
      );
    } else {
      return (
        <label className="badge-container badge badge-primary">
          {petshop.badge}
        </label>
      );
    }
  };

  return (
    <li
      className={`petshop d-inline-block ${
        petshopMapSelected === petshop._id ? "active" : ""
      }`}
      onClick={() => setSelectedPetshop()}
    >
      <div className="d-inline-block">
        <img src={petshop.logo} alt="Petshop logo" className="img-fluid" />
        <div className="d-inline-block pl-3 align-bottom">
          <b>{petshop.nome}</b>
          <div className="petshop-infos">
            <span className="mdi mdi-star"></span>
            <text>
              <b> {petshop.destaque}</b>
            </text>
            <span className="mdi mdi-cash-usd-outline"></span>
            <text> {petshop.categoria}</text>
            <span className="mdi mdi-crosshairs-gps"></span>
            <text> 2,9km</text>
          </div>
          <div className="badge-container">{handleBadge()}</div>
        </div>
      </div>
    </li>
  );
};

export default Petshop;
