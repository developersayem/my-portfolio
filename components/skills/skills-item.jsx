import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

function SkillsItem(props) {
    return (
        <InteractiveHoverButton>{props.name}</InteractiveHoverButton>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate);
    }
}

export default SkillsItem