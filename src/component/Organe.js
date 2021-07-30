const Organe = () => {
    return ( 
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
     );
}
 
export default Organe;