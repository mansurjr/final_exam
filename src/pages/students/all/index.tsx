import { memo } from "react";
import StudentView from "../../../components/student-view/StudentView";
import { useOutletContext } from "react-router-dom";
import type { User } from "../../../types";

const All = () => {
  const data = useOutletContext<User[] | undefined>();

  if (!data) return <div>Loading...</div>;
  return <StudentView data={data} />;
};

export default memo(All);
