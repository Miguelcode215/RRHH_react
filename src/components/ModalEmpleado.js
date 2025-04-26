// src/components/ModalForm.js
import React, { useState } from "react";

const ModalForm = ({ visible, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    area:"",
    sueldo:0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    onSubmit(formData);
    setFormData({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      direccion: "",
      area:"",
      sueldo:0
    });
  };

  if (!visible) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>Registrar Cliente</h5>
          <input name="nombre" onChange={handleChange} placeholder="Nombre" className="form-control my-1" />
          <input name="apellidos" onChange={handleChange} placeholder="Apellidos" className="form-control my-1" />
          <input name="email" onChange={handleChange} placeholder="Email" className="form-control my-1" />
          <input name="telefono" onChange={handleChange} placeholder="Teléfono" className="form-control my-1" />
          <input name="direccion" onChange={handleChange} placeholder="Dirección" className="form-control my-1" />
          <input name="area" onChange={handleChange} placeholder="Area" className="form-control my-1" />
          <input name="sueldo" onChange={handleChange} placeholder="Sueldo" className="form-control my-1" />

          <div className="mt-3 d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={onClose}>Cerrar</button>
            <button className="btn btn-success" onClick={handleGuardar}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
