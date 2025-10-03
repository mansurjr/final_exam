import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { UsersRound } from "lucide-react";
import { memo } from "react";
import { useUsers } from "../../api/hooks/useStudent";

const Statistic = () => {
  const { useGetUsers } = useUsers();
  const { data } = useGetUsers();
  const boys = data?.filter((user) => user.gender == "male").length;
  const girls = data?.filter((user) => user.gender == "female").length;
  return (
    <div>
      <Box>
        <Title>Statistic</Title>
      </Box>
      <Box>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{data?.length}</h3>
              <p className="text-gray-500">Jami O'quvchilar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{boys}</h3>
              <p className="text-gray-500">O'g'il bolalar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
          <div className="border border-slate-200 p-3 rounded-xl relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold">{girls}</h3>
              <p className="text-gray-500">Qiz bolalar</p>
            </div>
            <div className="absolute top-0 right-0">
              <UsersRound className="size-20 text-gray-300" />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default memo(Statistic);
