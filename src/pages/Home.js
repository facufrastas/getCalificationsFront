import React, { useEffect } from "react";
import { Button, Label } from "reactstrap";
import { InputBox } from "../components/InputBox";
import TableCalifications from "../components/TableCalifications";
import TableAsignatures from "../components/TableAsignatures/";
import Loader from "../components/Loader";
import { validateFields } from "../js/frontend";

const Home = ({ wakeUpServer, getAsignatures, califications, asignatures, clearCalifications, loading }) => {
  useEffect(() => {
    wakeUpServer();
  }, [wakeUpServer]);
  return (
    <div className="text-center">
      <div className="container">
        <h2>Notas</h2>
        <InputBox title="Legajo" keyText="user" type="text" id="user" />
        <Label className="font-weight-bold">Especialidad</Label>
        <br />
        <select className="custom-select select-speciality" name="txtDominios" id="txtDominios">
          <option value="cbasicas">cbasicas</option>
          <option value="civil">civil</option>
          <option value="computos">computos</option>
          <option value="decanato">decanato</option>
          <option value="egresado">egresado</option>
          <option value="electrica">electrica</option>
          <option value="electronica">electronica</option>
          <option value="extension">extension</option>
          <option value="industrial">industrial</option>
          <option value="mecanica">mecanica</option>
          <option value="metalurgica">metalurgica</option>
          <option value="org">org</option>
          <option value="posgrado">posgrado</option>
          <option value="punilla">punilla</option>
          <option value="quimica">quimica</option>
          <option value="radio">radio</option>
          <option value="sa">sa</option>
          <option value="sae">sae</option>
          <option value="scdt">scdt</option>
          <option value="sistemas">sistemas</option>
          <option value="tecnicatura">tecnicatura</option>
          <option value="virtual">virtual</option>
          <option value="frc" defaultValue>
            frc
          </option>
        </select>
        <br />
        <br />
        <InputBox title="Contraseña" keyText="password" type="password" id="password" />
        <div className="alineado-completo">
          <Button
            color="primary"
            className="mb-3 mt-3"
            onClick={() => {
              const user = document.getElementById("user").value;
              const password = document.getElementById("password").value;
              const speciality = document.getElementById("txtDominios").value;
              const result = validateFields();
              if (result) getAsignatures({ user, password, speciality });
            }}>
            Obtener todas las materias
          </Button>
        </div>
        <Button
          color="danger"
          className="mb-3 mt-3"
          onClick={() => {
            clearCalifications();
            window.location.reload();
          }}>
          Limpiar datos
        </Button>
        <div className="container">
          {!loading ? asignatures ? asignatures.asignatures.length > 0 ? <TableAsignatures asignatures={asignatures} user={document.getElementById("user").value} password={document.getElementById("password").value} speciality={document.getElementById("txtDominios").value} names={Array.from(asignatures.asignatures)} /> : <h2>Error: Legajo, especialidad o contraseña inválida.</h2> : null : asignatures ? null : <Loader text={"¡Buscando materias!"} />}
          <br />
          {!loading ? califications ? <TableCalifications califications={califications} /> : null : asignatures ? <Loader text={"¡Buscando notas!"} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
