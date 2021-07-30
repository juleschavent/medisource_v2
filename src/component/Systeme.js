import axios from "axios";
import useGet from "./customHook/useGet";

const Systeme = ({ systeme, setSysteme }) => {
  const systemeList = useGet(
    axios.get("http://localhost:3001/systeme"),
    "List Systeme"
  );

  const handleSelection = (e) => {
    setSysteme(e.target.value);
  };

  const systemeDesc = useGet(
    axios.get(`http://localhost:3001/systemeDesc/${systeme}`),
    "Desc Systeme"
  );

  return (
    <div>
      <form>
        <select onChange={handleSelection}>
          <option value="">--Choisir un système--</option>
          {systemeList &&
            systemeList.map((systeme, index) => (
              <option key={index} value={systeme.name_systeme}>
                {systeme.name_systeme}
              </option>
            ))}
        </select>
      </form>
      <p>{systemeList && systemeDesc.desc_systeme}</p>
    </div>
  );
};

export default Systeme;
