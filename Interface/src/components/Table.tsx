import React from "react"
import RowPropsType from "./list_of_type(interface)/Table"
export default function (): React.ReactElement {
  return (
    <>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                
                <th>Nom</th>
                <th>Prenoms</th>
                <th>Frs conc..</th>
                <th>Frs Bac</th>
                <th>Frs conc... + Tle</th>
                <th>Math conc...</th>
                <th>Math Bac</th>
                <th>Math conc... + Tle</th>
                <th>Moyenne</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <Row nom="RAKOTO" 
              id="STD00000"
              prenom="Rakotoson" 
              frs_bacc={12} frs_conc={13} 
              frs_conc_Tle={12} 
              math_bac={12} 
              math_conc_tle={14}
              math_conc={12}
              moyenne_selection={10}
              status="admis"
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
function Row(props:RowPropsType): React.ReactElement {
  const {nom,id,frs_bacc,frs_conc,frs_conc_Tle,math_bac,math_conc,math_conc_tle,moyenne_selection,prenom,status}=props;
  return (
    <tr>
      <td>{id}</td>
      <th>{nom}</th>
      <td>{prenom}</td>
      <td>{frs_bacc}</td>
      <td>{frs_conc}</td>
      <td>{frs_conc_Tle}</td>
      <td>{math_conc}</td>
      <td>{math_bac}</td>
      <td>{math_conc_tle}</td>
      <td>{moyenne_selection}</td>
      <td>{status}</td>
    </tr>
  )
}