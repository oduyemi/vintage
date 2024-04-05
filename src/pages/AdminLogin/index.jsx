import React, { useEffect } from "react";
import { AdminLoginForm } from "../../components/Admin/Login";




const AdminLogin = () => {
    useEffect(() => {
        document.body.classList.add("admin");
        return () => {
          document.body.classList.remove("admin");
        };
      }, []);
    return(
        <>
            <AdminLoginForm />
        </>
    )
}


export default AdminLogin;