import React, { useState, useEffect } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./Members.css";
import Image from "react-bootstrap/Image";
import Popover from "react-bootstrap/Popover";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";

function Members() {
  const membersUrl =
    "https://ngm-backend-api-test.herokuapp.com/read_member.php";
  const [members, setMembers] = useState([]);
  const [loader, setLoader] = useState(true);

  const getNGMembers = () => {
    Axios.get(membersUrl)
      .then((res) => {
        setMembers(res.data.members_records);
        setLoader(false);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getNGMembers();
  }, []);

  return (
    <div className="members-container">
      <h2>NGM MEMBERS</h2>
      <hr />
      <section className="members-section">
        {loader
          ? Array(6)
              .fill(null)
              .map((v, i) => (
                <Skeleton circle={true} width={300} height={300} />
              ))
          : members.map((item) => (
              <>
                <OverlayTrigger
                  trigger={["focus", "hover", "click"]}
                  key={item.id}
                  placement={"bottom"}
                  overlay={
                    <Popover id={`image-${item.id}`}>
                      <Popover.Title as="h3">{`${item.firstName} ${item.lastName}`}</Popover.Title>
                      <Popover.Content>
                        {item.member_profile_desc}
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Image
                    className="member-img"
                    key={item.id}
                    src={item.img_file}
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
