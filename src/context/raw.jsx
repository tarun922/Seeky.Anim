import { get_home } from "../components/forker/gethome";

const data = await get_home(1);

console.log("HOME DATA:", data);

export default data;
