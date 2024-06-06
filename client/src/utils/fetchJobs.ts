import axios from "axios";
const fetchJobs = async () => {
    let res = await axios.get("http://localhost:3001/jobs")
    return res.data
}
export default fetchJobs