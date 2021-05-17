import "./styles.css";

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://www.tanakao.com.br/media/catalog/product/cache/1/image/600x970/9df78eab33525d08d6e5fb8d27136e95/t/h/thumb_f2612a6c-21ca-4256-a0e4-0f78a9b0c652.png"
        alt="Product logo"
        className="img-fluid align-center"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 30,00</label>
      </h4>
      <small>
        <b>
          Ração Pedigree Carne Frango e Cereais Para Cães Adultos Raças Médias e
          Grandes
        </b>
      </small>
    </div>
  );
};

export default Product;
