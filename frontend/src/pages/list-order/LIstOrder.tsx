import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { Dispatch, useEffect } from "react";
import { Box } from "../../utils/uiCore";
import { useStyles } from "./style";
import { Layout } from "../../layout";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../features/order/orderSlice";
import { getLocalStorageItem } from "../../utils/appUtils";
import { useNavigate } from "react-router-dom";
import { paths } from "../../path/path";

const columns: GridColDef[] = [
  { field: "_id", headerName: "Order Id", width: 240 },
  { field: "sub_total", headerName: "Amount", width: 130 },
  { field: "phone_number", headerName: "Phone Number", width: 130 },
];


export const LIstOrder = () => {
  const classes = useStyles();
  
  const userData = getLocalStorageItem('user')
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate()
  const { order} = useSelector(
    (state: any) => state.order
  );

  useEffect(()=>{
if(!userData){
navigate(paths.login)
}
  },[userData])

  useEffect(()=>{
dispatch(getOrderDetails(userData?._id))
  },[])
  

  return (
    <Layout heading={"Orders"}>
      <Box className={classes.listOrderMain}>
        <Box className={classes.listOrderTable}>
          <DataGrid
            rows={order?.data ?? []}
            columns={columns}
            hideFooterPagination
            hideFooter
            getRowId={(row) => row._id}
          />
        </Box>
      </Box>
    </Layout>
  );
};
