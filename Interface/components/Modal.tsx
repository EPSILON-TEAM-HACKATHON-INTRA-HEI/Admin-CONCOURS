import { TextField, Button } from "@mui/material";
import React, { FormEvent, FormEventHandler, useState } from "react";

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
                <h5 className="card-header text-center bg-goldenrod">New Student</h5>
                <TextField id="filled-basic" label="nom" variant="filled" required/>
                <TextField id="filled-basic" label="prenom" variant="filled" required/>
                <TextField id="filled-basic" label="note de francais (bacc)" variant="filled" error={note_frs_bacc > 20||note_frs_bacc < 0} type="number" helperText={(note_frs_bacc > 20||note_frs_bacc < 0) && errMess} onInput={(e) => { analiseur(e, setNote_frs_bacc) }} value={note_frs_bacc} />
                <TextField id="filled-basic" label="note de francais (concours)" variant="filled" error={(note_frs_concours > 20||note_frs_concours < 0)} type="number" helperText={(note_frs_concours > 20||note_frs_concours < 0) && errMess} onInput={(e) => { analiseur(e, setnote_frs_concours) }} value={note_frs_concours} />
                <TextField id="filled-basic" label="note de mathematique (bacc)" variant="filled" error={(note_math_bacc > 20||note_math_bacc < 0)} type="number" helperText={(note_math_bacc > 20||note_math_bacc < 0) && errMess} onInput={(e) => { analiseur(e, setnote_math_bacc) }} value={note_math_bacc} />
                <TextField id="filled-basic" label="note de mathematique (concours)" variant="filled" error={note_math_concours > 20} type="number" helperText={(note_math_concours > 20||note_math_concours < 0) && errMess} onInput={(e) => { analiseur(e, setnote_math_concours) }} value={note_math_concours} />
                <div className="buttonadd">
                    <button>Add</button>
                </div>
            </div>}
        </>
    )
}