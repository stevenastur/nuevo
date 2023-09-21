import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProd } from "../../firestore/productos";
import { ItemDetail } from "../../components/common/item-detail";

const ContainerDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProd(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export { ContainerDetail };
