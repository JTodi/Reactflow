import React from "react";
import contents from "./contents";
import { useNavigate } from "react-router-dom";

function Home(){

    const h = useNavigate();

    function usePageChange(){
        h("/main");
    }

    function createRow(info){
        return (
            <tr>
                <td>{info.name}</td>
                <td>{info.input_type}</td>
                <td>{info.createdAt}</td>
            </tr>
        );
    }

    return (
        <div>
            <h1>Workflows</h1>
            <div class="workflows" onClick={usePageChange}>
                <table>
                <tr class="heading">
                    <th>Name</th>
                    <th>Input Type</th>
                    <th>Created At</th>
                </tr>
                {contents.map(createRow)}
                </table>
            </div>
        </div>
    );
}

export default Home;