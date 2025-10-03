import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { useUsers } from "../../api/hooks/useStudent";
import { NavLink, Outlet } from "react-router-dom";
import type { User } from "../../types";

const Student = () => {
  const { useGetUsers } = useUsers();
  const { data } = useGetUsers();

  return (
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Student</Title>
        </div>
      </Box>

      <Box>
        <div className="flex gap-6">
          <NavLink
            to="/students"
            end
            className={({ isActive }) =>
              `border-b-2 pb-1 ${
                isActive
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent"
              }`
            }>
            All
          </NavLink>
          <NavLink
            to="male"
            className={({ isActive }) =>
              `border-b-2 pb-1 ${
                isActive
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent"
              }`
            }>
            Male
          </NavLink>
          <NavLink
            to="female"
            className={({ isActive }) =>
              `border-b-2 pb-1 ${
                isActive
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent"
              }`
            }>
            Female
          </NavLink>
        </div>
      </Box>

      <Outlet context={data as User[] | undefined} />
    </div>
  );
};

export default memo(Student);
