import StudentView from "@/components/student-view/StudentView";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../lib";

const Bookmark = () => {
  const data = useSelector((state: RootState) => state.bookmark.items);
  return (
    <div>
      <Box>
        <Title>Bookmark</Title>
      </Box>
      <StudentView data={data} />
    </div>
  );
};

export default memo(Bookmark);
