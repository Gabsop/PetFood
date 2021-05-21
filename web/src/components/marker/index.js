import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarkerIcon from "../../assets/marker.png";
import MarkerIconSelected from "../../assets/marker-selected.png";

const Marker = ({ petshop }) => {
  const { petshopMapSelected } = useSelector((state) => state.shop);

  return (
    <Link to={`/petshop/${petshop._id}`}>
      <img
        src={
          petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon
        }
        alt="Marker"
      />
      <img src={petshop.logo} alt="Petshop logo" className="img-marker" />
    </Link>
  );
};

export default Marker;
