import React from 'react';
import { Table, Button } from 'reactstrap';

const TableAsignatures = ({ asignatures, getCalifications, user, password, speciality, names }) => {
    return (
        <>
            {asignatures ?
                <div>
                    <Table responsive className="text-white">
                        <thead>
                            <tr>{asignatures.asignatures
                                .map((asignature) => (<th style={{ fontSize: "12px" }}>{asignature}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>{asignatures.links
                                .map((link) => (<td><Button style={{ fontSize: "12px" }} size="sm" onClick={() => getCalifications({ link, user, password, speciality, names })}>Buscar notas</Button></td>
                            ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
             : null}
        </>
    );
}

export default TableAsignatures;