import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useQuery } from "react-query";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const ShowDetails = () => {
  const { id } = useParams();

  const { data: show = [], isLoading } = useQuery({
    queryKey: ["show"],
    queryFn: async () => {
      const res = await axios(`https://api.tvmaze.com/shows/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(id, show);
  return (
    <div>
      <h1 className="text-center border-bottom">{show?.name}</h1>
      <Row xs={1} sm={2} lg={3} className="   mx-auto row-gap-3 p-2">
        <Col xs={12}sm={4} md={4} lg={3}>
          <img
            className="img-fluid w-100 rounded-3 p-0"
            src={show?.image?.medium}
            alt=""
          />
        </Col>
        <Col xs={12}sm={8} md={8} lg={5}>
          <div className="border bg-danger shadow-sm bg-opacity-10 rounded-3 p-2 h-100">
            <div dangerouslySetInnerHTML={{ __html: show?.summary }} />
            <button className="btn btn-outline-primary fw-bold">Book A Ticket</button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div className="border bg-primary shadow-sm bg-opacity-10 rounded-3 p-2 h-100">
            <h3 className="text-center py-2 border-bottom">Show Info</h3>
            <p className="m-0 p-1 ">Network: {show?.network?.name}</p>
            <p className="m-0 p-1 ">
              Schedule: {show?.schedule?.days[0]} at {show?.schedule?.time} (
              {show?.runtime} min)
            </p>
            <p className="m-0 p-1 ">Status: {show?.status}</p>
            <p className="m-0 p-1 ">Show Type: {show?.type}</p>
            <p className="m-0 p-1 ">
              Genre: {show?.genres[0]} | {show?.genres[1]}
            </p>

            <p className="m-0 p-1 ">Official Site: {show?.officialSite}</p>
            <p className="m-0 p-1 ">Rating: {show?.rating?.average}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDetails;
