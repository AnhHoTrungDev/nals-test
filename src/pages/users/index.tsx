import React, { useCallback, useEffect, useState } from "react";
import { StripedTable } from "src/components/table";
import axiosClient from "src/config/call-api";
import avatarNotFound from "../../assets/images/faces/avatar-not-found.png";

const Users: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axiosClient
      .get(`/users`)
      .then((response) => {
        if (response && response.data) {
          setData(response.data);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const labels = ["Avatar", "Name", "Email", "Phone"];

  const dataFields = data.map((el) => {
    const { avatar = "", email = "", name = "", phone = "" } = el;
    return [
      {
        className: "py-1",
        children: (
          <img
            src={avatar ?? avatarNotFound}
            alt="avatar-user"
            onError={(e) => {
              (e.target as HTMLImageElement).setAttribute(
                "src",
                avatarNotFound
              );
            }}
          />
        ),
      },
      {
        children: name,
      },
      {
        children: email,
      },
      {
        children: phone,
      },
    ];
  });

  return !isLoading ? (
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <div className="table-responsive">
                <StripedTable labels={labels} dataFields={dataFields} />
              </div>
            </div>
          </div>
        </div>
    </div>
  ) : (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Users;
