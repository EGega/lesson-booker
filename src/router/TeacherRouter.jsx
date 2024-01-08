import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const TeacherRouter = () => {
    console.log(Outlet);
  return (
    <Outlet />
    )
}

export default TeacherRouter