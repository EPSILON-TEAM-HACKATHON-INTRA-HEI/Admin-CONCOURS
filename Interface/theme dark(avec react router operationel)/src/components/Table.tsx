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
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenoms</th>
                <th scope="col">Francais concours</th>
                <th scope="col">Francais Bac</th>
                <th scope="col">Total Francais</th>
                <th scope="col">Math concours</th>
                <th scope="col">Math Bac</th>
                <th scope="col">Total Math</th>
                <th scope="col">Moyenne</th>
                <th scope="col">Status</th>
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
function Row(props: RowPropsType): React.ReactElement {
  const { nom, id, frs_bacc, frs_conc, frs_conc_Tle, math_bac, math_conc, math_conc_tle, moyenne_selection, prenom, status } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{nom}</td>
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