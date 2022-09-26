import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProduct, deleteProduct, updateProduct } from "./ProductSlice";
import { useState } from "react";

export const Product = () => {
  const productList = useAppSelector((state) => state.product.value);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="addProduct">
        <input
          type="text"
          placeholder="item_name "
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="category "
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addProduct({ id: productList.length + 1, name, category })
            );
          }}
        >
          Add Item
        </button>
      </div>
      <div className="displayProduct">
        {productList.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <h2>{item.category}</h2>
              <h2>{item.id}</h2>
              <input
                type="text"
                placeholder="new item name "
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateProduct({
                      id: item.id,
                      name: newName,
                    })
                  );
                }}
              >
                Update Item Name
              </button>
              <button
                onClick={() => {
                  dispatch(deleteProduct({ id: item.id }));
                }}
              >
                Delete Item
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
