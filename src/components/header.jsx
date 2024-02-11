// eslint-disable-next-line react/prop-types
export default function Header ({score, best}) {
    
    return (
        <>
        <header>
            <div className="left">
                <div className="title">Card memory game</div>
                <div className="sub-title">Get points by clicking on an image but dont click on any more than once!</div>
            </div>
            <div className="right">
                <div id="score">{"Score: " + score}</div>
                <div id="high-score">{"Best: " + best}</div>
            </div>
        </header>
        </>
    )
}