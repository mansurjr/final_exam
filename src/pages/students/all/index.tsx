import { memo } from "react";
import StudentView from "../../../components/student-view/StudentView";
import { useOutletContext } from "react-router-dom";

const All = () => {
  const [data] = useOutletContext();
  return (
    <div>
      <StudentView data={data} />
    </div>
  );
};

export default memo(All);
