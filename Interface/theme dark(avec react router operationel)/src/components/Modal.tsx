import { TextField, Button } from "@mui/material";
import React, { FormEvent, FormEventHandler, useState } from "react";
import RowPropsType from "./list_of_type(interface)/Table"

export default function (props: { isHere: boolean, setIshere: Function }): React.ReactElement {
    const { isHere, setIshere } = props;
    const [note_math_concours, setnote_math_concours] = useState(0);
    const [note_math_bacc, setnote_math_bacc] = useState(0);
    const [note_frs_concours, setnote_frs_concours] = useState(0);
    const [note_frs_bacc, setNote_frs_bacc] = useState(0);
    function analiseur(e: any | undefined, analise: Function): void {
        analise(e.target.value);
    }
    const errMess = "seulement des nombre entre 0-20"
    return (
        <>
            {isHere && <div className="modale card">
                <div className="bg-goldenrod">
                <h5 className="card-header text-center">New Student</h5>
                </div>
                <div className="input_field">
                <TextField id="filled-basic" fullWidth label="nom" variant="outlined" margin="normal" required/>
                <TextField id="filled-basic" fullWidth label="prenom" variant="outlined" margin="normal" required/>
                <TextField id="filled-basic" fullWidth label="note de francais (bacc)" variant="outlined" margin="normal" error={note_frs_bacc > 20||note_frs_bacc < 0} type="number" helperText={(note_frs_bacc > 20||note_frs_bacc < 0) && errMess} onInput={(e) => { analiseur(e, setNote_frs_bacc) }} value={note_frs_bacc} onChange = {(e) => {setNote_frs_bacc(parseInt(e.target.value))}} />
                <TextField id="filled-basic" fullWidth label="note de francais (concours)" variant="outlined" margin="normal" error={(note_frs_concours > 20||note_frs_concours < 0)} type="number" helperText={(note_frs_concours > 20||note_frs_concours < 0) && errMess} onInput={(e) => { analiseur(e, setnote_frs_concours) }} value={note_frs_concours} onChange = {(e) => e.target.value}/>
                <TextField id="filled-basic" fullWidth label="note de mathematique (bacc)" variant="outlined" margin="normal" error={(note_math_bacc > 20||note_math_bacc < 0)} type="number" helperText={(note_math_bacc > 20||note_math_bacc < 0) && errMess} onInput={(e) => { analiseur(e, setnote_math_bacc) }} value={note_math_bacc} onChange = {(e) => e.target.value}/>
                <TextField id="filled-basic" className="test" fullWidth label="note de mathematique (concours)" variant="outlined" margin="normal" error={note_math_concours > 20} type="number" helperText={(note_math_concours > 20||note_math_concours < 0) && errMess} onInput={(e) => { analiseur(e, setnote_math_concours) }} value={note_math_concours} onChange = {(e) => e.target.value}/>
                </div>
                <div className="buttonadd">
                    <button onClick={
                        (e) => {
                            
                        }
                    }>Add</button>
                </div>
            </div>}
        </>
    )

}