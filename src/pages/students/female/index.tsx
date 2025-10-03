import { memo } from "react";
import StudentView from "../../../components/student-view/StudentView";
import { UseGetUsersByGender } from "../../../utils";
import { useOutletContext } from "react-router-dom";

const Females = () => {
  const [data] = useOutletContext();
  return (
    <div>
      <StudentView data={UseGetUsersByGender(data, "female")} />
    </div>
  );
};

export default memo(Females);
