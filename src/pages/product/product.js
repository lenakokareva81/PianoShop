import styled from "styled-components";
import { useEffect } from "react";
import { useMatch, useParams } from "react-router-dom";
import { Comments, ProductContent } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../hooks";
import { loadProductAsync } from "../../actions";
import { selectProduct } from "../../selectors";
import { ProductForm } from "./product-form/product-form";

const ProductContainer = ({ className }) => {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const params = useParams();
  const requestserver = useServerRequest();
  const isCreating = useMatch("/product");
  const isEditing = useMatch("/product/:id/edit");

  // useLayoutEffect(() => {
  //   dispatch(RESET_POST_DATA);
  // }, [dispatch, isCreating]);

  // useEffect(() => {
  //   if (isCreating) {
  //     return;
  //   }
  //   dispatch(loadPostAsync(requestserver, params.id));
  // }, [requestserver, params.id, dispatch]);

  useEffect(() => {
    if (isCreating) {
      return;
    }
    dispatch(loadProductAsync(requestserver, params.id));
  }, [requestserver, params.id, dispatch]);

  return (
    <div className={className}>
      {isEditing || isCreating ? (
        <ProductForm product={product} />
      ) : (
        //
        <>
          <ProductContent product={product} />
        </>
      )}
    </div>
  );
};

export const Product = styled(ProductContainer)``;
