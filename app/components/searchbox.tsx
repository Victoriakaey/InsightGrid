import { FaSearch } from "react-icons/fa";

export default function Searchbox() {
  return (
    <div className="flex gap-2 border border-buttonBorder text-gray-300 rounded-lg w-64 py-2 px-3">
      <FaSearch className="mt-1" />
      <p className="font-light"> Search </p>
    </div>
  );
}
