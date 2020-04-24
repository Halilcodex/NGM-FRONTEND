import React, { useState, useRef } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Members.css";
import Image from "react-bootstrap/Image";
import pic1 from "../../assets/pic1.jpg";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";

function Members() {
  return (
    <div className="members-container">
      <h2>NGM MEMBERS</h2>
      <hr />
      <section className="members-section">
        {Array(6)
          .fill(null)
          .map((v, i) => (
            <>
              <OverlayTrigger
                trigger="click"
                key={i}
                placement={"bottom"}
                overlay={
                  <Popover id={`image-${i}`}>
                    <Popover.Title as="h3">{`Charles Robertson`}</Popover.Title>
                    <Popover.Content>
                      Nasir is a very intelligent and articulate
                      scientist/engineer. His career has traversed strategic
                      platform in energy & gas, project management, research,
                      team management and a host of others. It's a success story
                      all the way in his professional career. His knack for
                      details, results and success stands him out among his
                      peers locally and internationally. Recommended by Balogun
                      Ismaila Transport & Logistics Consultant (Chartered)
                    </Popover.Content>
                  </Popover>
                }
              >
                <Image
                  className="member-img"
                  key={i}
                  src={pic1}
                  roundedCircle
                />
              </OverlayTrigger>{" "}
            </>
          ))}
      </section>
    </div>
  );
}

// function Members() {
//   return (
//     <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
//       <div class="members">
//         <h2>NGM Members</h2>
//         <hr class="style13" />
//         <div>
//           <div class="member-row">
//             <img class="member-left" src="http://picsum.photos/200" alt="" />
//             <h3>First member</h3>
//             <p>
//               Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras
//               mattis consectetur purus sit amet fermentum. Nulla vitae elit
//               libero. Nullam quis risus eget urna mollis ornare vel eu leo.
//               Egestas Dolor Risus
//             </p>
//           </div>
//           <div class="member-row">
//             <img class="member-right" src="http://picsum.photos/200" alt="" />
//             <h3>Second member</h3>
//             <p>
//               Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras
//               mattis consectetur purus sit amet fermentum. Nulla vitae elit
//               libero. Nullam quis risus eget urna mollis ornare vel eu leo
//             </p>
//           </div>
//           <div class="member-row">
//             <img class="member-left" src="http://picsum.photos/200" alt="" />
//             <h3>Third member</h3>
//             <p>
//               Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras
//               mattis consectetur purus sit amet fermentum. Nulla vitae elit
//               libero. Nullam quis risus eget urna mollis ornare vel eu leo.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Members;
