import React, { useState, useRef } from 'react';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Members.css';

class Members extends React.Component {
	renderTooltip = function (props) {
		return (
			<Tooltip id="button-tooltip" {...props}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime blanditiis aliquid atque praesentium,
				laudantium exercitationem fuga ex consectetur? Iste tempora nemo tempore eum magni animi sequi quam
				neque architecto facilis!
			</Tooltip>
		);
	};

	render () {
		return (
			<div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
				<div class="members">
					<h2>NGM Members</h2>
					<hr class="style13" />
					{/*
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
                    
                    </div> */}

					<div class="container">
						<div class="row">
							<div class="member-row col-lg-4 col-md-4 col-sm-4 col-xs-6">
								<OverlayTrigger
									placement="bottom"
									delay={{ show: 250, hide: 400 }}
									overlay={this.renderTooltip}
								>
									<img src="http://fakeimg.pl/250x250/" class="img-responsive member-img" />
								</OverlayTrigger>

								<h3>First Member</h3>
								<p>Cras justo odio, dapibus ac facilisis in</p>
							</div>

							<div class="member-row col-lg-4 col-md-4 col-sm-4 col-xs-6">
								<OverlayTrigger
									placement="bottom"
									delay={{ show: 250, hide: 400 }}
									overlay={this.renderTooltip}
								>
									<img src="http://fakeimg.pl/250x250/" class="img-responsive member-img" />
								</OverlayTrigger>
								<h3>Second Member</h3>
								<p>Cras justo odio, dapibus ac facilisis in</p>
							</div>

							<div class="member-row col-lg-4 col-md-4 col-sm-4 col-xs-6">
								<OverlayTrigger
									placement="bottom"
									delay={{ show: 250, hide: 400 }}
									overlay={this.renderTooltip}
								>
									<img src="http://fakeimg.pl/250x250/" class="img-responsive member-img" />
								</OverlayTrigger>
								<h3>Third Member</h3>
								<p>Cras justo odio, dapibus ac facilisis in</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Members;
