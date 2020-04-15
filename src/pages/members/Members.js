import React from "react";
import "./Members.css";

function Members() {
    return (
        <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
        

            <div class="members">
                <h2>NGM members</h2>
                    <div class="member-row">
                        <img class="member-left" src="http://picsum.photos/200" alt="" />
                        <h3>First member</h3>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero. Nullam quis risus eget urna mollis ornare vel eu leo. Egestas Dolor Risus</p>
                    </div>
                    <div class="member-row">
                        <img class="member-right" src="http://picsum.photos/200" alt="" />
                        <h3>Second member</h3>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero. Nullam quis risus eget urna mollis ornare vel eu leo</p>
                    </div>
                    <div class="member-row">
                        <img class="member-left" src="http://picsum.photos/200" alt="" />
                        <h3>Third member</h3>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    </div>
                
            </div>
            
        </div>

    );
}

export default Members;