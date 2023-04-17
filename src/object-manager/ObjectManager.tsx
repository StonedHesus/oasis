import ReactDOM from "react-dom";
import { useState } from 'react';

/**
 * @description - A component which allows the user to view and edit the data in the database, which, in the case of this project, is stored within a local JSON file.
 * 
 * @param {data} Record<any, any> - A JSON object containing the project's database.
 * @returns {JSX.Element} - A JSX element containing the object manager component.
 * @StonedHesus
 */
let ObjectManager = ({data}: Record<any, any>): JSX.Element => {
    const [selectedTable, setSelectedTable] = useState<string>('');

    return (
        <>
            <div className="container">
                <h3 className="mb-3">Select the table which you wish to view.</h3>
                    <select className="form-select mb-3" id="table-selection" value={selectedTable} onChange={(event) => {(event.target.value !== 'Choose the table which you wish to operate on...')?document.getElementById('data-table')?.classList.remove('d-none'):document.getElementById('data-table')?.classList.add('d-none'); setSelectedTable(event.target.value)}}>
                    <option selected>Choose the table which you wish to operate on...</option>
                    {data && Object.keys(data).map((key) => 
                        {
                            return <option value={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</option>
                        })
                    }
                    </select>

                <div id="data-table" className="d-none">
                    <h1 className="text-center mb-3 mt-3">{selectedTable.charAt(0).toUpperCase() + selectedTable.substring(1)} Manager</h1>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {data && data.plants.fields.map((field: string) => {
                                    return <th scope="col">{field}</th>
                                })}
                            </tr>
                        </thead>

                        <tbody>
                            {}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ObjectManager;

let editPanel = () => {
    let root = document.getElementById('object-manager') as HTMLElement;

    ReactDOM.render(
        <div className="modal fade" tabIndex={-1} role="dialog" aria-hidden='true'>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        ,root);
    
}