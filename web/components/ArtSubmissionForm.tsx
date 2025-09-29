'use client'
import axios from "axios";

export default function ArtSubmissionForm() {
    return (<div className={"bg-blue-500/50 rounded-2xl p-4 "}>
        <fieldset>
            <form>
                <input type={"text"} className={"bg-amber-50/40"}/>
            </form>
            <button onClick={(e) => {
                axios.post("http://localhost:8080/upload", {"testarea": "testdata"})
                console.log("sent")
            }}>Submit
            </button>
        </fieldset>
    </div>)
}