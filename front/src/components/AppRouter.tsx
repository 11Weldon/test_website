import React, {useContext} from 'react';
import {Routes,Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import UserStore from "../stores/UserStore";


const AppRouter = () => {
    const user = useContext(Context);

    console.log(user);
    return (
        <Routes>
            {user?.user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} Component={Component} />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} Component={Component} />
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};


export default AppRouter;