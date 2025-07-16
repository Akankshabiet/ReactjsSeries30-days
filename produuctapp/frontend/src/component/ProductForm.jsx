import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../utils/validation";

export default function ProductForm(props) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = (data) => {
    props.onSubmitProduct(data); 
    reset();
  };
  
  
  const outerDivStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)", // dark blue gradient
  };

  // 💎 Glass effect form style
  const formStyle = {
    padding: "30px",
    borderRadius: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    width: "100%",
    maxWidth: "420px",
    color: "white",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "6px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    outline: "none",
  };

  const errorStyle = {
    color: "#ff6b6b",
    fontSize: "0.85rem",
    marginBottom: "12px",
  };

  const buttonStyle = {
    backgroundColor: "#00c6ff",
    backgroundImage: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "white",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "transform 0.2s",
  };

  return (
    <div style={outerDivStyle}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <div>
          <label style={labelStyle}>Product Name</label>
          <input {...register("name")} style={inputStyle} />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        <div>
          <label style={labelStyle}>Price</label>
          <input {...register("price")} style={inputStyle} />
          {errors.price && <p style={errorStyle}>{errors.price.message}</p>}
        </div>

        <div>
          <label style={labelStyle}>Description</label>
          <textarea {...register("description")} style={{ ...inputStyle, minHeight: "80px" }} />
          {errors.description && <p style={errorStyle}>{errors.description.message}</p>}
        </div>

        <button type="submit" style={buttonStyle}>
           Submit Product
        </button>
      </form>
    </div>
  );
}
