import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Card, Col, Row } from "react-bootstrap";

const ShowContainer = () => {
  const { data: shows = [], isLoading } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const res = await axios(`https://api.tvmaze.com/search/shows?q=all`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(shows);

  return (
    <Row xs={1} md={2} lg={3} className=" p-4  mx-auto row-gap-3">
      {shows?.map((show) => (
        <Col key={show?.show?.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={show?.show?.image?.medium}/>
            <Card.Body>
              <Card.Title>{show?.show?.name}</Card.Title>
              <div className="d-flex align-items-center justify-content-between ">
              <p>Rating: {show?.show?.rating?.average}</p>
              <p>Duration: {show?.show?.runtime} min</p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
              <Link className="btn btn-primary" to={`details/${show?.show?.id}` } >Details</Link>
              <p className="m-0">Language:{show?.show?.language}</p>
              
              </div>
            </Card.Body>
          </Card>
        </Col>
        // <div className="col p-2" key={show?.show?.id}>

        //   <div className="border p-2 m-0 h-100">
        //     <img className="img-fluid" src={show?.show?.image?.medium} alt="" />
        //     <p>{show?.show?.name}</p>
        //     <p>Rating: {show?.show?.rating?.average}</p>
        //     <p>{show?.show?.rating?.average}</p>

        //     <Link to={`details/${show?.show?.id}`} >Details</Link>
        //     {/* <div dangerouslySetInnerHTML={{ __html: show?.show?.summary }} /> */}
        //     {}
        //   </div>
        // </div>
      ))}
    </Row>
  );
};

export default ShowContainer;
