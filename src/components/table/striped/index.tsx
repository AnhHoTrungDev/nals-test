import React from "react";
import StripedField from "./StripedField";
import { IStripedTable, IDataFields } from "./StripedField.d";

const Striped: React.FC<IStripedTable> = ({ labels, dataFields }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {labels.map((label: string, idx: number) => (
            <th key={idx + label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataFields.map((dataField: IDataFields[], idx: number) => (
          <StripedField key={idx} data={dataField} />
        ))}
      </tbody>
    </table>
  );
};

export default Striped;
