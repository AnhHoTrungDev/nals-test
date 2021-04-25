import React from "react";

type IStripedField = {
  data: any[];
};

const StripedField: React.FC<IStripedField> = ({ data }) => {
  return (
    <tr>
      {data.map((item: any, idx: number) => {
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
