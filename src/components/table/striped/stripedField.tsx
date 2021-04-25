import React from "react";
import {IDataFields, IStripedField} from './StripedField.d';

const StripedField: React.FC<IStripedField> = ({ data }) => {
  return (
    <tr>
      {data.map((item: IDataFields, idx: number) => {
        const { className = "", children = "" } = item;
        return (
          <td key={idx} className={className}>
            {children}
          </td>
        );
      })}
    </tr>
  );
};

export default StripedField;
