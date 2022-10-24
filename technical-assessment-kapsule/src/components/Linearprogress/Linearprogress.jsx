import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaBold } from "react-icons/fa";
import { ProgressBarLine } from "react-progressbar-line";
import "./Linearprogress.css"

const Linearprogress = (props) => {
    const {title, percentage} = props.item
    return (
        <div>
            <div className="linear-progress-bar">            
                <div className="linear-progress-card">
                    <ProgressBarLine
                        value={percentage}
                        min={0}
                        max={100}
                        strokeWidth={2}
                        trailWidth={2}
                        styles={{
                            path: {
                                stroke: '#17b978'
                            },
                            trail: {
                                stroke: '#808080'
                            },
                            text: {
                                fill: '#17b978',
                                textAlign: 'center',
                                fontSize: '19px'
                            }
                        }}
                    />
                    <div className="linear-card-content">
                        <h4>{title}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Linearprogress;