import React, { useState } from "react";
import Table from './Table'
import Modal from "./Modal";
import { Button } from "@mui/material";
import Header from './Header';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
function Change(props: { label: string, value: string | number }): React.ReactElement {
    const { label, value } = props
    const [edit, setEdit] = useState(false)
    function update(){
        console.log("update")
        setEdit(!edit)
    }
    return (
        <div className="arrange">
            <p className="card-text">{label}</p>
            {edit ?
                <input className="inputlabel" type={"number"} value={value}></input>
                : <p className="btnlabelunedited">{value}</p>}
            {edit ? 
                <button className="icon-edit">
                    <DoneOutlinedIcon fontSize="small" onClick={update}/>
                </button>
                :
                <button className="icon-edit" onClick={() => { setEdit(!edit) }}>
                    <EditIcon fontSize="small" />
                </button>}
        </div>
    );
}
export default function (): React.ReactElement {
    const [min_admis, setMin_admis] = useState(10);
    const [min_list, setMin_list] = useState(8);
    const [min_bac_conc, setMin_bac_conc] = useState(8)
    const [isHere2, setIsHere2] = useState(false)
    return (
        <div className="all">
            {
                isHere2 && <>
                    <div className="hide" onClick={() => { setIsHere2(!isHere2) }}>

                    </div>
                    <Modal isHere={isHere2} setIshere={setIsHere2} />
                </>
            }
            <div className="header">
                <Header />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebar" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse left">
                        <div className="position-sticky">
                            <div className="nav flex-column">
                                <div className="mt-4">
                                    <div className="card left-card">
                                        <h5 className="card-header bg-goldenrod">{"Condition d'admission"}</h5>
                                        <div className="card-body">
                                            <Change label="Min admission" value={min_admis} />
                                            <Change label="Min liste d'attente" value={min_list} />
                                            <Change label="Min Math Bac+concours" value={min_bac_conc} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="button button_2 generer" onClick={() => { setIsHere2(!isHere2) }}>Generer</div>< br />
                                </div>
                                <div className="card p-3 left-card">
                                    <div className="card_content">
                                        <p className="card-text">Taux de reussite:</p>
                                        <div className="wrap-circles">
                                            <div className="circle per-75">
                                                <div className="inner"><strong>75%</strong></div>
                                            </div>
                                        </div>
                                        <p className="card-text">Valeur mediane: <strong>12</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main className="col-md-9 ml-sm-auto col-lg-9 px-md-4 py-4">
                        <div className="row">
                            <div className="col-12 mb-4 mb-lg-0">
                                <div className="card left-card">
                                    <h5 className="card-header text-center bg-goldenrod">Resultats</h5>
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}