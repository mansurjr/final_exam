import { memo } from "react";
import StudentView from "../../../components/student-view/StudentView";
import { UseGetUsersByGender } from "../../../utils";
import { useOutletContext } from "react-router-dom";
import type { User } from "../../../types";

const Females = () => {
  const data = useOutletContext<User[] | undefined>();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StudentView data={UseGetUsersByGender(data, "female")} />
    </div>
  );
};

export default memo(Females);
