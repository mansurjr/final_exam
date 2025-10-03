import { memo } from "react";
import StudentView from "../../../components/student-view/StudentView";
import { useOutletContext } from "react-router-dom";
import { UseGetUsersByGender } from "../../../utils";

const Males = () => {
  const [data] = useOutletContext();

  return (
    <div>
      <StudentView data={UseGetUsersByGender(data, "male")} />
    </div>
  );
};

export default memo(Males);
