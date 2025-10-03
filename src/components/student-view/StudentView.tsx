import { memo, type FC } from "react";
import Box from "../ui/Box";
import type { User } from "../../types";
import { Bookmark, SquarePen, Trash } from "lucide-react";
import { useUsers } from "../../api/hooks/useStudent";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../lib/features/bookmarkSlice";
import { useLocation } from "react-router-dom";
import { addUpdate } from "../../lib/features/userSlice";

interface Props {
  data: User[];
}

const StudentView: FC<Props> = ({ data }) => {
  console.log(data)
  const { deleteUser } = useUsers();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {data?.map((student: User) => (
          <div
            className="border border-slate-200 p-4 rounded-xl text-center"
            key={student.id}>
            <div className="relative">
              <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
                <span className="text-4xl font-bold text-slate-400">
                  {student.f_name[0].toUpperCase()}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex flex-col gap-3">
                <button
                  onClick={() =>
                    pathname == "/bookmark"
                      ? dispatch(removeFromCart(+student.id))
                      : dispatch(addToCart(student))
                  }
                  className="cursor-pointer">
                  <Bookmark className="size-5 text-gray-600" />
                </button>
                <button
                  onClick={() => deleteUser.mutate(student.id)}
                  className="cursor-pointer">
                  <Trash className="size-5 text-red-500" />
                </button>
                <button
                  onClick={() => dispatch(addUpdate(student))}
                  className="cursor-pointer">
                  <SquarePen className="size-5 text-green-600" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">
                {student.f_name + " " + student.l_name}
              </h3>
              <p>{student.address}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default memo(StudentView);
