import React from "react"

function StoryRow(props: any) {
    const story = props.story;
    const count = props.count;
    return (
        <React.Fragment>
            <tr>
                <td key={story.id}>
                    <a>{count}. </a>
                    <a href={story.url}>{story.title} </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a>{story.score} points by {story.by}</a>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default StoryRow;