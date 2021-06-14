import React from 'react';
import AdminLayout from "../components/AdminLayout";

const AdminMenus = (props) => {
    // console.log(props)
    return (
        <AdminLayout history={props.history}>
            Menus page
        </AdminLayout>
    );
};

export default AdminMenus;