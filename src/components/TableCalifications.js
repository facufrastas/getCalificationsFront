import React from 'react';
import { Table } from 'reactstrap';

const TableCalifications = ({ califications }) => {
    return (
        <>
            {califications ? califications.map((asignature) => (
                <div>
                    <h4 style={{ textAlign: 'center' }}>{asignature.name}</h4>
                    <Table responsive className="text-white">
                        <thead>
                            <tr>{asignature.evaluationInstances
                                .slice(1)
                                .map((instance) => (<th>{instance}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>{asignature.evaluationCalifications
                                .map((calification) => (<td>{calification}</td>
                            ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )) : null}
        </>
    );
}

export default TableCalifications;