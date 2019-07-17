import React, { useEffect } from "react";
import MaterialTable, { MTableToolbar } from 'material-table';
import { connect } from "react-redux";
import { getData } from "./actions";
import { columns } from "./assets/constants";
import 'features/Home/styles/index.scss';

export const HomePage = (props) => {
  const showDetailsPage = (_, rowData) => {
    props.history.push({
      pathname: `/user/${rowData.id}`,
      state: {data: rowData}
    });
  }
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="container-fluid root">
      <MaterialTable
        options={{
          pageSize: 5,
          searchFieldAlignment: "left",
          pageSizeOptions: [5]
        }}
        columns={columns}
        onRowClick={showDetailsPage}
        data={props.user.data}
        title=""
      />
    </div>
  );
}
export const Home = connect(state => ({
  user: state.user
}), {
    getData,
  })(HomePage);