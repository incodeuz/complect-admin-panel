import {
  Space,
  Table,
  Tag,
  Button,
  Popover,
  Spin,
  Carousel,
  Popconfirm,
  message,
  InputNumber,
  Input,
} from "antd";
import React, { useEffect, useState } from "react";
import useProductApi from "../service/products";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../store/loaderSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { getAllProducts, deleteProduct, saveProduct } = useProductApi();
  const { isLoading } = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [val, setVal] = useState({
    titleVal: "",
    priceVal: "",
  });

  const saveProductFunc = (id) => {
    const body = {
      title: val.titleVal,
      price: val.priceVal,
    };

    saveProduct(id, body)
      .then((res) => {
        if (res.data) {
          message.info("Product edited!");
          setSelectedId(null);
          setReRender(!reRender);
        }
      })
      .catch((err) => message.error(err.message));
  };

  const columns = [
    {
      title: "Product Image",
      dataIndex: "images",
      key: "images",
      render: (img) => (
        <Popover
          placement="right"
          content={
            <div className="w-[300px] h-[300px]">
              <Carousel autoplay autoplaySpeed={1000}>
                {img?.map((v) => (
                  <div>
                    <img src={v} alt="Product title" />
                  </div>
                ))}
              </Carousel>
            </div>
          }
        >
          <img
            className="w-[50px] h-[50px] rounded-md"
            src={img[0]}
            alt="product image"
          />
        </Popover>
      ),
    },
    {
      title: "Product name",
      dataIndex: "title",
      key: "title",
      render: (title, prod) => (
        <>
          {prod.id === selectedId ? (
            <Input
              onChange={(e) =>
                setVal((p) => ({ ...p, titleVal: e.target.value }))
              }
              defaultValue={title}
              className="w-full"
            />
          ) : (
            <Link to={`/products/${prod.id}`}>{title}</Link>
          )}
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price, prod) => (
        <>
          {selectedId === prod.id ? (
            <InputNumber
              onChange={(val) => setVal((p) => ({ ...p, priceVal: val }))}
              defaultValue={price}
            />
          ) : (
            <p>{price}</p>
          )}
        </>
      ),
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: ({ name }) => <Tag>{name}</Tag>,
    },
    {
      title: "Created date",
      key: "creationAt",
      dataIndex: "creationAt",
      render: (creationAt) => <Tag>{new Date(creationAt).toDateString()}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, prod) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(prod.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          {selectedId === prod.id ? (
            <Button onClick={() => saveProductFunc(prod.id)} type="primary">
              Save
            </Button>
          ) : (
            <Popconfirm
              title="Edit the task"
              description="Are you sure to edit this task?"
              onConfirm={() => setSelectedId(prod.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button>Edit</Button>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ];

  const confirm = (id) => {
    deleteProduct(id)
      .then(
        (res) =>
          res.data && message.info("Product deleted!") && setReRender(!reRender)
      )
      .catch((err) => message.error(err.message));
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  useEffect(() => {
    dispatch(startLoading());
    getAllProducts()
      .then((res) => {
        setData(res.data);
        dispatch(endLoading());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(endLoading());
      });
  }, [reRender]);

  return (
    <div className="bg-[rgb(245, 245, 245)]">
      <Table loading={isLoading} columns={columns} dataSource={data} />
    </div>
  );
};

export default Products;
