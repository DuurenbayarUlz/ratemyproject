import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProduct, deleteProduct, updateProduct } from "./ProductSlice";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export const Product = () => {
  const productList = useAppSelector((state) => state.product.value);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <Box className="addProduct">
        <TextField
          id="outlined-basic"
          label="Item_name"
          variant="outlined"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="category"
          variant="outlined"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              addProduct({ id: productList.length + 1, name, category })
            );
          }}
        >
          Add Item
        </Button>
      </Box>
      <Box className="displayProduct">
        {productList.map((item) => {
          return (
            <Box>
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

              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  dispatch(
                    updateProduct({
                      id: item.id,
                      name: newName,
                    })
                  );
                }}
              >
                Update
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  dispatch(deleteProduct({ id: item.id }));
                }}
              >
                Delete
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
