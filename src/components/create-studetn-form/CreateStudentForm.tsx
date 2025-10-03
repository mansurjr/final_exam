import { useState, memo, useEffect } from "react";
import Title from "../ui/Title";
import { REGIONS } from "../../static";
import { useUsers } from "../../api/hooks/useStudent";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import { clear } from "../../lib/features/userSlice";

const initial = {
  f_name: "",
  l_name: "",
  gender: "",
  address: "",
};

const CreateStudentForm = () => {
  const { createUser, updateUser } = useUsers();
  const update = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initial);

  console.log(update);
  useEffect(() => {
    if (update && update.id) {
      setFormData({
        f_name: update.f_name || "",
        l_name: update.l_name || "",
        gender: update.gender || "",
        address: update.address || "",
      });
    }
  }, [update]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (update && update.id) {
      updateUser.mutate({ ...formData, id: update.id });
    } else {
      createUser.mutate(formData);
    }
    setFormData(initial);
    dispatch(clear());
  };

  return (
    <div className="max-w-[600px] w-full">
      <Title className="mb-3">
        {update && update.id ? "Update Student" : "Create Student"}
      </Title>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="First name"
          name="f_name"
          value={formData.f_name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="Last name"
          name="l_name"
          value={formData.l_name}
          onChange={handleChange}
        />
        <select
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
          name="gender"
          value={formData.gender}
          onChange={handleChange}>
          <option value="" hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
          name="address"
          value={formData.address}
          onChange={handleChange}>
          <option value="" hidden>
            Region
          </option>
          {REGIONS.map((reg, inx) => (
            <option value={reg} key={inx}>
              {reg}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(CreateStudentForm);
