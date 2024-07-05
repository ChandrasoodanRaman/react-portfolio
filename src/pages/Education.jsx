import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           G.G.S.M.MATRIC.HR.SEC.School,Mayiladuthurai.
          </h3>
          <p> 10th std</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ARC Kamatchi Matric Hr Sec School,Mayiladuthurai.
          </h3>
          <p> 12th Std</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2025"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SASTRA Deemed University,Thanjavur.
          </h3>
          <p className="vertical-timeline-element-subtitle">
          B.TECH CSE(with Specialisation in Artificial Intelligence and Datascience)
            
          </p>
         
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Education;