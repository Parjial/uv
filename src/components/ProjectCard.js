import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx-title">
          <h4>{title}</h4>
          </div>
          <div className="proj-txtx">
          <span>{description}</span>

        </div>
      </div>
    </Col>
  )
}
